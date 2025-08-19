import ProjectCard from "@/components/sections/projects";
import Layout from "@/components/layout/layout";

import { fetchCollectionData } from "@/services/firebase";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Projects",
};

const Projects = async () => {
  const projects = await fetchCollectionData("Projects");

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
