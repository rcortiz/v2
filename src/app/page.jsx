import Hero from "@/components/sections/hero";
import Layout from "@/components/layout/layout";
import JsonLd from "@/components/json-ld";
import { certifications } from "@/constants";
import { createPageMetadata, siteConfig } from "@/utils/site";

export const metadata = createPageMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
});

const websiteId = `${siteConfig.url}/#website`;
const personId = `${siteConfig.url}/#person`;

const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: `${siteConfig.url}/`,
      name: siteConfig.name,
      alternateName: ["Ralph Ortiz Portfolio", siteConfig.alternateName],
      description: siteConfig.description,
      inLanguage: "en",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#profile-page`,
      url: `${siteConfig.url}/`,
      name: siteConfig.title,
      description: siteConfig.description,
      inLanguage: "en",
      isPartOf: { "@id": websiteId },
      mainEntity: { "@id": personId },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.name,
      url: `${siteConfig.url}/`,
      image: `${siteConfig.url}/hero-img-transparent.png`,
      description: siteConfig.description,
      jobTitle: "AI & Software Engineer",
      worksFor: {
        "@type": "Organization",
        name: "VISEO Asia",
        url: "https://asia.viseo.com/",
      },
      sameAs: [
        "https://github.com/rcortiz",
        "https://www.linkedin.com/in/ralphortiz/",
        "https://codepen.io/rcortiz",
        "https://dribbble.com/_rcortiz",
      ],
      knowsAbout: [
        "Artificial intelligence",
        "React",
        "Next.js",
        "Node.js",
        "Shopify development",
        "Accessible web development",
        "Full stack development",
      ],
      hasCredential: certifications.map((certification) => ({
        "@type": "EducationalOccupationalCredential",
        name: certification.title,
        description: certification.description,
        credentialCategory: certification.focus,
        recognizedBy: {
          "@type": "Organization",
          name: certification.issuer,
        },
      })),
    },
  ],
};

export default function About() {
  return (
    <Layout>
      <JsonLd data={homeStructuredData} />
      <Hero />
    </Layout>
  );
}
