import Layout from "@/components/layout/layout";

import ExperienceCard from "@/components/sections/experience";
import { experiences } from "@/constants";

export const metadata = {
  title: "Experience",
  description:
    "Explore Ralph Ortiz's experience delivering AI solutions, web products, ecommerce platforms, APIs, and enterprise systems.",
  alternates: { canonical: "/experience" },
};

const Experience = () => {
  return (
    <Layout
      showHeader
      title="Experiences"
      subtitle="A timeline of my career development and experiences"
    >
      <div>
        {experiences.map((experience) => (
          <ExperienceCard {...experience} key={experience.id} />
        ))}
      </div>
    </Layout>
  );
};

export default Experience;
