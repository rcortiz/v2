"use client";

import { useState, useEffect } from "react";

import Layout from "@/container/Layout/Layout";
import Timeline from "@/components/Timeline/Timeline";

import { db } from "@/services/firebase";
import { collection, getDocs } from "firebase/firestore";

// export const metadata = {
//   title: "Experience",
// };

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "Experiences")).then((experiences) => {
      const newData = experiences.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setExperiences(newData);
    });
  };

  useEffect(() => {
    fetchPost();
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
