import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Markdown from "@/components/Markdown";
import homeContent from "@/content/home.md?raw";
import { experiencePreview } from "@/content/experience";

const Index = () => {
  // Parse the markdown to extract sections
  const sections = parseHomeContent(homeContent);

  return (
    <Layout>
      <article className="container">
        {/* Section 1: Introduction */}
        <section className="mb-section">
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
            {/* Photo placeholder */}
            <div className="shrink-0">
              <div className="w-28 h-36 md:w-32 md:h-40 bg-cream rounded-sm overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground/40">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Text content */}
            <div className="flex-1">
              <h1 className="font-serif text-3xl md:text-4xl font-normal mb-4 tracking-normal">
                {sections.name}
              </h1>
              <p className="font-sans text-muted-foreground text-body mb-6">
                {sections.role}
              </p>
              <p className="prose text-body">{sections.intro}</p>
            </div>
          </div>
        </section>

        {/* Section 2: Expanded Profile */}
        <section className="mb-section prose">
          {sections.profile.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

        {/* Section 3: How I Work */}
        <section className="mb-section pt-section-sm border-t border-cream">
          <h2 className="font-sans text-lg font-medium mb-6 text-muted-foreground tracking-normal">
            What I'm typically brought in to do
          </h2>
          <ul className="prose space-y-3 list-none pl-0">
            {sections.workItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Section 4: Selected Experience Preview */}
        <section className="mb-section pt-section-sm border-t border-cream">
          <h2 className="font-sans text-lg font-medium mb-8 text-muted-foreground tracking-normal">
            Selected Experience
          </h2>
          <div className="space-y-8">
            {experiencePreview.map((exp, index) => (
              <ExperiencePreview
                key={index}
                title={exp.title}
                organization={exp.organization}
                period={exp.period}
                description={exp.description}
              />
            ))}
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

// Parse markdown content into structured sections
function parseHomeContent(markdown: string) {
  const lines = markdown.split("\n");
  
  let name = "";
  let role = "";
  let intro = "";
  const profile: string[] = [];
  const workItems: string[] = [];
  
  let currentSection = "";
  let profileParagraph = "";
  
  for (const line of lines) {
    if (line.startsWith("# ")) {
      name = line.replace("# ", "").trim();
    } else if (line.startsWith("## Profile")) {
      currentSection = "profile";
    } else if (line.startsWith("## What")) {
      currentSection = "work";
    } else if (currentSection === "" && !line.startsWith("#") && line.trim() && !name) {
      // Skip
    } else if (currentSection === "" && !line.startsWith("#") && line.trim() && name && !role) {
      role = line.trim();
    } else if (currentSection === "" && !line.startsWith("#") && line.trim() && name && role) {
      intro = line.trim();
      currentSection = "afterIntro";
    } else if (currentSection === "profile") {
      if (line.trim() === "") {
        if (profileParagraph) {
          profile.push(profileParagraph.trim());
          profileParagraph = "";
        }
      } else if (!line.startsWith("#")) {
        profileParagraph += (profileParagraph ? " " : "") + line.trim();
      }
    } else if (currentSection === "work" && line.startsWith("- ")) {
      workItems.push(line.replace("- ", "").trim());
    }
  }
  
  if (profileParagraph) {
    profile.push(profileParagraph.trim());
  }
  
  return { name, role, intro, profile, workItems };
}

export default Index;
