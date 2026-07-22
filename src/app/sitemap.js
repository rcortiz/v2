export default function sitemap() {
  const baseUrl = "https://rcortiz.dev";

  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/projects`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/experience`, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${baseUrl}/certifications`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
