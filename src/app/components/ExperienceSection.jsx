"use client";
import React, { useTransition, useState } from "react";
import CodeButton from "./CodeButton";

const languages = [
  {
    name: "python",
    img: '/images/codes/python.png',
    projects: "20",
    hours: "100",
  },
  {
    name: "C++",
    img: '/images/codes/c++.png',
    projects: "10",
    hours: "100",
  },
  {
    name: "JS",
    img: '/images/codes/js.png',
    projects: "3",
    hours: "10",
  },
];
const ExperienceSection = () => {
  const [code, setCode] = useState("python");
  const [isPending, startTransition] = useTransition();

  const handleCodeChange = (id) => {
    startTransition(() => {
      setCode(id);
    });
  };
  return (
    <div className="text-white flex flex-col items-center mt-6 lg:mt-10 mb-4">
      <div className="text-4xl lg:text-5xl font-extrabold mb-6 lg:mb-8">
        Experience
      </div>
      <div className="flex flex-rowg gap-20 lg:gap-30">
        {languages.map((language, index) => (
          <CodeButton
            key={index}
            name={language.name}
            img={language.img}
            active={code === language.name}
            selectCode={() => handleCodeChange(language.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
