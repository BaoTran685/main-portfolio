"use client";
import Image from "next/image";
import React from "react";

const CodeButton = ({ name, img, active, selectCode, disabled }) => {
  const buttonShadowColor = active ? "primary" : "secondary"
  return (
    <button onClick={selectCode} disabled={disabled}>
      <div className={`relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-36 xl:h-36 rounded-xl bg-[#e5e7eb] hover:bg-gradient-to-br hover:from-third-600`}>
        <Image
          className="absolute w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
