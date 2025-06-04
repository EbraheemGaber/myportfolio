import Link from "next/link";
import React from "react";

const Overlay = ({ links }) => {
  return (
    <div className="flex    items-center  flex-col ">
      {links.map((link, index) => (
        <li className=" py-2  " key={index}>
          <Link className="text-white py-4  " href={link.path}>
            {link.title}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Overlay;
