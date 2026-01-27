export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  context: string;
  responsibilities: string[];
}

export interface ExperiencePreviewItem {
  title: string;
  organization: string;
  description: string;
}

export const experiencePreview: ExperiencePreviewItem[] = [
  {
    title: "Crypto Protocol Infrastructure",
    organization: "Private Client",
    description: "Designed and operated a large-scale backend and infrastructure platform for a crypto protocol that indexes and serves blockchain data to applications and developers. The system supports one of the largest participants in the network and operates in an environment where correctness, uptime, and long-term reliability are critical."
  },
  {
    title: "Cost Monitoring Platform",
    organization: "Increment",
    description: "Served as the primary engineer on a backend-heavy SaaS platform for monitoring BigQuery and Snowflake costs. Worked closely with founders and early customers to design and operate a reliable, multi-tenant system on Google Cloud as the product evolved."
  },
  {
    title: "Internal Platforms",
    organization: "King Games (Candy Crush)",
    description: "Owned the technical direction and delivery of internal platforms supporting business processes and reporting. Worked closely with senior leadership and multiple teams to translate organizational needs into durable systems used daily across the company."
  }
];

export const currentRole: ExperienceItem[] = [
  {
    "title": "Principal Software Consultant",
    "organization": "Self-Employed",
    "period": "Feb 2023 – Present",
    "context": "Independent consulting practice focused on backend- and infrastructure-heavy systems, often operating at the intersection of hands-on engineering and technical leadership.",
    "responsibilities": [
      "Engage with companies as a senior individual contributor and technical lead on complex, high-impact initiatives",
      "Take responsibility for architectural direction and key technical decisions across backend systems and infrastructure",
      "Work directly with founders and senior stakeholders to translate product vision and organizational goals into concrete technical plans",
      "Provide technical leadership within client teams, guiding system design, priorities, and operational practices",
      "Own delivery outcomes, including system reliability, long-term maintainability, and operational readiness"
    ]
  }
  
  
];

export const consultingEngagements: ExperienceItem[] = [
  {
    "title": "Graph Protocol Infrastructure",
    "organization": "Private Client",
    "period": "Aug 2024 – Present",
    "context": "Large-scale distributed backend and infrastructure platform for a crypto protocol that indexes and serves blockchain data to applications and developers. I designed and executed operational and data-selection strategies based on signals of financial value, balancing operational costs against expected return.",
    "responsibilities": [
      "Designed, deployed, and operated a bare-metal Kubernetes-based infrastructure stack from the ground up",
      "Built and managed an 11-node cluster, ran and maintained nodes for 5 blockchain networks",
      "Developed Python-based automation and operational tooling for indexer management and data extraction",
      "Applied AI-assisted analysis to operational automation and strategy planning, supporting decision-making around system operation and resource allocation",
      "Researched and implemented operational and allocation strategies in close collaboration with the founder",
      "Operated systems where correctness, uptime, security, and long-term reliability were business-critical"
    ]
  },
  {
    "title": "Cost Monitoring Platform",
    "organization": "Increment",
    "period": "Sept 2023 – Aug 2024",
    "context": "Backend-heavy SaaS platform for monitoring and analyzing BigQuery and Snowflake costs for data engineering teams.",
    "responsibilities": [
      "Acted as primary engineer and technical owner for the platform",
      "Designed and deployed backend services and infrastructure on Google Cloud Platform",
      "Migrated the application from AWS to GCP using Terraform",
      "Implemented authentication, multi-tenancy, notifications, and data isolation",
      "Worked closely with founders and early customers to translate usage patterns into system design decisions"
    ]
  }
,{
  "title": "Staff Software Engineer",
  "organization": "Shopify",
  "period": "Oct 2022 – Feb 2023",
  "context": "Utopia, a browser-based visual design tool that generates production React code.",
  "responsibilities": [
    "Worked on performance-sensitive frontend architecture for managing large UI trees in real time",
    "Implemented an extensible theming system supporting light and dark modes",
    "Improved application stability and internal tooling",
    "Worked closely with designers and engineers, providing feedback on designs and implementations"
  ]
}
,{
  "title": "Instructor",
  "organization": "Hyper Island",
  "period": "Dec 2023 – Feb 2024",
  "context": "React module for a two-year frontend development program.",
  "responsibilities": [
    "Led and delivered the React curriculum for approximately 30 students",
    "Taught practical application development and evaluated final student projects"
  ]
}      
];

export const previousExperience: ExperienceItem[] = [
  {
    "title": "Principal Software Engineer — Business Process Tools & Reporting",
    "organization": "King Games (Candy Crush)",
    "period": "Nov 2019 – Oct 2022",
    "context": "Internal platforms supporting business processes and reporting for a large-scale consumer game company.",
    "responsibilities": [
      "Owned the technical direction and delivery of internal platforms used across multiple teams",
      "Worked closely with senior leadership to define requirements and priorities",
      "Built and operated backend services on Kubernetes and Google Cloud",
      "Collaborated with engineers, data teams, and business stakeholders",
      "Delivered highly trusted tools used daily by senior leadership and operational teams"
    ]
  },{
    "title": "Technical Co-Founder / CTO",
    "organization": "RockDoc AB",
    "period": "Aug 2021 – Aug 2023",
    "context": "Early-stage SaaS company building software for managing physical infrastructure construction projects.",
    "responsibilities": [
      "Co-founded the company and led all technical development",
      "Designed and built the initial MVP, taking the product from concept to production",
      "Acted as technical owner post-launch, translating customer needs into architecture and execution",
      "Managed and coordinated external engineers and contractors",
      "Led a production migration from a NoSQL database to PostgreSQL to resolve performance and scalability issues"
    ]
  },{
    "title": "Lead Product Developer",
    "organization": "SolidX Partners Inc.",
    "period": "Nov 2015 – May 2017",
    "context": "Blockchain identity product.",
    "responsibilities": [
      "Drove product development across design and frontend engineering",
      "Led agile development processes and coordination between leadership and engineering"
    ]
},{
  "title": "User Experience Architect",
  "organization": "E*Trade",
  "period": "May 2015 – Oct 2015",
  "context": "Consumer and professional trading platforms.",
  "responsibilities": [
    "Improved user experience across trading products",
    "Coordinated requirements with cross-functional stakeholders"
  ]
}
,{
  "title": "Software Engineer",
  "organization": "Novus Partners, Inc.",
  "period": "Jun 2012 – May 2015",
  "context": "Analytics and data visualization platform.",
  "responsibilities": [
    "Developed major portions of the frontend UI",
    "Contributed to migration from jQuery to AngularJS",
    "Maintained and contributed to the open-source data visualization library nvd3.js"
  ]
}
  
];

export const education = {
  degree: "B.S. Electrical Engineering",
  institution: "University of Southern California",
  year: "2009"
};
