import React from "react";
import { CodeBracketIcon, EyeIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

const ProjectsCard = ({ imgUrl, title, description, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={previewUrl}
            className="h-14 w-14 relative border-2 border-[#ADB7BE] rounded-xl hover:border-white group/link"
          >
            <ArrowTopRightOnSquareIcon className="text-[#ADB7BE] group-hover/link:text-white h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-colors" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-4 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;
