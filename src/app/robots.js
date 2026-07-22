export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://rcortiz.dev/sitemap.xml",
    host: "https://rcortiz.dev",
  };
}
