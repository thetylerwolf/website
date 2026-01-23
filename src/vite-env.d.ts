/// <reference types="vite/client" />

declare module "*.md" {
  const content: string;
  export default content;
}

// Google Analytics gtag types
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?: {
        page_path?: string;
        [key: string]: unknown;
      }
    ) => void;
  }
}
