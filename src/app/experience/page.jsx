import Layout from "@/components/layout/layout";
import JsonLd from "@/components/json-ld";

import ExperienceCard from "@/components/sections/experience";
import { experiences } from "@/constants";
import { createPageMetadata, siteConfig } from "@/utils/site";

const description =
  "Ralph Ortiz's software engineering experience across VISEO Asia, GMA New Media, and MedGrocer, delivering Shopify, React, API, and accessible web products.";

export const metadata = createPageMetadata({
  title: "Experience",
  description,
  path: "/experience",
});

const experienceStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteConfig.url}/experience#webpage`,
  url: `${siteConfig.url}/experience`,
  name: `Experience — ${siteConfig.name}`,
  description,
  inLanguage: "en",
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  about: { "@id": `${siteConfig.url}/#person` },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: experiences.length,
    itemListElement: experiences.map((experience, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${experience.role} at ${experience.company}`,
      url: experience.link,
      description: [
        ...experience.responsibility,
        `Projects handled: ${experience.projects.join(", ")}.`,
      ].join(" "),
    })),
  },
};

const Experience = () => {
  return (
    <Layout
      showHeader
      title="Experience"
      subtitle="Software engineering across Shopify, React, APIs, and accessible web products"
    >
      <JsonLd data={experienceStructuredData} />
      <ol className="relative before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-0.5 before:bg-primary/20 sm:before:left-[10rem] [&>li:last-child>article]:border-0">
        {experiences.map((experience) => (
          <ExperienceCard {...experience} key={experience.id} />
        ))}
      </ol>
    </Layout>
  );
};

export default Experience;
