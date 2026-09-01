import type { DomainColor } from "./theme";

export type Project = {
  title: string;
  tag: string;
  color: DomainColor;
  description: string;
  bullets: string[];
  stack: string[];
  github: string;
  demo?: string;
};

export type Experience = {
  org: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  link?: { label: string; href: string };
};

export const person = {
  name: "Aarav Pant",
  title: "AI/ML Engineering & Cloud Security",
  tagline:
    "4th-year Computer Science student building systems that get audited, measured, and shipped — not just demoed.",
  location: "Hamilton, ON",
  email: "panta3@mcmaster.ca",
  phone: "+1 (289) 556-4332",
  linkedin: "https://www.linkedin.com/in/aaravpant/",
  github: "https://github.com/panta3",
};

export const summary =
  "Fourth-year Computer Science student pursuing a career in AI/ML Engineering and Cloud Security. My work spans 16 months of software engineering at Evertz, hands-on cloud security tooling — automated AWS auditing, opt-in remediation, Kubernetes security checks — and 8 months as a Teaching Assistant mentoring students through algorithm design and software development. Currently working toward CompTIA Security+, AWS Solutions Architect, and Google Professional ML Engineer certifications.";

export const education = {
  school: "McMaster University",
  program: "B.Eng in Computer Science (Honours, Co-op), 4th Year",
  period: "Sep 2022 – Apr 2027",
  detail: "Dean's Honour List · GPA 3.7/4.00",
};

export const coursework = [
  "Discrete Math",
  "Introduction to Programming",
  "Intro to Software Using Web Programming",
  "Automata and Computability",
  "Data Structures & Algorithms",
  "Databases",
  "Computer Architecture",
  "Intro to Software Development",
  "Concurrent Systems",
  "Algorithms and Software Design",
  "Algorithms and Complexity",
  "Data Privacy",
  "Principles of Programming Languages",
  "Computer Networks and Security",
  "Operating Systems",
  "Syntax-Based Tools & Compilers",
  "Applied Cryptography",
  "Software Testing",
  "Fundamentals of Machine Learning",
  "Linear Optimization",
  "Continuous Optimization",
  "Capstone Project",
];

export const certifications = [
  { name: "CompTIA Security+ (SY0-701)", status: "In progress — Dec 2026" },
  { name: "AWS Solutions Architect (SAA-C03)", status: "In progress — Jan 2027" },
  { name: "Google Professional ML Engineer", status: "Targeted — Feb 2027" },
];

