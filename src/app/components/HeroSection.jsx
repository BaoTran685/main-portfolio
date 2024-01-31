"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

// breakpoints:
// when screen >= sm, animated text and picture are aligned horizontally
// when screen < sm, animated text and picture are aliend vertically
const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-2 lg:mb-4 text-4xl sm:text-5xl lg:text-6xl 3xl:text-7xl font-extrabold">
            <div className="fit text-transparent bg-clip-text bg-gradient-to-br from-primary-400 to-secondary-600">
              Hello, I'm{" "}
            </div>
            <TypeAnimation
              sequence={[
                "Bao",
                1500,
                "Waterloo Student",
                1700,
                "An Actuary",
                1500,
                "Web Developer",
                1700,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl 3xl:text-2xl mt:1 mb-8">
            not how long, but how well you have lived is the main thing
          </p>
          <div>
            <button className="w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-700 to-secondary-400 text-white">
              <span className="block rounded-full hover:bg-gradient-to-br hover:from-third-700 px-6 py-3">
                Hire Me
              </span>
            </button>
            <button className="w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-700 to-secondary-400 text-white mt-3">
              <span className="block rounded-full hover:bg-gradient-to-br hover:from-third-600 px-6 py-3">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 sm:mt-0 sm:ml-6">
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] 3xl:w-[500px] 3xl:h-[500px] relative">
            <Image
              src="/images/random.jpg"
              alt="hero image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[300px] h-[300] lg:w-[350px] lg:h-[350px] 3xl:w-[450px] 3xl:h-[450px]"
              width={300}
              height={300}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
