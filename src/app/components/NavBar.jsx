"use client";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Overlay from "./Overlay";

const NavBar = () => {
  const links = [
    { title: "About", path: "#about" },
    { title: "Home", path: "#home" },
    { title: "Projects", path: "#projects" },
    { title: "Contact", path: "#contact" },
  ];
  const [navOpen, setOpen] = useState(true);

  return (
    <nav className="fixed py-4 px-6 font-semibold top-0 right-0 left-0 z-10 bg-[rgba(18,18,18,0.70)]   items-center justify-between ">
      <div className="flex flex-row justify-between">
        <Link className="text-5xl block text-white" href={"/"}>
          logo
        </Link>

        <div className=" hidden  md:flex  md:flex-row ">
          <ul className="flex flex-row">
            {links.map((link, index) => (
              <li key={index}>
                <NavLinks href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <div className=" md:hidden block">
          {!navOpen && <Overlay links={links} />}
        </div>
        <div className=" md:hidden block  ">
          <div>
            {navOpen ? (
              <button
                onClick={() => {
                  setOpen(!navOpen);
                }}
                className="text-white border-amber-50 border rounded py-2 px-2"
              >
                <Bars3Icon className=" h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => {
                  setOpen(!navOpen);
                }}
                className="text-white"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
