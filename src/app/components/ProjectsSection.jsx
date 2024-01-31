import React from "react";
import ProjectsCard from "./ProjectsCard";

const projectsList = [
  {
    id: 1,
    title: "React Portfolio",
    description: "My Personal Website",
    image: "/images/random.jpg",
    preview: '/',
  },
  {
    id: 2,
    title: "Password Encrypter",
    description: "Encryption/Decryption of Text",
    image: "/images/projects/passwordE.png",
    preview: 'https://passwordencrypter.com/',
  },
];
const ProjectsSession = () => {
  return (
    <>
      <h2 className="text-white font-extrabold text-center text-4xl lg:text-5xl my-7 md:my-10">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {projectsList.map((project) => (
          <ProjectsCard
            key={project.id}
            imgUrl={project.image}
            title={project.title}
            description={project.description}
            previewUrl={project.preview}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSession;
