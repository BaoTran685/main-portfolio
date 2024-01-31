import Image from "next/image";
import React from "react";

const CodeButton = ({ name, img, active, selectCode }) => {
  return (
    <button onClick={selectCode}>
      <div className="relative w-40 h-40 border rounded-full border-bg-white bg-[#e5e7eb] hover:bg-slate-600">
        <Image
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20"
          src={img}
          alt={`${name} image`}
          width={100}
          height={100}
        />
      </div>
    </button>
  );
};

export default CodeButton;
