import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
    {
    id: 1,
    title: "Full-Stack Portfolio Web Application",
    description: "Developed, Designed and Deployed a full stack portfolio web application with React",
    image: "/images/projects/6.PNG",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Mustafa19301",
  },
  {
    id: 2,
    title: "Simple HTML Portfolio Website",
    description: "Built an HTML simple portfolio website previously for projects",
    image: "/images/projects/1.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Mustafa19301",
  },
  {
    id: 3,
    title: "RPG Adventure JAVA Game",
    description: "Programmed an RPG game using JAVA that plays a knight programmed to defeat mobs and earn rewards",
    image: "/images/projects/2.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Mustafa19301",
  },
  {
    id: 4,
    title: "Website Designed Application",
    description: "Designed a Website for a Medical field introducing Podiatry",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Mustafa19301",
  },
  {
    id: 5,
    title: "Tic-Tac-Toe Python Game",
    description: "Programmed a Tic-Tac-Toe using Python that utilizes Definitons",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Mustafa19301",
  },
  ];

const ProjectsSection = () => {
    return (
        <>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {projectsData.map((project) => (
            <ProjectCard key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            />
            ))}
            </div>
        </>
    );
};

export default ProjectsSection
