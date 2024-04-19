import React, { useState } from "react";

export default function Tabs({tabs}) {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState(tabs[0]);
    // Function to change the active tab
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };


    return (
        <div className="flex justify-center mb-8"> {/* Center the tabs container in the middle of the page */}
            <div className="md:w-2/4 w-3/4">
                <div className="flex flex-wrap align-middle p-1 list-none rounded-lg bg-blue-gray-50/60 justify-center items-center ">
                    {tabs.map((tab) => (
                        <li key={tab} className="flex-auto mr-10  text-center">
                            <a
                                className={`flex items-center justify-center w-full  py-1 mb-0 border-0 rounded-lg cursor-pointer transition-colors duration-300 ease-in-out  sm:text-xl text-base ${activeTab === tab
                                    ? "bg-main-red  text-white" // Active state: blue background with white text
                                    : "bg-inherit hover:bg-main-red hover:text-white" // Inactive state: inherit background with hover effect
                                    }`}
                                onClick={() => handleTabClick(tab)}
                                role="tab"
                                aria-selected={activeTab === tab ? 'true' : 'false'}
                            >
                                <span className="ml-1 ">{tab}</span>
                            </a>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    );
}
