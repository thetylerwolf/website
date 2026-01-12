const Footer = () => {
  return (
    <footer className="py-section-sm border-t border-cream mt-section">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-sans text-small text-muted-foreground">
          <div className="flex items-center gap-6">
            <a
              href="mailto:hello@yourname.com"
              className="hover:text-foreground transition-colors"
            >
              hello@yourname.com
            </a>
            <a
              href="https://linkedin.com/in/yourname"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/yourname"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
          <p className="text-muted-foreground/70">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
