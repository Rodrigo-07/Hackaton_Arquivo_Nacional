import React from "react";

export default function Tabs({ tabs, selectedTab, setSelectedTab }) {
  // No need for activeTab state in Tabs component

  // Function to change the active tab
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex justify-center mb-8">
      <div className="md:w-2/4 w-3/4">
        <div className="flex flex-wrap align-middle p-1 list-none rounded-lg bg-blue-gray-50/60 justify-center items-center ">
          {tabs.map((tab) => (
            <li key={tab} className="flex-auto mr-10 text-center">
              <a
                className={`flex items-center justify-center w-full py-1 mb-0 border-0 rounded-lg cursor-pointer transition-colors duration-300 ease-in-out sm:text-xl text-base ${
                  selectedTab === tab
                    ? "bg-main-red text-white"
                    : "bg-inherit hover:bg-main-red hover:text-white"
                }`}
                onClick={() => handleTabClick(tab)}
                role="tab"
                aria-selected={selectedTab === tab ? "true" : "false"}
              >
                <span className="ml-1">{tab}</span>
              </a>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
