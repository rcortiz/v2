"use client";

import { useState, useEffect } from "react";

import ProjectCard from "@/components/sections/projects";
import Layout from "@/components/layout/layout";

import { fetchCollectionData } from "@/services/firebase";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectData = await fetchCollectionData("Projects");
        setProjects(projectData);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Layout
      showHeader
      title="Projects"
      subtitle="A highlights of what I've designed and built"
    >
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex w-full justify-stretch py-2 md:w-[370px] md:px-6 md:py-6"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
