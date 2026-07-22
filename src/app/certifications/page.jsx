import Layout from "@/components/layout/layout";
import JsonLd from "@/components/json-ld";
import CertificationCard from "@/components/sections/certification";
import { certifications } from "@/constants";
import { createPageMetadata, siteConfig } from "@/utils/site";

const description =
  "Professional certifications earned by Ralph Ortiz across AWS cloud, Shopify development, Liquid storefronts, Scrum, and agile delivery.";

export const metadata = createPageMetadata({
  title: "Certifications",
  description,
  path: "/certifications",
});

const certificationsStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteConfig.url}/certifications#webpage`,
  url: `${siteConfig.url}/certifications`,
  name: `Certifications — ${siteConfig.name}`,
  description,
  inLanguage: "en",
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  about: { "@id": `${siteConfig.url}/#person` },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: certifications.length,
    itemListElement: certifications.map((certification, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "EducationalOccupationalCredential",
        name: certification.title,
        description: certification.description,
        credentialCategory: certification.focus,
        recognizedBy: {
          "@type": "Organization",
          name: certification.issuer,
        },
      },
    })),
  },
};

const Certifications = () => {
  return (
    <Layout
      showHeader
      title="Certifications"
      subtitle="Professional credentials across AWS, Shopify, Liquid, and Scrum"
    >
      <JsonLd data={certificationsStructuredData} />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {certifications.map((certification, index) => (
          <CertificationCard
            {...certification}
            index={index}
            key={certification.id}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Certifications;
