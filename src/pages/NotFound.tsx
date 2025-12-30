import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Layout>
      <article className="container">
        <section className="py-section">
          <h1 className="font-serif text-3xl font-normal mb-4">
            Page not found
          </h1>
          <p className="prose text-body mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="font-sans text-small text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
          >
            <span aria-hidden="true">←</span>
            Return home
          </Link>
        </section>
      </article>
    </Layout>
  );
};

export default NotFound;
