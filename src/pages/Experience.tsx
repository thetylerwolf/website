import Layout from "@/components/layout/Layout";
import {
  currentRole,
  consultingEngagements,
  previousExperience,
  education,
  type ExperienceItem,
} from "@/content/experience";

const Experience = () => {
  return (
    <Layout>
      <article className="container">
        <header className="mb-section">
          <h1 className="font-serif text-3xl md:text-4xl font-normal mb-4 tracking-normal">
            Experience
          </h1>
        </header>

        {/* Current Role */}
        <section className="mb-section">
          <h2 className="font-sans text-lg font-medium mb-8 text-muted-foreground tracking-normal">
            Current Role
          </h2>
          {currentRole.map((role, index) => (
            <ExperienceEntry key={index} {...role} />
          ))}
        </section>

        {/* Consulting */}
        <section className="mb-section">
          <h2 className="font-sans text-lg font-medium mb-8 text-muted-foreground tracking-normal">
            Consulting Engagements
          </h2>
          <div className="space-y-12">
            {consultingEngagements.map((engagement, index) => (
              <ExperienceEntry key={index} {...engagement} />
            ))}
          </div>
        </section>

        {/* Previous Experience */}
        <section className="mb-section">
          <h2 className="font-sans text-lg font-medium mb-8 text-muted-foreground tracking-normal">
            Previous Experience
          </h2>
          <div className="space-y-12">
            {previousExperience.map((exp, index) => (
              <ExperienceEntry key={index} {...exp} />
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-section">
          <h2 className="font-sans text-lg font-medium mb-8 text-muted-foreground tracking-normal">
            Education
          </h2>
          <div>
            <h3 className="font-serif text-xl font-normal mb-1">
              {education.degree}
            </h3>
            <p className="font-sans text-small text-muted-foreground">
              {education.institution}, {education.year}
            </p>
          </div>
        </section>
      </article>
    </Layout>
  );
};

const ExperienceEntry = ({
  title,
  organization,
  period,
  context,
  responsibilities,
}: ExperienceItem) => {
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
