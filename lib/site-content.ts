export type NavLink = {
  label: string;
  href: string;
};

export type ProjectCategory =
  | "Fintech"
  | "API Platforms"
  | "Insurance & Pension"
  | "Utilities"
  | "Cloud Delivery"
  | "AI & Chatbots";

export type Project = {
  title: string;
  category: ProjectCategory;
  summary: string;
  impact: string;
  description: string;
  stack: string[];
  highlights: string[];
  featured?: boolean;
};

export type ExperienceEntry = {
  period: string;
  role: string;
  company: string;
  summary: string;
  stack: string[];
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export type Certification = {
  title: string;
  issuer: string;
  track: string;
  date: string;
  summary: string;
  bullets: string[];
  imageAlt: string;
  logo: "google-cloud" | "uipath";
};

export type ContactService = {
  title: string;
  description: string;
  items: string[];
};

export type ProfileFact = {
  label: string;
  value: string;
};

export type ChatbotEntry = {
  question: string;
  answer: string;
  keywords?: string[];
};

function createWhatsAppHref(number: string, message: string) {
  const normalizedNumber = number.replace(/[^\d]/g, "");

  if (!normalizedNumber) {
    return "";
  }

  return `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(message)}`;
}

const whatsAppNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
const whatsAppMessage =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
  "Hi Abubakar, I came across your portfolio and wanted to discuss a project.";

const site = {
  name: "Abubakar",
  initials: "AB",
  title: "Senior Software Developer / Software Architect",
  shortTitle: "Senior Backend Developer & Architect",
  experience: "10+ years",
  focus:
    "Java backend engineering, microservices, secure APIs, and practical AI integration",
  email: "contact@abubakarsaifullah.com",
  availability:
    "Open to senior development roles, architecture consulting, freelance backend work, website delivery, private product builds, and chatbot or AI solution work.",
  ogImage: "/og-image.png",
  description:
    "Senior Java backend developer and software architect with 10+ years of experience across fintech, telecom, insurance, pension, and enterprise product teams, with recent hands-on work around AI agents and chatbot solutions.",
  summary:
    "I build backend systems that need to stay reliable in production. Most of my work has been in Java and Spring-based platforms, especially in fintech and other regulated environments where secure integrations, steady releases, and good production support matter.",
  targetRoles: [
    "Senior Software Engineer",
    "Software Architect",
    "Backend Architect",
    "AI-focused Engineering Roles",
  ],
  social: {
    github: "https://github.com/abubakarsaifullah",
    linkedin: "https://www.linkedin.com/in/abubakarsaifullah",
  },
  contactLinks: {
    whatsapp: createWhatsAppHref(whatsAppNumber, whatsAppMessage),
  },
  keywords: [
    "Abubakar portfolio",
    "Senior Software Developer",
    "Software Architect",
    "Senior Java Developer",
    "Backend Architect",
    "Java developer",
    "Spring Boot",
    "Microservices architecture",
    "Distributed systems",
    "Spring Security",
    "Apigee",
    "Spring AI",
    "AI agents",
    "Chatbot systems",
    "CI/CD",
    "Docker",
    "Fintech engineering",
    "Insurance software",
    "Pension platforms",
  ],
} as const;

export const siteContent = {
  site,
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
    { label: "Certifications", href: "/certifications" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavLink[],
  seo: {
    pages: {
      home: {
        title: site.title,
        path: "/",
        description: site.description,
        keywords: [
          "senior software developer portfolio",
          "software architect portfolio",
          "senior java backend engineer",
        ],
      },
      about: {
        title: "About",
        path: "/about",
        description:
          "Background, experience, and working style for Abubakar - a senior Java backend engineer and software architect with experience across fintech, telecom, insurance, and pension systems.",
        keywords: [
          "about Abubakar",
          "backend engineer experience",
          "software architect background",
        ],
      },
      skills: {
        title: "Skills",
        path: "/skills",
        description:
          "Java, Spring, microservices, secure APIs, cloud delivery, messaging, databases, and practical AI integration across enterprise software delivery.",
        keywords: [
          "Java skills",
          "Spring Boot skills",
          "microservices architect skills",
        ],
      },
      projects: {
        title: "Projects",
        path: "/projects",
        description:
          "Selected project summaries covering Easypaisa, UPaisa, Apigee monetization, insurance and pension platforms, cloud migration, and AI chatbot-oriented work.",
        keywords: [
          "fintech projects",
          "software architecture projects",
          "AI backend projects",
        ],
      },
      certifications: {
        title: "Certifications",
        path: "/certifications",
        description:
          "Professional certifications in Apigee API engineering and UiPath automation, presented alongside the work they support.",
        keywords: [
          "Apigee certification",
          "UiPath certification",
          "API engineer certificate",
        ],
      },
      contact: {
        title: "Contact",
        path: "/contact",
        description:
          "Contact Abubakar for senior engineering roles, architecture consulting, freelance backend work, website development, or chatbot and AI solution work.",
        keywords: [
          "contact Abubakar",
          "software architect contact",
          "backend engineer contact",
        ],
      },
    },
  },
  ui: {
    buttons: {
      contact: "Contact me",
      viewProjects: "View projects",
      aboutBackground: "About my background",
      contactFromMenu: "Contact me",
      viewSkills: "View skills",
      browseProjects: "Browse projects",
      discussProject: "Discuss a project or role",
      sendMessage: "Send message",
      sendingMessage: "Sending...",
      emailFallbackPrefix: "Prefer email? Write to",
      whatsapp: "WhatsApp",
      openAssistant: "Ask about my work",
      closeAssistant: "Hide assistant",
      scrollTop: "Top",
    },
    labels: {
      recentTeams: "Recent teams and platforms",
      atAGlance: "At a glance",
      currentDirection: "Current direction",
      valueProposition: "Value proposition",
      experienceTimeline: "Experience timeline",
      nextStep: "Next step",
      projectImpact: "Project impact",
      featuredWork: "Featured work",
      certification: "Certification",
      ongoingLearning: "Ongoing learning",
      directContact: "Direct contact",
      whatICanHelpWith: "What I can help with",
      explore: "Explore",
      profilesAndContact: "Profiles and contact",
    },
  },
  footer: {
    heading: site.title,
    description:
      "Java backend engineering, microservices, secure APIs, enterprise delivery, and practical AI work. Most of my experience has been in systems where uptime, security, and careful change management matter.",
    closingNote: "All rights reserved.",
  },
  home: {
    badge: site.title,
    heroTitle: "Backend systems built for products that have to keep running",
    heroHighlight: "keep running",
    heroDescription:
      "I’m Abubakar, a senior software developer and architect with more than 10 years of experience. Most of my work has been in Java, Spring, APIs, and distributed systems across fintech, telecom, insurance, and pension platforms. More recently, I’ve also been exploring AI agents and chatbot-style solutions from a backend and integration point of view.",
    stats: [
      { label: "Years in delivery teams", value: "10+" },
      { label: "Java versions used in production", value: "7 to 21" },
      { label: "Core focus", value: "Backend + APIs" },
      { label: "Current add-on focus", value: "AI + chatbots" },
    ],
    techHighlights: [
      "Java 11 / 17 / 21",
      "Spring Boot",
      "Spring Security",
      "Spring Cloud",
      "Spring AI",
      "Microservices",
      "REST & SOAP",
      "Docker",
      "Kubernetes",
      "Jenkins / CI/CD",
      "Oracle / PostgreSQL / MongoDB",
      "Kafka / RabbitMQ",
      "React + TypeScript",
    ],
    companyHighlights: [
      "Keylane",
      "Easypaisa",
      "UPaisa",
      "Telenor",
      "Minsait",
      "Walmart",
    ],
    atAGlance: {
      title: "Senior backend engineer with architecture experience",
    },
    aiFocus: {
      title: "AI work from a backend and integration angle",
      bullets: [
        "Working on AI agents and chatbot flows that connect to actual services and workflows.",
        "Interested in secure integration, retrieval-aware flows, and keeping AI features maintainable.",
        "Still approaching AI the same way I approach backend work: clear interfaces, practical value, and production reality.",
      ],
    },
    valueProposition: {
      title: "What I bring to senior engineering and architecture roles",
      description:
        "The value is not only in writing the code. It is also in understanding the system around that code and keeping delivery steady.",
      pillars: [
        {
          title: "Strong backend ownership",
          description:
            "Most of my work has been in Java services, integrations, data-heavy workflows, and the release and support work that goes with them.",
        },
        {
          title: "Comfortable in regulated domains",
          description:
            "Fintech, telecom, insurance, and pension systems shaped how I think about security, operational stability, and controlled change.",
        },
        {
          title: "Architecture that stays close to delivery",
          description:
            "I like architecture work, but I do not separate it from implementation. The design has to survive production, handover, and future change.",
        },
        {
          title: "Practical AI work",
          description:
            "My AI work is mostly backend-led: chatbot flows, agent-style orchestration, and connecting AI features to systems that already exist.",
        },
      ],
    },
    experienceSection: {
      title: "Experience built across live products and delivery-heavy teams",
      description:
        "I’ve spent most of my career in systems where production stability and clear ownership matter. That includes banking, payments, telecom integrations, cloud delivery, and long-lived enterprise platforms.",
    },
    projectsSection: {
      title: "Selected projects and product work",
      description:
        "A lot of my work sits inside product teams, so these are short summaries rather than public case studies. The emphasis is on systems, delivery context, and the kind of responsibility the role involved.",
    },
    closingCta: {
      title: "Looking for senior backend or architecture support?",
      description:
        "I’m open to full-time roles, contract work, consulting, private builds, and chatbot or AI-focused product work.",
      primaryLabel: "Contact me",
      secondaryLabel: "See full project list",
    },
  },
  about: {
    intro: {
      eyebrow: "About",
      title: "A backend engineer who naturally grew into architecture work",
      description:
        "Most of my career has been in Java and Spring systems where reliability, secure integrations, and careful delivery matter more than buzzwords. I still like staying close to the code.",
    },
    summary: {
      eyebrow: "Professional summary",
      title: `${site.name} · ${site.title}`,
      paragraphs: [
        "I started in branchless banking and spent several years on UPaisa and related financial systems. That period gave me a strong grounding in SDLC work, secure transaction flows, client coordination, and the kind of engineering discipline these systems need.",
        "Since then I’ve worked across fintech, streaming, cloud migration, smart metering, and now insurance and pension software. The stack changes a bit from role to role, but the core job stays the same: understand the system, make careful changes, and keep delivery moving.",
        "Backend work is still the strongest part of my profile, especially Java, Spring Boot, microservices, and API-heavy systems. I can also step into frontend work when a project needs it, particularly for internal tools, website delivery, or chatbot-driven product features.",
      ],
    },
    domain: {
      eyebrow: "Domain experience",
      title: "Products where stability matters",
      items: [
        "Fintech and digital payments",
        "Insurance and pension software",
        "Telecom and API platforms",
        "Utilities and enterprise integrations",
        "AI-enabled backend systems",
      ],
    },
    facts: {
      eyebrow: "Profile snapshot",
      title: "The basics",
      items: [
        {
          label: "Experience",
          value: "More than 10 years across backend delivery and architecture work",
        },
        {
          label: "Education",
          value: "BSCS, COMSATS Institute of Information Technology",
        },
        { label: "Languages", value: "English, Urdu, Punjabi" },
        {
          label: "Current focus",
          value: "Backend systems, platform work, and AI-backed assistants",
        },
      ] satisfies ProfileFact[],
    },
    principles: {
      eyebrow: "Working style",
      title: "Practical, steady, and delivery-minded",
      items: [
        "I prefer clear service boundaries and interfaces over clever but hard-to-maintain designs.",
        "I do not separate architecture from delivery. If it cannot be built and supported, it is not much use.",
        "Production support is part of engineering work, especially in regulated products.",
        "I like AI work, but I still judge it by the same standard: does it solve a real problem and fit the system around it?",
      ],
    },
    timeline: {
      title: "Roles and progression",
      description:
        "The common thread across these roles has been backend ownership, API-heavy work, and staying close to delivery.",
    },
    nextStep: {
      title: "Want a closer look at the stack and project work?",
      description:
        "The rest of the portfolio covers the technologies I use most often, the kinds of systems I’ve worked on, and the areas I’m exploring now.",
      primaryLabel: "View skills",
      secondaryLabel: "Browse projects",
    },
  },
  experience: {
    items: [
      {
        period: "Jul 2023 - Present",
        role: "Software Engineer",
        company: "Keylane",
        summary:
          "Working on insurance and pension software in an agile team. The work is a mix of new features, production issue support, and day-to-day coordination with a distributed team.",
        stack: ["Java 11 / 17 / 21", "Spring Boot", "JPA", "Oracle", "SOAP", "Docker"],
      },
      {
        period: "Mar 2022 - May 2023",
        role: "Senior Java Developer",
        company: "Minsait - An Indra Company",
        summary:
          "Worked on a smart meter management system, translating ticket requirements into backend solutions and helping teammates during delivery.",
        stack: ["Java 17", "Spring Boot", "Microservices", "Kafka", "MongoDB", "MySQL"],
      },
      {
        period: "Aug 2021 - Jan 2023",
        role: "Principal Software Engineer",
        company: "Telenor Microfinance Bank",
        summary:
          "Worked on Easypaisa backend features, joined production deployment work, and helped resolve live issues as part of a war-room squad.",
        stack: ["Java 11", "Spring Cloud", "RabbitMQ", "Redis", "MySQL", "Fintech"],
      },
      {
        period: "Oct 2020 - Jul 2021",
        role: "Senior Software Engineer",
        company: "Confiz",
        summary:
          "Handled migration and delivery automation work for Walmart and supported environment setup for a fintech loan platform.",
        stack: ["Azure", "Docker", "Kubernetes", "Jenkins", "Java 8", "PostgreSQL"],
      },
      {
        period: "Aug 2020 - Sep 2020",
        role: "Senior Software Engineer",
        company: "Shopdev",
        summary:
          "Worked on Starzplay, a streaming platform, using a Spring Cloud microservices stack with messaging and caching.",
        stack: ["Java 8", "Spring Boot", "Spring Cloud", "RabbitMQ", "Redis", "MySQL"],
      },
      {
        period: "Nov 2013 - Jul 2020",
        role: "Senior Consultant",
        company: "Abacus Consulting",
        summary:
          "Spent several years on UPaisa and related client work, covering SDLC delivery, unit testing, USSD flows, code review, client coordination, Apigee monetization, and solution architecture responsibilities.",
        stack: ["Java", "Spring", "Oracle", "Apigee", "AES / RSA", "SOA"],
      },
    ] satisfies ExperienceEntry[],
  },
  skills: {
    intro: {
      eyebrow: "Skills",
      title: "The stack I use most often",
      description:
        "The strongest part of my profile is still Java and Spring-based backend work. Around that, there is usually a lot of API design, integration work, delivery automation, and production support.",
    },
    groups: [
      {
        title: "Java and Spring backend",
        description:
          "This is still the strongest part of my profile: building services, integrations, and business logic in Java and the Spring ecosystem.",
        skills: [
          "Core Java",
          "Java 8 / 11 / 17 / 21",
          "Kotlin",
          "Spring Framework",
          "Spring Boot",
          "JPA / Hibernate",
          "Spring MVC",
          "Spring Cloud",
          "Liquibase",
        ],
      },
      {
        title: "Microservices and architecture",
        description:
          "I am comfortable with service decomposition, integration-heavy systems, and the practical side of architecture work.",
        skills: [
          "Microservices Architecture",
          "Distributed Systems",
          "Solution Architecture",
          "SOA",
          "OpenAPI",
          "Domain Modeling",
          "Technical Documentation",
          "Production Readiness",
        ],
      },
      {
        title: "API design and security",
        description:
          "A lot of my work has involved secure interfaces and platform-level thinking rather than only internal service code.",
        skills: [
          "REST APIs",
          "SOAP Web Services",
          "Apigee",
          "Spring Security",
          "OAuth2 / JWT",
          "API Security",
          "SSL Certificates",
          "AES / RSA Encryption",
        ],
      },
      {
        title: "Data, messaging, and persistence",
        description:
          "I have worked across relational and non-relational stores, event flows, and the usual persistence concerns that come with enterprise products.",
        skills: [
          "Oracle",
          "MySQL",
          "PostgreSQL",
          "MongoDB",
          "Cassandra",
          "Kafka",
          "RabbitMQ",
          "Redis",
        ],
      },
      {
        title: "Cloud and delivery",
        description:
          "Part of the job has often been making builds and deployments dependable, not only writing the feature code.",
        skills: [
          "Docker",
          "Kubernetes",
          "Jenkins",
          "CI/CD Pipelines",
          "Microsoft Azure",
          "Git / GitLab / GitHub / SVN",
          "Apache Tomcat",
          "Nginx / JBoss",
        ],
      },
      {
        title: "AI and frontend support",
        description:
          "Backend work is the main strength, but I can also work with web UI and newer AI tooling when the project needs a complete solution.",
        skills: [
          "Spring AI",
          "AI Agents",
          "Chatbot Systems",
          "Prompt Workflow Design",
          "Backend AI Integration",
          "React",
          "TypeScript",
          "Agile / Scrum / TDD",
        ],
      },
    ] satisfies SkillGroup[],
    closing: {
      eyebrow: "How I use this stack",
      title: "Technical depth plus delivery judgment",
      paragraphs: [
        "The most useful part of this skill set is not the number of tools. It is knowing where to keep things simple, where to be careful, and how to make decisions that still make sense six months later.",
        "That same thinking is what I’m bringing into AI-related work as well. I’m interested in AI when it fits the product and can be supported properly, not just because it sounds new.",
      ],
    },
  },
  projectsPage: {
    intro: {
      eyebrow: "Projects",
      title: "Selected work across fintech, platforms, enterprise systems, and AI",
      description:
        "Most of this work was done inside product teams, so these are concise project summaries rather than public case studies. I focus on the systems, delivery context, and the kind of problems I was trusted to solve.",
    },
    summary: {
      eyebrow: "What connects these projects",
      title: "Secure integrations, production systems, and careful delivery",
      paragraphs: [
        "A lot of the work sits in products where mistakes are expensive. That changes how you approach service boundaries, rollout plans, debugging, and the level of care you apply to seemingly small changes.",
        "The result is a delivery style focused on maintainable code, sensible architecture, supportable integrations, and keeping production steady while the product keeps moving.",
      ],
    },
  },
  projects: {
    items: [
      {
        title: "Easypaisa backend services",
        category: "Fintech",
        summary:
          "Feature delivery, deployments, and production support for a high-traffic digital finance platform.",
        impact:
          "Worked on live fintech services where new features, release coordination, and incident handling all mattered at the same time.",
        description:
          "At Telenor Microfinance Bank, I worked on backend services behind Easypaisa. The role covered new feature work, production deployments, and war-room issue handling, so it stayed very close to real production behavior rather than isolated feature development.",
        stack: [
          "Java 11",
          "Spring Boot",
          "Spring Cloud",
          "MyBatis",
          "RabbitMQ",
          "Redis",
          "MySQL",
        ],
        highlights: [
          "Delivered backend changes in a live payments environment.",
          "Joined production rollout work and post-release support.",
          "Worked across services, messaging, and data access layers.",
        ],
        featured: true,
      },
      {
        title: "UPaisa branchless banking platform",
        category: "Fintech",
        summary:
          "Long-running branchless banking work across feature delivery, secure flows, and client-facing implementation.",
        impact:
          "Built much of my fintech foundation here through full SDLC work, code reviews, team support, USSD flows, and technical solution ownership.",
        description:
          "Over several years at Abacus Consulting, I worked on UPaisa and related banking functionality. The work included new features, unit testing, menu-driven user flows, client coordination, and later team lead and solution architecture responsibilities.",
        stack: [
          "Java",
          "Spring MVC",
          "Hibernate",
          "Oracle",
          "AES / RSA",
          "ActiveMQ",
          "JSP",
          "Apache Wicket",
        ],
        highlights: [
          "Worked through the full SDLC on a branchless banking product.",
          "Handled secure transaction-related logic and user flows.",
          "Supported reviews, delivery coordination, and client communication.",
        ],
        featured: true,
      },
      {
        title: "Apigee monetization rollout",
        category: "API Platforms",
        summary:
          "Implementation work around Apigee installation, monetization, and API platform setup.",
        impact:
          "Added hands-on API management and monetization experience to a telecom environment where governance and integration quality mattered.",
        description:
          "This work involved Apigee setup and monetization-related implementation for Telenor. It sat between engineering execution and solution design, with a strong focus on API exposure, secure integration, and platform readiness.",
        stack: [
          "Apigee",
          "API Management",
          "OAuth2",
          "Spring",
          "Jenkins",
          "CI/CD",
        ],
        highlights: [
          "Implemented Apigee monetization-related work for a telecom client.",
          "Worked on API exposure and integration concerns beyond pure application code.",
          "Combined solution design thinking with hands-on delivery.",
        ],
        featured: true,
      },
      {
        title: "Insurance and pension product work",
        category: "Insurance & Pension",
        summary: "Current backend work in insurance and pension systems.",
        impact:
          "Delivering new features and production fixes in long-lived enterprise products with complex domain rules and distributed collaboration.",
        description:
          "At Keylane, I work in an agile team on insurance and pension software. The day-to-day work includes backend feature development, production support, and cross-team coordination, which keeps the role practical and close to the product.",
        stack: [
          "Java 11 / 17 / 21",
          "Spring Boot",
          "JPA",
          "Oracle",
          "SOAP",
          "Docker",
          "Jenkins",
        ],
        highlights: [
          "Working in a domain-heavy enterprise product environment.",
          "Balancing feature work with production issue handling.",
          "Coordinating across teams while keeping delivery steady.",
        ],
        featured: true,
      },
      {
        title: "Smart meter management system",
        category: "Utilities",
        summary: "Backend development on a smart meter management platform.",
        impact:
          "Turned ticket-driven requirements into microservice-based backend work while also supporting other team members.",
        description:
          "This project involved Java 17 and Spring Boot services with Kafka, MongoDB, and MySQL. The work was implementation-heavy, but because it was integration-heavy too, it still needed careful design and steady team collaboration.",
        stack: [
          "Java 17",
          "Spring Boot",
          "Microservices",
          "Kafka",
          "MongoDB",
          "MySQL",
        ],
        highlights: [
          "Built backend changes from Jira-driven requirements.",
          "Worked in a modern service-based stack with messaging and multiple data stores.",
          "Provided support to teammates during delivery.",
        ],
        featured: false,
      },
      {
        title: "Cloud migration and delivery automation",
        category: "Cloud Delivery",
        summary:
          "Migration and deployment automation work across Walmart and fintech-related programs.",
        impact:
          "Helped move workloads to Azure and a client-owned cloud while improving delivery automation with Jenkins and Docker.",
        description:
          "At Confiz, part of the work was around cloud migration and environment setup for Walmart, and part of it was backend and platform support for a fintech loan application. It was a good mix of infrastructure thinking and application delivery.",
        stack: [
          "Azure",
          "Docker",
          "Kubernetes",
          "Jenkins",
          "Concord",
          "PostgreSQL",
        ],
        highlights: [
          "Worked on migration to Azure and a client cloud environment.",
          "Automated deployments to make releases more repeatable.",
          "Handled environment-heavy work alongside application delivery.",
        ],
        featured: false,
      },
      {
        title: "AI agents and chatbot integrations",
        category: "AI & Chatbots",
        summary:
          "Current work around AI agents, chatbot flows, and backend integration patterns.",
        impact:
          "Applying AI in a practical way by connecting assistant-style experiences to business workflows and existing services.",
        description:
          "My AI work is mostly from a backend point of view. I am interested in orchestration, retrieval-aware flows, service integration, and building chatbot or agent-style features that are useful in real products rather than just demos.",
        stack: [
          "Spring AI",
          "AI Agents",
          "Chatbots",
          "Prompt Workflows",
          "RAG",
          "Backend Integration",
        ],
        highlights: [
          "Working on AI features that connect to existing systems.",
          "Exploring maintainable ways to introduce AI into backend-heavy products.",
          "Combining Java backend experience with newer AI tooling.",
        ],
        featured: true,
      },
    ] satisfies Project[],
  },
  certificationsPage: {
    intro: {
      eyebrow: "Certifications",
      title: "Certificates that match the work I have actually done",
      description:
        "I do not collect certifications just to collect them. The ones here line up with areas I have used in real projects - API platform work and automation thinking.",
    },
    ongoingLearning: {
      title: "I usually learn around the work",
      paragraphs: [
        "That was true for API platforms and automation, and it is true now for AI as well. I tend to learn best when I can attach it to a system, a workflow, or a delivery problem that actually exists.",
        "That approach keeps the learning useful and makes it easier to carry new ideas back into production work without overcomplicating things.",
      ],
    },
  },
  certifications: {
    items: [
      {
        title: "Apigee API Engineer",
        issuer: "Google",
        track: "API Development",
        date: "December 2018",
        summary:
          "This certification lines up with the API management and monetization work I handled in telecom and enterprise integration projects.",
        bullets: [
          "Focused on Apigee development, installation, and monetization.",
          "Useful in work that involved API exposure, governance, and secure partner integrations.",
        ],
        imageAlt: "Google Cloud and Apigee branding for certification card",
        logo: "google-cloud",
      },
      {
        title: "RPA Certified",
        issuer: "UiPath",
        track: "Robotics",
        date: "June 2018",
        summary:
          "A good complement to backend work because it pushed me to think more about process automation and workflow efficiency.",
        bullets: [
          "Covered UiPath-based automation fundamentals and solution delivery.",
          "Added another angle to automation beyond traditional application code.",
        ],
        imageAlt: "UiPath branding for certification card",
        logo: "uipath",
      },
    ] satisfies Certification[],
  },
  contact: {
    intro: {
      eyebrow: "Contact",
      title: "Open to roles, consulting work, freelance projects, and private builds",
      description:
        "That can be a senior engineering role, architecture support, backend work, a website build, or a chatbot and AI solution. If it sounds close to what you need, feel free to get in touch.",
    },
    direct: {
      title: "The form is fine, but a direct message works too",
      description:
        "A short message is enough. I’m happy to talk about full-time roles, contract work, private projects, website delivery, or a system you want another engineer to review.",
    },
    topics: [
      "Freelance project",
      "Private product build",
      "Website development",
      "Chatbot or AI solution",
      "Architecture consulting",
      "Full-time opportunity",
      "Other",
    ],
    services: [
      {
        title: "Freelance and private builds",
        description:
          "A good fit for smaller direct projects as well as longer product engagements that need senior backend ownership.",
        items: [
          "Backend services and APIs",
          "Private tools or business workflows",
          "Website or admin portal development",
        ],
      },
      {
        title: "Chatbot and AI solution work",
        description:
          "Useful when the job needs more than a chat UI and has to connect properly with real systems.",
        items: [
          "Rule-based or AI-backed chatbot flows",
          "Agent-style orchestration",
          "Backend integration for AI features",
        ],
      },
      {
        title: "Architecture and delivery support",
        description:
          "Helpful for teams that need a second set of eyes on a system or a senior hand on delivery.",
        items: [
          "Architecture reviews",
          "API and integration design",
          "Release and platform guidance",
        ],
      },
    ] satisfies ContactService[],
    form: {
      title: "Send a message",
      description:
        "Tell me a little about the role, project, or problem you want to discuss. A concise note is enough.",
      labels: {
        name: "Name",
        email: "Email",
        company: "Company / Team",
        topic: "Topic",
        message: "Message",
      },
      optionalLabel: "(optional)",
      placeholders: {
        name: "Your name",
        email: "you@company.com",
        company: "Your company or team",
        message: "Tell me what you need help with and I’ll get back to you.",
      },
      helpText: "A concise overview is enough. I’ll follow up from there.",
      validation: {
        nameRequired: "Please enter your name.",
        nameShort: "Please use the name you would like me to reply to.",
        emailRequired: "Please enter your email address.",
        emailInvalid: "Please enter a valid email address.",
        messageRequired: "Please add a message so I know what you want to discuss.",
        messageShort: "Please add a little more detail so I can respond properly.",
        messageLong: "Please keep the message under {count} characters.",
        fixFields: "Please fix the highlighted fields and send the form again.",
      },
      successMessage: "Message sent successfully. I’ll get back to you soon.",
      errorFallback: "The message could not be sent right now.",
    },
  },
  chatbot: {
    title: "Ask about my work",
    description:
      "Quick answers about backend work, project history, AI integrations, and availability.",
    starterMessage:
      "Hi — ask me about backend work, fintech systems, APIs, microservices, AI integration, or availability.",
    fallbackAnswer:
      "I can help with questions about backend work, fintech systems, APIs, microservices, AI and chatbot work, or availability.",
    placeholder: "Ask about backend, fintech, APIs, or AI",
    openLabel: "Ask about my work",
    closeLabel: "Hide assistant",
    quickQuestionLimit: 5,
    entries: [
      {
        question: "What kind of backend work do you do?",
        answer:
          "Mostly Java and Spring work around APIs, integrations, business logic, and production-facing services.",
        keywords: ["backend", "java", "spring", "services", "business logic"],
      },
      {
        question: "Do you work with microservices?",
        answer:
          "Yes. I have worked with microservices in fintech, streaming, smart metering, and enterprise product teams.",
        keywords: ["microservices", "spring cloud", "distributed", "service"],
      },
      {
        question: "Tell me about your fintech experience.",
        answer:
          "A big part of my background is fintech, especially UPaisa, Easypaisa, secure transaction flows, and production support.",
        keywords: ["fintech", "financial", "payments", "banking", "upaisa", "easypaisa"],
      },
      {
        question: "What is your API design experience?",
        answer:
          "A lot of my work has been API-heavy: REST, SOAP, secure integrations, OAuth flows, and Apigee-based platform work.",
        keywords: ["api", "apis", "rest", "soap", "apigee", "oauth", "jwt", "integration"],
      },
      {
        question: "Have you handled production support?",
        answer:
          "Yes. I have been involved in production deployments, incident handling, and release support in live systems.",
        keywords: ["production", "support", "incident", "deployment", "war room", "release"],
      },
      {
        question: "What databases and messaging tools do you use?",
        answer:
          "Mostly Oracle, PostgreSQL, MySQL, MongoDB, plus Kafka, RabbitMQ, Redis, and the usual integration layers around them.",
        keywords: ["database", "oracle", "postgresql", "mysql", "mongodb", "kafka", "rabbitmq", "redis"],
      },
      {
        question: "What kind of architecture work do you do?",
        answer:
          "Usually service boundaries, integration design, delivery decisions, and keeping architecture practical enough to survive production.",
        keywords: ["architecture", "architect", "solution design", "service boundaries"],
      },
      {
        question: "Do you build AI or chatbot solutions?",
        answer:
          "Yes. The AI work is mostly practical: chatbot flows, agent-style orchestration, and wiring those features into existing systems.",
        keywords: ["ai", "chatbot", "chatbots", "agent", "agents", "spring ai", "llm"],
      },
      {
        question: "What are you working on now?",
        answer:
          "Right now the work is centered on enterprise backend systems, with ongoing interest in AI-backed assistants and chatbot workflows.",
        keywords: ["current", "currently", "now", "present", "working on"],
      },
      {
        question: "Are you available for freelance work?",
        answer:
          "Yes. I am open to freelance backend work, consulting, private builds, website work, and chatbot-focused projects.",
        keywords: ["freelance", "consulting", "contract", "private project", "website", "availability"],
      },
      {
        question: "How can I contact you?",
        answer:
          "You can use the contact form, email me directly, or message on WhatsApp if that is enabled on the site.",
        keywords: ["contact", "email", "reach", "talk", "whatsapp"],
      },
      {
        question: "Are you open to full-time roles too?",
        answer:
          "Yes. I am open to senior engineering and architecture roles where backend ownership and system design really matter.",
        keywords: ["full-time", "role", "roles", "open to work", "opportunity", "hiring"],
      },
    ] satisfies ChatbotEntry[],
  },
  education: [
    {
      degree: "Bachelors in Computer Science (BSCS)",
      institution: "COMSATS Institute of Information Technology",
      year: "2013",
    },
  ],
} as const;

export const siteConfig = siteContent.site;
export const navigationLinks = siteContent.navigation;
export const heroStats = siteContent.home.stats;
export const techHighlights = siteContent.home.techHighlights;
export const companyHighlights = siteContent.home.companyHighlights;
export const valuePillars = siteContent.home.valueProposition.pillars;
export const projects = siteContent.projects.items;
export const experienceTimeline = siteContent.experience.items;
export const skillGroups = siteContent.skills.groups;
export const certifications = siteContent.certifications.items;
export const domainFocus = siteContent.about.domain.items;
export const deliveryPrinciples = siteContent.about.principles.items;
export const profileFacts = siteContent.about.facts.items;
export const contactTopics = siteContent.contact.topics;
export const contactServices = siteContent.contact.services;
