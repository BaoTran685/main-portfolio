"use client";
import Image from "next/image";
import React from "react";

const CodeButton = ({ name, img, active, selectCode, disabled }) => {
  return (
    <button onClick={selectCode} disabled={disabled}>
      <div className={`relative w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-xl bg-[var(--light-color)] div--hover--button hover--text--transition--color`}>
        <Image
          className="absolute w-14 h-14 lg:w-18 lg:h-18 xl:w-20 xl:h-20 div--center"
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
