import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const butttons = active
    ? "text-white border-b border-purple-500"
    : "text-ADB7BE";
  return (
    <div>
      <button className="px-2" onClick={selectTab}>
        <p className={`${butttons} cursor-pointer  font-semibold`}>
          {children}
        </p>
      </button>
    </div>
  );
};

export default TabButton;
