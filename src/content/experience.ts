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
  period: string;
  description: string;
}

export const experiencePreview: ExperiencePreviewItem[] = [
  {
    title: "Principal Engineer",
    organization: "Current Engagement",
    period: "2023 – Present",
    description: "Leading backend architecture for a fintech platform processing significant transaction volume. Responsible for system design, team mentorship, and technical roadmap."
  },
  {
    title: "Staff Engineer",
    organization: "Previous Company",
    period: "2019 – 2023",
    description: "Led infrastructure modernization, migrating critical systems while maintaining reliability. Established platform engineering practices adopted company-wide."
  },
  {
    title: "Technical Lead",
    organization: "Growth-Stage Startup",
    period: "2016 – 2019",
    description: "Built and led the core platform team through Series A to C. Scaled backend systems from early product to millions of active users."
  }
];

export const currentRole: ExperienceItem[] = [
  {
    title: "Principal Engineer",
    organization: "Current Engagement",
    period: "2023 – Present",
    context: "Engaged as principal engineer for a fintech platform operating at significant scale, processing transaction volumes that require careful attention to reliability, latency, and regulatory compliance.",
    responsibilities: [
      "Designed and led implementation of a new settlement architecture, reducing processing time by 60% while improving auditability",
      "Established backend platform standards adopted across five engineering teams",
      "Serve as technical bridge between engineering leadership and executive stakeholders on infrastructure investments",
      "Mentor senior engineers transitioning into staff and principal roles"
    ]
  }
];

export const consultingEngagements: ExperienceItem[] = [
  {
    title: "Technical Advisor",
    organization: "Private Equity Portfolio Company",
    period: "2022 – 2023",
    context: "Provided technical due diligence and post-acquisition architecture guidance for a B2B SaaS acquisition.",
    responsibilities: [
      "Led technical diligence identifying critical infrastructure risks prior to close",
      "Developed 18-month technical roadmap for platform modernization",
      "Guided engineering leadership through organizational restructuring"
    ]
  },
  {
    title: "Interim CTO",
    organization: "Series A Startup",
    period: "2021 – 2022",
    context: "Stepped in as interim technical leadership during a transition period, stabilizing operations and hiring permanent leadership.",
    responsibilities: [
      "Stabilized production systems experiencing frequent outages",
      "Rebuilt engineering team processes and hiring pipeline",
      "Recruited and onboarded permanent CTO"
    ]
  }
];

export const previousExperience: ExperienceItem[] = [
  {
    title: "Staff Engineer",
    organization: "Previous Company",
    period: "2019 – 2023",
    context: "Led infrastructure and platform engineering at a mid-stage company through significant growth, from Series B through acquisition.",
    responsibilities: [
      "Architected and led migration from monolithic application to service-oriented architecture",
      "Built and led platform engineering team of eight engineers",
      "Established on-call practices, observability standards, and incident response procedures",
      "Served on technical leadership council shaping company-wide engineering strategy"
    ]
  },
  {
    title: "Technical Lead",
    organization: "Growth-Stage Startup",
    period: "2016 – 2019",
    context: "Joined as early backend engineer, eventually leading the core platform team through rapid growth.",
    responsibilities: [
      "Designed data pipeline processing billions of events daily",
      "Led hiring and development of backend engineering team from 3 to 15 engineers",
      "Partnered with product leadership on technical feasibility and prioritization"
    ]
  },
  {
    title: "Senior Software Engineer",
    organization: "Enterprise Software Company",
    period: "2012 – 2016",
    context: "Backend engineer working on distributed systems and data infrastructure.",
    responsibilities: [
      "Developed core components of distributed storage system",
      "Contributed to open-source tooling adopted by external users",
      "Mentored junior engineers and led technical interviews"
    ]
  },
  {
    title: "Software Engineer",
    organization: "Early Career Positions",
    period: "2008 – 2012",
    context: "Foundational experience across backend development, systems programming, and startup environments.",
    responsibilities: [
      "Built foundational skills in systems design and software engineering",
      "Contributed to multiple products from early development through launch"
    ]
  }
];

export const education = {
  degree: "B.S. Computer Science",
  institution: "University Name",
  year: "2008"
};
