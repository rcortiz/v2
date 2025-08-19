import Layout from "@/components/layout/layout";

import { fetchCollectionData } from "@/services/firebase";
import ExperienceCard from "@/components/sections/experience";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Experience",
};

const Experience = async () => {
  const experiences = await fetchCollectionData("Experiences");

  return (
    <Layout
      showHeader
      title="Experiences"
      subtitle="A timeline of my career development and experiences"
    >
      <div>
        {experiences.map((experience, index) => (
          <ExperienceCard {...experience} key={index} />
        ))}
      </div>
    </Layout>
  );
};

export default Experience;
