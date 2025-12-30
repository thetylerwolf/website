import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <article className="container">
        {/* Section 1: Introduction */}
        <section className="mb-section">
          <h1 className="font-serif text-3xl md:text-4xl font-normal mb-4 tracking-normal">
            Your Name
          </h1>
          <p className="font-sans text-muted-foreground text-body mb-6">
            Senior Engineer
          </p>
          <p className="prose text-body">
            I build backend systems, infrastructure, and technical architecture
            for organizations navigating complexity. Currently available for
            select consulting engagements.
          </p>
        </section>

        {/* Section 2: Expanded Profile */}
        <section className="mb-section prose">
          <p>
            Over fifteen years, I've worked across early-stage startups, growth
            companies, and established enterprises—building systems that scale,
            leading technical teams, and translating ambiguous business
            requirements into reliable software.
          </p>
          <p>
            My work tends toward backend systems, data infrastructure, and
            platform architecture. I'm most useful in situations that require
            deep technical judgment, ownership of ambiguous problems, and the
            ability to work effectively across engineering, product, and
            executive stakeholders.
          </p>
          <p>
            I value calm, deliberate work. I prefer depth to breadth, and I'm
            skeptical of technical decisions driven by novelty rather than
            necessity.
          </p>
        </section>

        {/* Section 3: How I Work */}
        <section className="mb-section">
          <h2 className="font-sans text-lg font-medium mb-6 text-muted-foreground tracking-normal">
            What I'm typically brought in to do
          </h2>
          <ul className="prose space-y-3 list-none pl-0">
            <li>
              Own and architect backend systems with significant complexity or
              scale requirements
            </li>
            <li>
              Lead technical strategy for teams navigating growth transitions
            </li>
            <li>
              Untangle legacy systems and establish paths toward sustainable
              architecture
            </li>
            <li>
              Bridge gaps between technical teams and business stakeholders
            </li>
            <li>
              Provide technical due diligence for acquisitions or investments
            </li>
            <li>
              Mentor senior engineers stepping into architectural or leadership
              roles
            </li>
          </ul>
        </section>

        {/* Section 4: Selected Experience Preview */}
        <section className="mb-section">
          <h2 className="font-sans text-lg font-medium mb-8 text-muted-foreground tracking-normal">
            Selected Experience
          </h2>
          <div className="space-y-8">
            <ExperiencePreview
              title="Principal Engineer"
              organization="Current Engagement"
              period="2023 – Present"
              description="Leading backend architecture for a fintech platform processing significant transaction volume. Responsible for system design, team mentorship, and technical roadmap."
            />
            <ExperiencePreview
              title="Staff Engineer"
              organization="Previous Company"
              period="2019 – 2023"
              description="Led infrastructure modernization, migrating critical systems while maintaining reliability. Established platform engineering practices adopted company-wide."
            />
            <ExperiencePreview
              title="Technical Lead"
              organization="Growth-Stage Startup"
              period="2016 – 2019"
              description="Built and led the core platform team through Series A to C. Scaled backend systems from early product to millions of active users."
            />
          </div>
          <div className="mt-10">
            <Link
              to="/experience"
              className="font-sans text-small text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
            >
              View full experience
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </article>
    </Layout>
  );
};

interface ExperiencePreviewProps {
  title: string;
  organization: string;
  period: string;
  description: string;
}

const ExperiencePreview = ({
  title,
  organization,
  period,
  description,
}: ExperiencePreviewProps) => {
  return (
    <div className="group">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
        <h3 className="font-serif text-xl font-normal">{title}</h3>
        <span className="font-sans text-small text-muted-foreground">
          {period}
        </span>
      </div>
      <p className="font-sans text-small text-muted-foreground mb-2">
        {organization}
      </p>
      <p className="prose text-body">{description}</p>
    </div>
  );
};

export default Index;
