import Layout from "@/components/layout/Layout";
import Markdown from "@/components/Markdown";
import contactContent from "@/content/contact.md?raw";
import { contactInfo } from "@/content/contact";

const Contact = () => {
  // Extract just the prose paragraphs (skip the h1)
  const proseContent = contactContent
    .split("\n")
    .filter(line => !line.startsWith("#"))
    .join("\n")
    .trim();

  return (
    <Layout>
      <article className="container">
        <header className="mb-section">
          <h1 className="font-serif text-3xl md:text-4xl font-normal mb-4 tracking-normal">
            Contact
          </h1>
        </header>

        <section className="prose mb-section">
          <Markdown content={proseContent} />
        </section>

        <section className="mb-section">
          <div className="space-y-6 font-sans">
            <div>
              <p className="text-small text-muted-foreground mb-1">Email</p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-body hover:text-primary transition-colors"
              >
                {contactInfo.email}
              </a>
            </div>
            <div>
              <p className="text-small text-muted-foreground mb-1">LinkedIn</p>
              <a
                href={contactInfo.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body hover:text-primary transition-colors"
              >
                {contactInfo.linkedin.display}
              </a>
            </div>
            <div>
              <p className="text-small text-muted-foreground mb-1">GitHub</p>
              <a
                href={contactInfo.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body hover:text-primary transition-colors"
              >
                {contactInfo.github.display}
              </a>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default Contact;
