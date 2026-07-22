import Layout from "@/components/layout/layout";
import CertificationCard from "@/components/sections/certification";
import { certifications } from "@/constants";

export const metadata = {
  title: "Certifications",
  description:
    "Professional cloud and agile delivery certifications earned by AI and software engineer Ralph Ortiz.",
  alternates: { canonical: "/certifications" },
};

const Certifications = () => {
  return (
    <Layout
      showHeader
      title="Certifications"
      subtitle="Professional credentials across cloud and agile delivery"
    >
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
