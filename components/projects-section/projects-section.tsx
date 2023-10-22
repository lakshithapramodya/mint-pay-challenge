import { projectsData } from "@/data/projects-data";

import ProjectCard from "./project-card";

const ProjectsSection = () => {
  return (
    <section className="space-y-3 px-4 pb-9 md:px-[47px] xl:space-y-9 xl:px-24">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3 xl:gap-9 [&>*:nth-child(n+4)]:hidden md:[&>*:nth-child(n+4)]:grid md:[&>*:nth-child(n+5)]:hidden xl:[&>*:nth-child(n+5)]:grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} data={project} />
        ))}
      </div>
      <div className="relative z-10 w-full">
        <button className="border-primary hover:bg-primary m-auto flex items-start rounded-[23px] border border-solid px-6 py-2 transition duration-500 ease-in-out hover:scale-[0.97] hover:text-white">
          Load more
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
