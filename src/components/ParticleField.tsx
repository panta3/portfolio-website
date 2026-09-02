"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const POINT_COUNT = 220;
const CONNECT_DISTANCE = 2.6;
const FIELD_RADIUS = 9;

export default function ParticleField() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // A full-viewport WebGL scene rendering every frame is too heavy for
    // most phone GPUs — it doesn't crash, it just makes the whole page
    // feel laggy/unresponsive since the GPU/CPU stays busy on 3D instead
    // of scrolling and touch handling. Skip it below the tablet
    // breakpoint rather than trying to make it cheap enough there; the
    // CSS grid-field texture already gives the hero some visual texture
    // without any of this cost.
    if (window.innerWidth < 768) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 11;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Node points, scattered through a rough sphere so the field reads as
    // volumetric rather than flat.
    const positions: THREE.Vector3[] = [];
    for (let i = 0; i < POINT_COUNT; i++) {
      const v = new THREE.Vector3(
        (Math.random() - 0.5) * FIELD_RADIUS * 2,
        (Math.random() - 0.5) * FIELD_RADIUS * 1.2,
        (Math.random() - 0.5) * FIELD_RADIUS * 2
      );
      positions.push(v);
    }

    // Two color families rather than one flat color — most nodes cyan,
    // roughly a fifth violet, so the field reads as multi-tone without
    // losing the "constellation" cohesion (lines stay a single color).
    const violetEvery = 5;
    const cyanPositions = positions.filter((_, i) => i % violetEvery !== 0);
    const violetPositions = positions.filter((_, i) => i % violetEvery === 0);

    const cyanGeometry = new THREE.BufferGeometry().setFromPoints(cyanPositions);
    const pointMaterial = new THREE.PointsMaterial({
      color: 0x35e0c9,
      size: 0.045,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });
    group.add(new THREE.Points(cyanGeometry, pointMaterial));

    const violetGeometry = new THREE.BufferGeometry().setFromPoints(violetPositions);
    const violetPointMaterial = new THREE.PointsMaterial({
      color: 0xa78bfa,
      size: 0.05,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });
    group.add(new THREE.Points(violetGeometry, violetPointMaterial));

    // Constellation lines between nearby nodes — computed once, not
    // per-frame, since the points themselves don't move relative to
    // each other (only the whole group rotates).
    const linePositions: number[] = [];
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        if (positions[i].distanceTo(positions[j]) < CONNECT_DISTANCE) {
          linePositions.push(
            positions[i].x,
            positions[i].y,
            positions[i].z,
            positions[j].x,
            positions[j].y,
            positions[j].z
          );
        }
      }
    }
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x35e0c9,
      transparent: true,
      opacity: 0.08,
    });
    group.add(new THREE.LineSegments(lineGeometry, lineMaterial));

    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    let scrollProgress = 0;
    const onScroll = () => {
      // Fades and drifts the field out as the viewer scrolls past the
      // hero, instead of it lingering behind dense text sections below.
      scrollProgress = Math.min(window.scrollY / (window.innerHeight * 0.9), 1);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    let frameId = 0;
    const clock = new THREE.Clock();

    const render = () => {
      const t = clock.getElapsedTime();

      group.rotation.y = t * 0.035 + mouseX * 0.15;
      group.rotation.x = t * 0.012 + mouseY * 0.1;
      group.position.z = scrollProgress * 4;

      const fade = 1 - scrollProgress;
      pointMaterial.opacity = 0.85 * fade;
      violetPointMaterial.opacity = 0.8 * fade;
      lineMaterial.opacity = 0.08 * fade;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(render);
    };

    if (prefersReducedMotion) {
      pointMaterial.opacity = 0.5;
      violetPointMaterial.opacity = 0.45;
      lineMaterial.opacity = 0.05;
      renderer.render(scene, camera);
    } else {
      render();
    }

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cyanGeometry.dispose();
      pointMaterial.dispose();
      violetGeometry.dispose();
      violetPointMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
