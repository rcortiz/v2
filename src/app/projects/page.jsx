import ProjectGrid from "@/components/project-grid";
import Layout from "@/components/layout/layout";

import { projects } from "@/constants";

export const metadata = {
  title: "Projects",
  description:
    "Selected AI, web application, and ecommerce projects designed and built by AI and software engineer Ralph Ortiz.",
  alternates: { canonical: "/projects" },
};

const Projects = () => {
  return (
    <Layout
      showHeader
      title="Projects"
      subtitle="Highlights of what I've designed and built"
    >
      <ProjectGrid projects={projects} />
    </Layout>
  );
};

export default Projects;
