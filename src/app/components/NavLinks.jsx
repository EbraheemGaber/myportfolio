import Link from "next/link";
import React from "react";

const NavLinks = ({ href, title }) => {
  console.log("NavLinks href:", href);
  return (
    <div>
      <Link href={href} className="pr-4 py-2 pl-3  text-white block">
        {title}
      </Link>
    </div>
  );
};

export default NavLinks;
