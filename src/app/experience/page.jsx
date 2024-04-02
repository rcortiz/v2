import React from "react";
import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";
import Layout from "@/container/Layout/Layout";

import { experiences } from "@/constant";

export const metadata = {
  title: "Experience",
};

const Experience = () => {
  return (
    <Layout
      showHeader
      title="Experiences"
      subtitle="My journey as a software developer all throughout the years"
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
