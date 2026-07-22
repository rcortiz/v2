import ProjectGrid from "@/components/project-grid";
import Layout from "@/components/layout/layout";
import JsonLd from "@/components/json-ld";

import { projects } from "@/constants";
import { createPageMetadata, siteConfig } from "@/utils/site";

const description =
  "Explore Ralph Ortiz's Shopify custom apps, web products, and open-source projects built with React, Next.js, Remix, TypeScript, and GraphQL.";

export const metadata = createPageMetadata({
  title: "Projects",
  description,
  path: "/projects",
});

const projectsStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteConfig.url}/projects#webpage`,
  url: `${siteConfig.url}/projects`,
  name: `Projects — ${siteConfig.name}`,
  description,
  inLanguage: "en",
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  about: { "@id": `${siteConfig.url}/#person` },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        url: project.link,
        keywords: project.techstacks.join(", "),
        creator: { "@id": `${siteConfig.url}/#person` },
      },
    })),
  },
};

const Projects = () => {
  return (
    <Layout
      showHeader
      title="Projects"
      subtitle="Selected Shopify apps, web products, and open-source builds"
    >
      <JsonLd data={projectsStructuredData} />
      <ProjectGrid projects={projects} />
    </Layout>
  );
};

export default Projects;
