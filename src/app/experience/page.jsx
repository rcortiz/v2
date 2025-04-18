"use client";

import { useState, useEffect } from "react";

import Layout from "@/components/layout/layout";

import { fetchCollectionData } from "@/services/firebase";
import ExperienceCard from "@/components/sections/experience";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const experienceData = await fetchCollectionData("Experiences");
        setExperiences(experienceData);
      } catch (error) {
        console.error("Failed to fetch experience:", error);
      }
    };

    fetchExperiences();
  }, []);

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