export const projects: Project[] = [
  {
    title: "AWS Cloud Security Posture Scanner",
    tag: "Cloud Security",
    color: "cyan",
    description:
      "Automated auditing tool that scans AWS accounts against CIS Foundations Benchmark controls, tracks findings through a real lifecycle, and can safely auto-remediate low-risk issues.",
    bullets: [
      "5 CIS AWS checks + 4 CIS Kubernetes Benchmark checks, validated live against a real AWS account and cluster",
      "Serverless pipeline (Lambda + EventBridge + DynamoDB + SNS) via Terraform with opt-in auto-remediation",
      "CloudWatch dashboard and custom metrics, backed by a least-privilege IAM role scoped per capability",
    ],
    stack: ["Python", "boto3", "Terraform", "AWS", "Kubernetes"],
    github: "https://github.com/panta3/cloud-security-posture-scanner",
  },
  {
    title: "Security-Focused RAG Assistant",
    tag: "AI / ML",
    color: "violet",
    description:
      "RAG pipeline over security and compliance documents — grounded, citation-backed answers with a measured hallucination rate instead of blind trust in the model's output.",
    bullets: [
      "GPU-accelerated embeddings + a locally-hosted LLM, quantized (GGUF) for a 37x CPU inference speedup in production",
      "Structural hallucination guard that rejects generation below an empirically-derived retrieval-confidence threshold",
      "28-question evaluation harness — 66.7% retrieval precision, 66.7% citation accuracy, 0% hallucination rate",
    ],
    stack: ["FastAPI", "PyTorch", "Chroma", "GCP Cloud Run", "Docker"],
    github: "https://github.com/panta3/security-rag-assistant",
    demo: "https://security-rag-assistant-x3hib67cua-uc.a.run.app",
  },
  {
    title: "Job Application Tracker",
    tag: "Full-Stack",
    color: "amber",
    description:
      "A full-stack personal CRM for the job/co-op search — a status pipeline and live funnel stats instead of a spreadsheet.",
    bullets: [
      "Status pipeline (Applied → OA → Interview → Offer/Rejected) with a dashboard showing real-time funnel conversion",
      "Prisma-backed Next.js application with a follow-up reminder system that flags stale applications after 14 days",
      "All API inputs validated at the boundary with Zod, plus indexed database queries matching actual access patterns",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    github: "https://github.com/panta3/job-application-tracker",
  },
];

export const experience: Experience[] = [
  {
    org: "McMaster University",
    role: "Teaching Assistant — CS 1MD3",
    location: "Hamilton, ON",
    period: "Sept – Dec 2026",
    bullets: [
      "Supported students on programming fundamentals — control flow, recursion, exceptions, and file I/O",
      "Assisted with grading and technical documentation, providing clear feedback to help students improve",
      "Invigilated midterm and final examinations, helping ensure a smooth, organized, and fair testing environment",
    ],
  },
  {
    org: "Evertz Microsystems Ltd.",
    role: "Software Engineer Intern",
    location: "Burlington, ON",
    period: "May 2025 – August 2026",
    bullets: [
      "Developed and executed comprehensive test cases for the Mediator-X platform, ensuring robust media asset management and playout functionality across diverse client environments",
      "Collaborated directly with clients to gather requirements and deliver customized solutions, including dynamic reports, SQL queries, and automation scripts",
      "Engineered automation tools using Python and JavaScript to streamline repetitive tasks within Mediator-X workflows, reducing manual intervention",
    ],
  },
  {
    org: "McMaster University",
    role: "Teaching Assistant — COMPSCI 2XC3",
    location: "Hamilton, ON",
    period: "Jan – Apr 2025",
    bullets: [
      "Bridged algorithm design & analysis with software design principles through an experiential, workplace-simulated tutorial and lab approach",
      "Gave feedback on technical documentation and presentations, helping students strengthen communication and problem-solving skills",
      "Invigilated midterm and final examinations, helping ensure a fair, organized testing environment",
    ],
  },
  {
    org: "Google Developer Student Club (GDSC)",
    role: "Open Source Team Member — Software Developer",
    location: "McMaster University",
    period: "Oct 2024 – April 2025",
    link: { label: "GitHub", href: "https://github.com/DSC-McMaster-U/DBAC-Companion-App" },
    bullets: [
      "Collaborated with 9 developers to design and implement 3 key features for the DBAC Companion App using React Native and Tailwind CSS",
      "Redesigned the application interface, leading to a 10% increase in user satisfaction and streamlined navigation",
      "Utilized Google Cloud Platform for database management and Firestore for real-time data synchronization",
    ],
  },
  {
    org: "McMaster Artificial Intelligence Society",
    role: "Software Developer",
    location: "Hamilton, ON (Hybrid)",
    period: "Sept 2024 – Feb 2025",
    bullets: [],
  },
  {
    org: "Zenit Excelencia",
    role: "Software Engineer Intern",
    location: "Delhi, India (Remote)",
    period: "Jul – Sept 2023",
    bullets: [
      "Merged and managed extensive Excel datasets using Python and Pandas, streamlining the organization's data-driven decision-making",
      "Built import/export mechanisms for courses on Zenit Excelencia's online platform, improving usability and page performance",
    ],
  },
];

export type SkillGroup = {
  label: string;
  color: DomainColor;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    color: "cyan",
    skills: [
      "Python",
      "Java",
      "C",
      "C++",
      "C#",
      "Kotlin",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Haskell",
      "Elm",
    ],
  },
  {
    label: "Databases",
    color: "cyan",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
  },
  {
    label: "AI / ML",
    color: "violet",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Hugging Face",
      "LangChain",
      "NumPy",
      "Scikit-learn",
      "Pandas",
      "Matplotlib",
    ],
  },
  {
    label: "Frameworks & Tools",
    color: "amber",
    skills: [
      "React",
      "React Native",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Bootstrap",
      "Express",
      "Django",
      "Three.js",
      "Firebase",
      "FastAPI",
      "Spring Boot",
      "Angular",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Postman",
      "JUnit",
      "Git",
      "GitHub",
      "Jira",
    ],
  },
  {
    label: "Cloud & DevOps",
    color: "cyan",
    skills: [
      "AWS",
      "GCP",
      "Terraform",
      "GitHub Actions",
      "Docker Compose",
      "CI/CD",
    ],
  },
];
