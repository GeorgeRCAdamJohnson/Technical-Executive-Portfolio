export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  achievements: string[];
  liveUrl?: string;
  category: 'ai' | 'enterprise' | 'innovation';
  status: 'live' | 'development' | 'completed';
  icon: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'leadership' | 'technical' | 'process';
}

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    summary: string;
    location: string;
    email?: string;
    linkedin?: string;
  };
  experience: Experience[];
  skills: Skill[];
  education: {
    degree: string;
    field: string;
    institution: string;
    year?: string;
  }[];
  certifications: {
    name: string;
    issuer: string;
    date: string;
  }[];
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Adam Johnson",
    title: "VP/Director of Engineering Candidate",
    summary: "Visionary technology leader with 15+ years of experience driving enterprise transformation across application engineering, AI deployment, and software lifecycle governance. Currently leading the largest Atlassian Government Cloud migration in company history at Blue Origin. Proven success in aligning cross-functional teams and managing multimillion-dollar portfolios.",
    location: "United States",
    email: "adam.johnson@executive.tech",
    linkedin: "https://linkedin.com/in/adamjohnson-tech-executive",
  },
  experience: [
    {
      id: "blue-origin",
      title: "Sr. Manager Application Engineering & Atlassian Services",
      company: "Blue Origin",
      duration: "Jan 2020 – Present",
      description: "Lead a distributed team across multiple U.S. states, overseeing enterprise application strategy and Atlassian product governance. Recognized industry leader in Atlassian Government Cloud, leading the largest migration in company history.",
      achievements: [
        "Lead the largest Atlassian Government Cloud migration in company history",
        "Manage lifecycle and vendor relationships for Box, Smartsheet, Airtable, Baserow, and Atlassian suite",
        "Oversee critical platforms: Coupa, Costpoint, Jira, Confluence, PagerDuty, Statuspage, Cognos, Kronos",
        "Built internal Application Catalog and Software Procurement Contract framework",
        "Spearheaded deployment of Moveworks AI for HR and IT",
        "Drive Agile, ITIL, and ITSM practices; manage multimillion-dollar initiatives",
        "Mentor high-performing teams and advise executives on application strategy"
      ],
      icon: "rocket"
    },
    {
      id: "aditi-tmobile",
      title: "Technical Program Manager (Infrastructure & Security)",
      company: "Aditi at T-Mobile",
      duration: "Oct 2018 – Jan 2020",
      description: "Architected and product-managed CIQ: an interactive CMDB for network node management and security posture tracking. Led infrastructure upgrades to meet NIST-853 standards.",
      achievements: [
        "Built ElasticSearch and Kibana dashboards to validate vendor KPIs",
        "Standardized deployments via Ansible; implemented CI/CD pipelines",
        "Reported directly to executive stakeholders; shaped KPI strategy and tooling",
        "Led infrastructure upgrades to meet NIST-853 compliance standards"
      ],
      icon: "network-wired"
    },
    {
      id: "experis-microsoft",
      title: "Localization Program Manager",
      company: "Experis at Microsoft",
      duration: "Aug 2017 – Oct 2018",
      description: "Managed localization for Rare and 2nd-party publishing titles. Led cross-functional teams of translators, engineers, and QA.",
      achievements: [
        "Improved bug fix rate from 60% to 98% through process optimization",
        "Automated bug logging via Xbox Dashboard integration",
        "Used Azure DevOps, Power BI, SharePoint, and Jira for project management",
        "Shipped major titles: PUBG, Sea of Thieves, Crackdown 3, Xbox OS updates"
      ],
      icon: "globe"
    },
    {
      id: "booxie",
      title: "Project Manager",
      company: "Booxie",
      duration: "Feb 2016 – Mar 2017",
      description: "Led backend data tooling and UI/UX workflow improvements. Negotiated contracts with creators and standardized Agile practices.",
      achievements: [
        "Standardized Agile practices across Jira and Confluence",
        "Led backend data tooling and workflow optimization initiatives",
        "Negotiated contracts with content creators and stakeholders"
      ],
      icon: "code"
    }
  ],
  skills: [
    // Executive Leadership
    { name: "Enterprise Leadership & Application Strategy", level: 95, category: "leadership" },
    { name: "Vendor Governance & Cross-functional Alignment", level: 92, category: "leadership" },
    { name: "Multi-million Dollar Portfolio Management", level: 90, category: "leadership" },
    { name: "Strategic Roadmapping & Team Mentorship", level: 88, category: "leadership" },
    
    // Technical Systems & AI
    { name: "Atlassian Suite & AI Deployment", level: 94, category: "technical" },
    { name: "CMDB Architecture & Elastic/Kibana Analytics", level: 89, category: "technical" },
    { name: "Enterprise Applications (Coupa, Costpoint, Cognos)", level: 91, category: "technical" },
    { name: "Jira, Confluence, Azure DevOps", level: 93, category: "technical" },
    
    // Process & Compliance
    { name: "Agile, Scrum, ITIL & ITSM", level: 93, category: "process" },
    { name: "Compliance-Driven Migration (Government Cloud)", level: 90, category: "process" },
    { name: "NIST Standards & Security Posture", level: 86, category: "process" },
    { name: "CI/CD Pipelines & Ansible Automation", level: 84, category: "process" }
  ],
  education: [
    {
      degree: "Associate of Applied Arts",
      field: "Animation Art & Design",
      institution: "Art Institute of Seattle"
    }
  ],
  certifications: [
    {
      name: "Certified Scrum Master (CSM)",
      issuer: "Scrum Alliance",
      date: "April 2017"
    }
  ]
};

