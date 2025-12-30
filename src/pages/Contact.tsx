import Layout from "@/components/layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <article className="container">
        <header className="mb-section">
          <h1 className="font-serif text-3xl md:text-4xl font-normal mb-4 tracking-normal">
            Contact
          </h1>
        </header>

        <section className="prose mb-section">
          <p>
            I'm currently available for select consulting engagements,
            particularly those involving backend architecture, infrastructure
            strategy, or technical leadership during transitions.
          </p>
          <p>
            For inquiries about consulting work, or to discuss potential
            collaboration, the best way to reach me is via email.
          </p>
        </section>

        <section className="mb-section">
          <div className="space-y-6 font-sans">
            <div>
              <p className="text-small text-muted-foreground mb-1">Email</p>
              <a
                href="mailto:hello@yourname.com"
                className="text-body hover:text-primary transition-colors"
              >
                hello@yourname.com
              </a>
            </div>
            <div>
              <p className="text-small text-muted-foreground mb-1">LinkedIn</p>
              <a
                href="https://linkedin.com/in/yourname"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body hover:text-primary transition-colors"
              >
                linkedin.com/in/yourname
              </a>
            </div>
            <div>
              <p className="text-small text-muted-foreground mb-1">GitHub</p>
              <a
                href="https://github.com/yourname"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body hover:text-primary transition-colors"
              >
                github.com/yourname
              </a>
            </div>
          </div>
        </section>

        <section className="prose">
          <p className="text-muted-foreground text-small">
            I typically respond within one to two business days. For urgent
            matters, please indicate as such in the subject line.
          </p>
        </section>
      </article>
    </Layout>
  );
};

export default Contact;
