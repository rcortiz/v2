"use client";

import { useState, useEffect } from "react";

import Layout from "@/components/layout/layout";
import Timeline from "@/components/layout/timeline";

import { fetchCollectionData } from "@/services/firebase";

// export const metadata = {
//   title: "Experience",
// };

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [isTransitionVisible, setTransitionVisible] = useState(true);

  // const fetchPost = async () => {
  //   await getDocs(collection(db, "Experiences")).then((experiences) => {
  //     const newData = experiences.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     setExperiences(newData);
  //   });
  // };

  // useEffect(() => {
  //   fetchPost();
  // }, []);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const experienceData = await fetchCollectionData("Experiences");
        setExperiences(experienceData);
        setTimeout(() => {
          setTransitionVisible(false); // Hide transition after fetching data
        }, 500); // Match the duration of the transition
        setTransitionVisible(true);
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
      subtitle="My journey as a software developer all throughout the years"
    >
      <div>
        {experiences.map((experience, index) => (
          <Timeline {...experience} key={index} />
        ))}
      </div>
    </Layout>
  );
};

export default Experience;
