"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="text-white grid grid-cols-1 lg:grid-cols-12 ">
      <div className=" col-span-7 sm:text-left mt-2  ">
        <h1 className="lg:text-6xl mb-2 text-transparent bg-clip-text bg-gradient-to-r  from-blue-200 to-orange-300  font-extrabold text-4xl sm:text-5xl">
          Hello,Iam
        </h1>

        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Ebraheem Gaber",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Frontend Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />

        <p className="text-lg mb-6 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis unde
          eius veniam a nemo, aliquid odio.
        </p>
        <div className="flex flex-col sm:flex-row">
          <button className="px-6 bg-gradient-to-br from-blue-200 to-orange-300 py-3 mb-3 sm:w-f rounded-full mr-4 bg-white cursor-pointer hover:bg-slate-800 text-black">
            hire me
          </button>
          <a href="web.pdf">
            <button className="px-6 py-3 mb-3 rounded-full mr-4 bg-gradient-to-br from-blue-200 to-orange-300 bg-black     hover:bg-slate-800 cursor-pointer border-white border text-black ">
              download cv
            </button>
          </a>
        </div>
      </div>
      <div className="rounded-full col-span-5 place-self-center flex justify-center items-center   mx-auto mt-4 ">
        <Image
          className="  rounded-full"
          src="/image/boy.jpeg"
          alt="pic"
          width={250}
          height={250}
        />
      </div>
    </div>
  );
};

export default Hero;
