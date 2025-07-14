import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        <ProjectCard
          title="Naing Electric (E-commerce)"
          description="The main purpose of this website is for the shop owner to view the stock and selling process more easily."
        />
        <ProjectCard
          title="Aesthetic Clinic (Web App)"
          description="The main goal is to provide a simple online platform for patients to connect with doctors for treatment."
        />
        <ProjectCard
          title="MGD Mall (Admin Panel)"
          description="This website is where various shops can sell their products as representatives."
        />
        <ProjectCard
          title="Gentlemen Tailor (Web App)"
          description="The main aim is to offer a convenient way for customers to order suits including customize."
        />
        <ProjectCard
          title="MOM (Dashboard Panel)"
          description="The main purpose of this website is to easily view the evidence of an internal meeting."
        />
        <ProjectCard
          title="MyDoctor (Web App)"
          description=" The main goal is to make it simple for patients to get medical help online."
        />
        <ProjectCard
          title="Coursia (Web App)"
          description="The main purpose is to enable users  easily study the courses they want  from various places."
        />
        <ProjectCard
          title="Shwe Kyar Phyu (Web App)"
          description="The main goal is to make it simpler for shop owners to keep track of their stock and for users to access...."
        />
        <ProjectCard
          title="FreshMoe (Multinational Website)"
          description="FreshMoe is a multilingual portfolio website that showcases fresh local products across supported countries. It automatically adapts content and language based on user location, with manual language switching for a personalized experience. "
        />
        <ProjectCard
          title="FreshMoe (Web App)"
          description="They support dynamic master data , dynamic data of portfolio's each page and control supported languages and countries . "
        />
      </div>
    </div>
  )
};

export default Projects;
