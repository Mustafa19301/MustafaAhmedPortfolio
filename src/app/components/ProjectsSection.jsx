import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Live Face and Object Detection",
    description: "Developed a Live Face and Object Detection using Python that integrates OpenCV and YOLO5 models",
    image: "/images/projects/FaceDetection.PNG",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Mustafa19301/Live-Face-and-Object-Detection",
  },
  {
    id: 2,
    title: "SR Dashboard Heatmap",
    description: "Group project that we developed using React and Object-Oriented Programming Python using data from City of Windsor (All-service request)",
    image: "/images/projects/dashboardheatmap.PNG",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Fakkiie/COMP3220-Team2",
  },
  {
    id: 3,
    title: "Next.js Portfolio Web Application",
    description: "Developed, designed, and deployed a Next.js portfolio web application with robust React framework showcasing a GitHub repository of technical projects and codes",
    image: "/images/projects/6.PNG",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Mustafa19301/MustafaAhmedPortfolio",
  },
  {
    id: 4,
    title: "Simple HTML Portfolio Website",
    description: "Built an HTML simple portfolio website previously for projects",
    image: "/images/projects/1.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Mustafa19301",
  },
  {
    id: 5,
    title: "RPG Adventure JAVA Game",
    description: "Programmed an RPG game using JAVA that plays a knight programmed to defeat mobs and earn rewards",
    image: "/images/projects/2.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Mustafa19301/JAVA-RPG-action-project",
  },
  {
    id: 6,
    title: "Website Designed Application",
    description: "Designed professional medical website for a leading company primarily focused on podiatry medicine.",
    image: "/images/projects/welcome.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://www.ahmedfootsurgery.com/",
  },
  {
    id: 7,
    title: "Tic-Tac-Toe Python Game",
    description: "Programmed a Tic-Tac-Toe game using Python that utilizes Definitons",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Mustafa19301/Python-Tic-Tac-Toe",
  },
  ];

const ProjectsSection = () => {
    return (
        <section id="projects">
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
        </section>
    );
};

export default ProjectsSection
