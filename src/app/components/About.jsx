"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
const About = () => {
  const date = [
    {
      title: "skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Html</li>
          <li>css</li>
          <li>java script</li>
          <li> bootstrap</li>
          <li>tailwind</li>
          <li>reactjs</li>
          <li>nextjs</li>
          <li>git</li>
        </ul>
      ),
    },
    {
      title: "education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li> Kafr EL Shiekh university </li>
        </ul>
      ),
    },

    {
      title: "certifications",
      id: "english",
      content: (
        <ul className="list-disc pl-2">
          <li> Udcity web development </li>
        </ul>
      ),
    },
  ];
  const [Tabh, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTab = (m) => {
    startTransition(() => {
      setTab(m);
    });
  };
  console.log(date.id);
  return (
    <div className="grid md:grid-cols-2 min-h-[80vh] py-8 px-6">
      <Image
        src={"/image/img.png"}
        alt="pic"
        height={700}
        width={400}
        className="px-5 py-8 mx-auto"
      />
      <div className="flex flex-col py-5">
        <div>
          <h1 className="text-3xl font-bold text-white">About me</h1>
        </div>
        <div>
          <p className="text-white py-3 font-semibold">
            Experienced in building responsive and SEO-friendly web applications
            using Next.js and React. Proficient in server-side rendering, static
            site generation, and dynamic routing. Skilled in writing clean,
            modular components and styling with Tailwind CSS and CSS Modules.
            Able to integrate REST APIs and manage state using React hooks and
            Context API.
          </p>
        </div>
        <div className="flex flex-row mt-1 text-white">
          <TabButton
            selectTab={() => handleTab("skills")}
            active={Tabh === "skills"}
          >
            skills
          </TabButton>
          <TabButton
            selectTab={() => handleTab("education")}
            active={Tabh === "education"}
          >
            education
          </TabButton>

          <TabButton
            selectTab={() => handleTab("english")}
            active={Tabh === "certifications"}
          >
            cerifications
          </TabButton>
        </div>
        <div className="mt-3 pl-6 text-white">
          {date.find((ele) => ele.id === Tabh).content}
        </div>
      </div>
    </div>
  );
};

export default About;