export const projects: Project[] = [
  {
    id: "agentic-ai",
    title: "Agentic AI Development System",
    subtitle: "Autonomous Software Development with AI Personas",
    description: "Groundbreaking project aimed at fully automating the development of Atlassian Forge and React applications using AI personas that represent human roles, each with distinct personalities and behaviors.",
    technologies: ["Agentic AI", "Ollama", "Local AI Models", "GitHub Integration", "Jira API"],
    achievements: ["$100 Budget Challenge", "Zero Human Intervention Goal", "Multi-Persona Architecture", "3-Month Delivery Target"],
    category: "ai",
    status: "development",
    icon: "users-cog"
  },
  {
    id: "sci-fi-form-builder",
    title: "Sci-Fi Form Builder",
    subtitle: "React-Based Jira Integration Platform",
    description: "React-based Jira integration platform that eliminates Service Desk Portal licensing costs while providing full development control and streamlined user experience.",
    technologies: ["React", "JavaScript", "Jira API", "Netlify"],
    achievements: ["Cost Savings", "Live Demo", "No Licensing Fees", "Full Control"],
    liveUrl: "https://sci-fi-form-builder.netlify.app/",
    category: "enterprise",
    status: "live",
    icon: "rocket"
  },
  {
    id: "bee-fun-learning",
    title: "Bee Fun Learning Platform",
    subtitle: "Educational Game Development with 8-Year-Old",
    description: "An early prototype game developed collaboratively with my 8-year-old daughter for her Highly Capable class, demonstrating exceptional leadership in educational technology.",
    technologies: ["Game Development", "Educational Technology", "Project Management", "AI Prompting"],
    achievements: ["Age 8 Student Developer", "5+ Concepts Taught", "Live Deployment", "Educational Innovation"],
    liveUrl: "https://bee-fun-learning.netlify.app/",
    category: "innovation",
    status: "live",
    icon: "gamepad"
  },
  {
    id: "safe-ai-art",
    title: "Safe AI Art Platform",
    subtitle: "Child-Safe AI Art Generation with Parental Controls",
    description: "Built a professional-grade AI art platform specifically designed for children, incorporating advanced safety measures and parental control systems.",
    technologies: ["AI/ML", "Google Auth", "Parental Controls", "Local AI Models"],
    achievements: ["Child Safety First", "Cost Optimization", "Parental Controls", "Local Models"],
    category: "ai",
    status: "development",
    icon: "palette"
  },
  {
    id: "ai-art-evolution",
    title: "AI Art Evolution Platform",
    subtitle: "Revolutionary AI-Powered Art Generation System",
    description: "Revolutionary AI-powered art generation system combining multiple ML models for creative content production with 60% performance improvements.",
    technologies: ["Python", "TensorFlow", "Computer Vision", "Web APIs"],
    achievements: ["60% Faster Generation", "Multi-Model Architecture", "Production Ready", "Performance Optimized"],
    category: "ai",
    status: "completed",
    icon: "palette"
  },
  {
    id: "forge-form-builder",
    title: "Forge Form Builder",
    subtitle: "Enterprise-Grade Form Automation Platform",
    description: "Enterprise-grade form automation platform for Jira with drag-and-drop interface and template management, delivering 70% time savings.",
    technologies: ["React", "Node.js", "Atlassian Forge", "TypeScript"],
    achievements: ["500+ Forms Created", "Enterprise Scale", "70% Time Savings", "Template Management"],
    category: "enterprise",
    status: "completed",
    icon: "cogs"
  }
];