import Layout from "@/components/layout/Layout";

const Experience = () => {
  return (
    <Layout>
      <article className="container">
        <header className="mb-section">
          <h1 className="font-serif text-3xl md:text-4xl font-normal mb-4 tracking-normal">
            Experience
          </h1>
          <p className="prose text-body text-muted-foreground">
            A selective overview of roles and engagements, emphasizing scope,
            judgment, and outcomes.
          </p>
        </header>

        {/* Current Role */}
        <section className="mb-section">
          <h2 className="font-sans text-lg font-medium mb-8 text-muted-foreground tracking-normal">
            Current Role
          </h2>
          <ExperienceEntry
            title="Principal Engineer"
            organization="Current Engagement"
            period="2023 – Present"
            context="Engaged as principal engineer for a fintech platform operating at significant scale, processing transaction volumes that require careful attention to reliability, latency, and regulatory compliance."
            responsibilities={[
              "Designed and led implementation of a new settlement architecture, reducing processing time by 60% while improving auditability",
              "Established backend platform standards adopted across five engineering teams",
              "Serve as technical bridge between engineering leadership and executive stakeholders on infrastructure investments",
              "Mentor senior engineers transitioning into staff and principal roles",
            ]}
          />
        </section>

        {/* Select Consulting */}
        <section className="mb-section">
          <h2 className="font-sans text-lg font-medium mb-8 text-muted-foreground tracking-normal">
            Select Consulting Engagements
          </h2>
          <div className="space-y-12">
            <ExperienceEntry
              title="Technical Advisor"
              organization="Private Equity Portfolio Company"
              period="2022 – 2023"
              context="Provided technical due diligence and post-acquisition architecture guidance for a B2B SaaS acquisition."
              responsibilities={[
                "Led technical diligence identifying critical infrastructure risks prior to close",
                "Developed 18-month technical roadmap for platform modernization",
                "Guided engineering leadership through organizational restructuring",
              ]}
            />
            <ExperienceEntry
              title="Interim CTO"
              organization="Series A Startup"
              period="2021 – 2022"
              context="Stepped in as interim technical leadership during a transition period, stabilizing operations and hiring permanent leadership."
              responsibilities={[
                "Stabilized production systems experiencing frequent outages",
                "Rebuilt engineering team processes and hiring pipeline",
                "Recruited and onboarded permanent CTO",
              ]}
            />
          </div>
        </section>

        {/* Previous Experience */}
        <section className="mb-section">
          <h2 className="font-sans text-lg font-medium mb-8 text-muted-foreground tracking-normal">
            Previous Experience
          </h2>
          <div className="space-y-12">
            <ExperienceEntry
              title="Staff Engineer"
              organization="Previous Company"
              period="2019 – 2023"
              context="Led infrastructure and platform engineering at a mid-stage company through significant growth, from Series B through acquisition."
              responsibilities={[
                "Architected and led migration from monolithic application to service-oriented architecture",
                "Built and led platform engineering team of eight engineers",
                "Established on-call practices, observability standards, and incident response procedures",
                "Served on technical leadership council shaping company-wide engineering strategy",
              ]}
            />
            <ExperienceEntry
              title="Technical Lead"
              organization="Growth-Stage Startup"
              period="2016 – 2019"
              context="Joined as early backend engineer, eventually leading the core platform team through rapid growth."
              responsibilities={[
                "Designed data pipeline processing billions of events daily",
                "Led hiring and development of backend engineering team from 3 to 15 engineers",
                "Partnered with product leadership on technical feasibility and prioritization",
              ]}
            />
            <ExperienceEntry
              title="Senior Software Engineer"
              organization="Enterprise Software Company"
              period="2012 – 2016"
              context="Backend engineer working on distributed systems and data infrastructure."
              responsibilities={[
                "Developed core components of distributed storage system",
                "Contributed to open-source tooling adopted by external users",
                "Mentored junior engineers and led technical interviews",
              ]}
            />
            <ExperienceEntry
              title="Software Engineer"
              organization="Early Career Positions"
              period="2008 – 2012"
              context="Foundational experience across backend development, systems programming, and startup environments."
              responsibilities={[
                "Built foundational skills in systems design and software engineering",
                "Contributed to multiple products from early development through launch",
              ]}
            />
          </div>
        </section>

        {/* Education */}
        <section className="mb-section">
          <h2 className="font-sans text-lg font-medium mb-8 text-muted-foreground tracking-normal">
            Education
          </h2>
          <div>
            <h3 className="font-serif text-xl font-normal mb-1">
              B.S. Computer Science
            </h3>
            <p className="font-sans text-small text-muted-foreground">
              University Name, 2008
            </p>
          </div>
        </section>
      </article>
    </Layout>
  );
};

interface ExperienceEntryProps {
  title: string;
  organization: string;
  period: string;
  context: string;
  responsibilities: string[];
}

const ExperienceEntry = ({
  title,
  organization,
  period,
  context,
  responsibilities,
}: ExperienceEntryProps) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
        <h3 className="font-serif text-xl font-normal">{title}</h3>
        <span className="font-sans text-small text-muted-foreground">
          {period}
        </span>
      </div>
      <p className="font-sans text-small text-muted-foreground mb-4">
        {organization}
      </p>
      <p className="prose text-body mb-4">{context}</p>
      <ul className="prose space-y-2">
        {responsibilities.map((item, index) => (
          <li key={index} className="list-disc ml-6">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
