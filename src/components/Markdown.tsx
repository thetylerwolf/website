import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  content: string;
}

const Markdown = ({ content }: MarkdownProps) => {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => (
          <h1 className="font-serif text-3xl md:text-4xl font-normal mb-4 tracking-normal">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="font-sans text-lg font-medium mb-6 text-muted-foreground tracking-normal">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="font-serif text-xl font-normal mb-2">{children}</h3>
        ),
        p: ({ children }) => <p className="prose text-body mb-6">{children}</p>,
        ul: ({ children }) => (
          <ul className="prose space-y-3 list-none pl-0 mb-6">{children}</ul>
        ),
        li: ({ children }) => <li>{children}</li>,
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-foreground hover:text-primary transition-colors"
          >
            {children}
          </a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default Markdown;
