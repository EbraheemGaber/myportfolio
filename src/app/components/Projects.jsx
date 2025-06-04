"use client";
import React, { useState } from "react";
import Card from "./Card";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const data = [
    {
      tag: "front",
      title: "e-commerce",
      pic: "/image/web1.png",
      description: "description",
      get: "/",
      deploy: "/",
    },
    {
      tag: "front",
      title: "e-commerce",
      pic: "/image/web3.avif",
      description: "description",
      get: "/",
      deploy: "/",
    },
    {
      tag: "front",
      title: "e-commerce",
      pic: "/image/web4.webp",
      description: "description",
      get: "/",
      deploy: "/",
    },
    {
      tag: "front",
      title: "e-commerce",
      pic: "/image/web5.jpeg",
      description: "description",
      get: "/",
      deploy: "/",
    },
    {
      tag: "front",
      title: "e-commerce",
      pic: "/image/web1.png",
      description: "description",
      get: "/",
      deploy: "/",
    },
    {
      tag: "full",
      title: "landing Page",
      pic: "/image/web2.jpg",
      description: "description",
      get: "/",
      deploy: "/",
    },
  ];
  const filteredProducts =
    filter === "all" ? data : data.filter((d) => d.tag === filter);
  return (
    <div className="text-white">
      <h1 className="font-bold text-center text-3xl">Projects</h1>
      <div className="flex flex-row gap-3 justify-center py-4">
        <button onClick={() => setFilter("all")}>ALL </button>
        <button onClick={() => setFilter("front")}>Frontend Projects</button>
        <button onClick={() => setFilter("full")}>Fullstack Projects</button>
      </div>
      <div className="grid min-h-screen px-48 mx-auto py-8 md:grid-cols-3 gap:3">
        {filteredProducts.map((p, index) => (
          <div
            className="text-white max-h-fit my-5 border-4 hover:border-none hover:cursor-pointer border-b-amber-200 rounded-4xl  mx-auto"
            key={index}
          >
            <div
              className=" h-68 rounded-4xl w-68 relative"
              key="index"
              style={{ background: `url(${p.pic})`, backgroundSize: "cover" }}
            ></div>
            <div>
              <h5 className="font-bold text-center text-xl">{p.title}</h5>
              <p className="pl-4">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
