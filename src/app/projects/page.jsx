import React from "react";

import ProjectCard from "@/components/ProjectCard/ProjectCard";
import Layout from "@/container/Layout/Layout";

import { projects } from "@/constant";

export const metadata = {
  title: "Projects",
};

const Projects = () => {
  return (
    <Layout
      showHeader
      title="Projects"
      subtitle="A collection of things I've built."
    >
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 py-4 flex justify-center"
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
