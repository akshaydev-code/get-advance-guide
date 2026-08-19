import { ResourceItem } from '../types';

export const initialResourcesData: ResourceItem[] = [
  {
    id: 'res_1',
    title: 'Complete FAANG System Design Blueprint 2026',
    slug: 'faang-system-design-blueprint-2026',
    category: 'System Design',
    type: 'Guide',
    level: 'Advanced',
    readTime: '25 min read',
    publishedDate: 'August 2026',
    isFeatured: true,
    isPopular: true,
    isTrending: true,
    views: 8940,
    likes: 1240,
    downloads: 3420,
    downloadFileName: 'FAANG-System-Design-Blueprint-2026.pdf',
    downloadFileSize: '4.8 MB',
    author: {
      name: 'Anubhav Mittal',
      role: 'Senior Full Stack Engineer',
      company: 'Google',
      avatar: 'https://res.cloudinary.com/dkbelrldw/image/upload/v1785059102/HomeMentorImage_9_c0qrmh.webp',
      mentorId: 'm_1',
    },
    summary: 'The battle-tested architectural reference for scaling distributed systems to 100M+ DAU, database sharding, CAP theorem trade-offs, and microservices caching patterns.',
    tags: ['Architecture', 'System Design', 'FAANG', 'Redis', 'Scalability'],
    content: `### 1. Core Principles of High-Scale System Design
Designing software for millions of concurrent users requires moving beyond simple monoliths. Key pillars include:
- **Horizontal Scalability:** Stateless application nodes placed behind elastic load balancers (Layer 4 & Layer 7).
- **Decoupled Asynchronous Processing:** Event-driven message brokers (Apache Kafka, RabbitMQ) for heavy computational tasks.
- **Multi-Tier Caching:** CDN edge caching for static assets, distributed Redis clusters for low-latency session and query caching.

### 2. High-Availability Database Architectures
When relational databases become bottlenecks:
1. **Read/Write Splitting:** Route write operations to primary nodes and distribute reads across read replicas.
2. **Consistent Hashing & Sharding:** Partition data across independent database shards based on hash keys to avoid hot partitions.
3. **Optimistic Locking & Idempotency:** Protect financial transactions and concurrent updates with UUID idempotency keys.

### 3. Interview Framework: 45-Minute Execution
1. **Scope Requirements (5 mins):** Define functional vs non-functional constraints (Throughput, Latency, SLA).
2. **High-Level Diagram (10 mins):** Draw Client -> API Gateway -> Auth Service -> Cache -> DB.
3. **Deep Dive (20 mins):** Address bottlenecks, failure recovery, failover strategies, and data consistency models.
4. **Wrap-up (10 mins):** Review monitoring, logging (OpenTelemetry), and edge cases.`,
  },
  {
    id: 'res_2',
    title: 'Full-Stack Modern Web Developer Roadmap: Next.js 15 & AI APIs',
    slug: 'modern-full-stack-roadmap-2026',
    category: 'Web Development',
    type: 'Roadmap',
    level: 'Intermediate',
    readTime: '18 min read',
    publishedDate: 'August 2026',
    isFeatured: true,
    isPopular: true,
    views: 12400,
    likes: 1890,
    downloads: 4120,
    downloadFileName: 'FullStack-Developer-Roadmap-2026.pdf',
    downloadFileSize: '3.2 MB',
    author: {
      name: 'Anubhav Mittal',
      role: 'Senior Full Stack Engineer',
      company: 'Google',
      avatar: 'https://res.cloudinary.com/dkbelrldw/image/upload/v1785059102/HomeMentorImage_9_c0qrmh.webp',
      mentorId: 'm_1',
    },
    summary: 'A structured, 12-month engineering path from React 19 server components to full-stack cloud deployments, Docker, Postgres, and LLM integrations.',
    tags: ['Next.js', 'React', 'TypeScript', 'Roadmap', 'Node.js'],
    milestones: [
      {
        title: 'Phase 1: Modern Frontend Fundamentals & React 19',
        duration: 'Month 1 - 3',
        description: 'Master TypeScript strict typing, React 19 Server Components, Actions, Tailwind CSS design systems, and state management.',
        skills: ['TypeScript', 'React 19', 'Next.js App Router', 'Tailwind CSS', 'Zustand'],
      },
      {
        title: 'Phase 2: Scalable Backend Services & Databases',
        duration: 'Month 4 - 6',
        description: 'Build REST & GraphQL APIs with Node.js/Express, ORMs (Prisma, Drizzle), PostgreSQL, Redis caching, and JWT/OAuth authentication.',
        skills: ['Node.js', 'PostgreSQL', 'Prisma', 'Redis', 'JWT & OAuth2'],
      },
      {
        title: 'Phase 3: Cloud, DevOps & CI/CD Pipelines',
        duration: 'Month 7 - 9',
        description: 'Containerize with Docker, orchestrate deployments with GitHub Actions CI/CD, AWS (S3, ECS, Lambda), and serverless edge functions.',
        skills: ['Docker', 'AWS', 'GitHub Actions', 'Vercel Edge', 'Nginx'],
      },
      {
        title: 'Phase 4: AI Integrations, System Design & Portfolio',
        duration: 'Month 10 - 12',
        description: 'Integrate OpenAI / Gemini streaming APIs, Vector DBs (Pinecone, pgvector), build 3 production projects, and mock interviews.',
        skills: ['AI SDKs', 'Vector DBs', 'System Design', 'FAANG Mock Interviews'],
      },
    ],
    content: `### 12-Month Path to Senior Full Stack Engineer
The full-stack landscape in 2026 demands deep competency across both frontend performance optimization and distributed backend persistence. Follow this milestone plan to build production apps with confidence.`,
  },
  {
    id: 'res_3',
    title: 'Executive ATS Resume Template & Keyword Optimization Guide',
    slug: 'ats-resume-template-guide',
    category: 'Career & Interviews',
    type: 'Template',
    level: 'Beginner',
    readTime: '10 min read',
    publishedDate: 'August 2026',
    isFeatured: true,
    isPopular: true,
    views: 9400,
    likes: 1540,
    downloads: 5800,
    downloadFileName: 'GetAdvanceGuide-ATS-Resume-Template.docx',
    downloadFileSize: '1.2 MB',
    author: {
      name: 'Gitakshi Sharma',
      role: 'Staff Product Designer',
      company: 'Nvidia',
      avatar: 'https://res.cloudinary.com/dkbelrldw/image/upload/v1785059105/HomeMentorImage_8_mgrhux.webp',
      mentorId: 'm_3',
    },
    summary: 'Single-page, ATS-compliant LaTeX and Word templates optimized for Greenhouse, Lever, and Workday applicant tracking algorithms.',
    tags: ['Resume', 'ATS', 'Career', 'Template', 'Job Hunt'],
    content: `### Why Most Resumes Get Rejected by ATS
Over 75% of engineering resumes are filtered out before reaching a recruiter due to unreadable column formatting, images, or missing contextual keywords.

### What Makes This Template 100% ATS Compliant
1. **Clean Single-Column Hierarchy:** Ensures top-to-bottom text parsing without column overlap bugs.
2. **Quantifiable Action-Result Bullets:** Formatted with Google's X-Y-Z formula (*"Accomplished [X], as measured by [Y], by doing [Z]"*).
3. **Keyword Density Mapping:** Highlights high-value skills matching modern software engineering job descriptions.`,
  },
  {
    id: 'res_4',
    title: 'End-to-End Machine Learning & Data Science Career Blueprint',
    slug: 'machine-learning-data-science-blueprint',
    category: 'Data Science',
    type: 'Roadmap',
    level: 'Intermediate',
    readTime: '20 min read',
    publishedDate: 'August 2026',
    isFeatured: false,
    isPopular: true,
    views: 6800,
    likes: 920,
    downloads: 2450,
    downloadFileName: 'ML-Data-Science-Roadmap.pdf',
    downloadFileSize: '3.6 MB',
    author: {
      name: 'Chitrakshi Verma',
      role: 'Data Scientist & ML Lead',
      company: 'Flipkart',
      avatar: 'https://res.cloudinary.com/dkbelrldw/image/upload/v1785059110/HomeMentorImage_6_vmrjbo.webp',
      mentorId: 'm_2',
    },
    summary: 'Master exploratory data analysis, statistical modeling, PyTorch deep learning, feature engineering, and production MLOps deployment.',
    tags: ['Python', 'Machine Learning', 'PyTorch', 'Data Science', 'MLOps'],
    milestones: [
      {
        title: 'Phase 1: Statistics, Linear Algebra & Python Data Stack',
        duration: 'Month 1 - 3',
        description: 'Deep dive into probability, hypothesis testing, NumPy, Pandas, Matplotlib, and Seaborn for exploratory data analysis.',
        skills: ['Python', 'NumPy', 'Pandas', 'Statistics', 'SQL'],
      },
      {
        title: 'Phase 2: Supervised & Unsupervised Machine Learning',
        duration: 'Month 4 - 6',
        description: 'Scikit-Learn algorithms, Decision Trees, XGBoost, Random Forests, K-Means clustering, and model evaluation metrics (ROC-AUC, F1).',
        skills: ['Scikit-Learn', 'XGBoost', 'Regression', 'Classification', 'Feature Engineering'],
      },
      {
        title: 'Phase 3: Deep Learning, PyTorch & Large Language Models',
        duration: 'Month 7 - 9',
        description: 'Neural networks, Convolutional Neural Networks (CNNs), Transformers, HuggingFace, fine-tuning LLMs with LoRA and RAG architectures.',
        skills: ['PyTorch', 'Transformers', 'Hugging Face', 'RAG', 'Embeddings'],
      },
      {
        title: 'Phase 4: MLOps, Model Deployment & Scale',
        duration: 'Month 10 - 12',
        description: 'Serve models with FastAPI, containerize with Docker, experiment tracking with MLflow, and CI/CD for machine learning pipelines.',
        skills: ['MLflow', 'FastAPI', 'Docker', 'AWS SageMaker', 'Kubeflow'],
      },
    ],
    content: `### Data Science Roadmap Overview
This roadmap is tailored for software engineers and STEM graduates transitioning into applied AI and data science roles at top tech companies.`,
  },
  {
    id: 'res_5',
    title: 'FAANG Behavioral Interview Guide: The STAR Method Masterclass',
    slug: 'faang-behavioral-interview-star-method',
    category: 'Career & Interviews',
    type: 'Guide',
    level: 'Beginner',
    readTime: '12 min read',
    publishedDate: 'August 2026',
    isFeatured: true,
    isPopular: false,
    views: 7100,
    likes: 880,
    downloads: 1950,
    downloadFileName: 'STAR-Behavioral-Interview-Cheatsheet.pdf',
    downloadFileSize: '1.8 MB',
    author: {
      name: 'Tanvi Agarwal',
      role: 'AI Researcher & Engineer',
      company: 'Meta',
      avatar: 'https://res.cloudinary.com/dkbelrldw/image/upload/v1785059102/HomeMentorImage_5_bgyc21.webp',
      mentorId: 'm_5',
    },
    summary: 'Master Amazon Leadership Principles, Google Googlyness, and Meta core values with 30+ real question scenarios and structured answers.',
    tags: ['Interview Prep', 'STAR Method', 'Behavioral', 'FAANG', 'Leadership'],
    content: `### Structure Your Answers with the STAR Method
1. **Situation (20%):** Set the context and business problem clearly.
2. **Task (10%):** Explain your personal responsibility and the challenge faced.
3. **Action (50%):** Highlight the specific engineering or cross-functional decisions you made.
4. **Result (20%):** Conclude with quantifiable business impact, latency reductions, or team learnings.`,
  },
  {
    id: 'res_6',
    title: 'Microservices & Distributed Caching Cheatsheet',
    slug: 'microservices-distributed-caching-cheatsheet',
    category: 'System Design',
    type: 'Cheatsheet',
    level: 'Advanced',
    readTime: '8 min read',
    publishedDate: 'August 2026',
    isFeatured: false,
    isPopular: true,
    views: 5900,
    likes: 810,
    downloads: 2750,
    downloadFileName: 'Distributed-Caching-Patterns.pdf',
    downloadFileSize: '2.1 MB',
    author: {
      name: 'Rohan Deshmukh',
      role: 'Cloud Architect',
      company: 'Microsoft',
      avatar: 'https://res.cloudinary.com/dkbelrldw/image/upload/v1785059102/HomeMentorImage_4_fau2i1.webp',
      mentorId: 'm_4',
    },
    summary: 'Quick reference for Cache-Aside, Write-Through, Write-Behind, Redis cluster failovers, and cache stampede prevention.',
    tags: ['Redis', 'Caching', 'System Design', 'Microservices', 'Cheatsheet'],
    content: `### Caching Strategies Quick Summary
- **Cache-Aside (Lazy Loading):** Application queries cache first; on cache miss, reads from DB and updates cache. Best for read-heavy workloads.
- **Write-Through:** Write to cache and DB simultaneously. Ensures strong data consistency at the expense of higher write latency.
- **Write-Behind (Write-Back):** Write to cache immediately and asynchronously batch-write to DB. High throughput, risk of data loss on cache crash.
- **Cache Stampede Prevention:** Use mutex locks (Probabilistic Early Expiration or Redis Redlock) to prevent thousands of simultaneous queries hitting the primary DB upon key expiration.`,
  },
  {
    id: 'res_7',
    title: 'Live Mock Technical Interview Breakdown: Binary Trees & DP',
    slug: 'live-mock-interview-breakdown-video',
    category: 'Career & Interviews',
    type: 'Video',
    level: 'Intermediate',
    readTime: '32 min video',
    videoDuration: '32:45',
    videoThumbnail: 'https://res.cloudinary.com/dkbelrldw/image/upload/v1785059102/HomeMentorImage_9_c0qrmh.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    publishedDate: 'August 2026',
    isFeatured: true,
    isPopular: true,
    views: 11200,
    likes: 1650,
    downloads: 850,
    author: {
      name: 'Anubhav Mittal',
      role: 'Senior Full Stack Engineer',
      company: 'Google',
      avatar: 'https://res.cloudinary.com/dkbelrldw/image/upload/v1785059102/HomeMentorImage_9_c0qrmh.webp',
      mentorId: 'm_1',
    },
    summary: 'Watch an authentic 1-on-1 mock interview session covering LeetCode Hard Dynamic Programming and Graph traversal algorithms with real-time interviewer commentary.',
    tags: ['Video', 'Mock Interview', 'Algorithms', 'Google', 'Live Coding'],
    content: `### Key Learnings from this Session
1. **Communicating Before Coding:** Clarify input edge cases, constraints, and time/space complexity goals before writing the first line of code.
2. **Dry Running on Sample Test Cases:** Manually step through sample inputs with a trace table to catch off-by-one errors early.`,
  },
  {
    id: 'res_8',
    title: 'Product Design (UI/UX) Portfolio & Case Study Framework',
    slug: 'ui-ux-design-portfolio-framework',
    category: 'UI/UX Design',
    type: 'Guide',
    level: 'Beginner',
    readTime: '15 min read',
    publishedDate: 'August 2026',
    isFeatured: false,
    isPopular: false,
    views: 4500,
    likes: 640,
    downloads: 1600,
    downloadFileName: 'UX-Case-Study-Presentation-Template.pdf',
    downloadFileSize: '5.4 MB',
    author: {
      name: 'Gitakshi Sharma',
      role: 'Staff Product Designer',
      company: 'Nvidia',
      avatar: 'https://res.cloudinary.com/dkbelrldw/image/upload/v1785059105/HomeMentorImage_8_mgrhux.webp',
      mentorId: 'm_3',
    },
    summary: 'How to structure compelling UX case studies that communicate user research, iterative wireframing, usability testing, and design systems.',
    tags: ['Figma', 'UI/UX', 'Design Systems', 'Case Study', 'Portfolio'],
    content: `### 5 Essential Sections in Every Great Design Case Study
1. **The Problem & Objective:** What user pain point did this product solve?
2. **User Research & Insights:** Qualitative interviews and quantitative metrics.
3. **Information Architecture & Wireframes:** Early explorations and design trade-offs.
4. **Final Visual Design & Component System:** High-fidelity prototypes and interaction states.
5. **Impact & Lessons Learned:** Usability metrics, conversion uplift, and what you would do differently.`,
  },
];
