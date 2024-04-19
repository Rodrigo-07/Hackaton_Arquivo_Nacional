import React, { useState } from "react";

export default function Tabs() {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState("Classificação");

    // Function to change the active tab
    const handleTabClick = (tab) => {
        setActiveTab(tab);
        console.log(tab);
    };

    // List of tabs
    const tabs = ["Classificação", "Descrição"];

    return (
        <div className="w-full flex justify-center"> {/* Center the tabs container in the middle of the page */}
            <div className="w-2/4">
                <div className="flex flex-wrap align-middle p-1 list-none rounded-lg bg-blue-gray-50/60 justify-center items-center ">
                    {tabs.map((tab) => (
                        <li key={tab} className="flex-auto text-center">
                            <a
                                className={`flex items-center justify-center w-full px-0 py-1 mb-0 border-0 rounded-lg cursor-pointer  transition-colors duration-300 ease-in-out ${activeTab === tab
                                    ? "bg-red-600  text-white" // Active state: blue background with white text
                                    : "bg-inherit hover:bg-red-500 hover:bg-opacity-20 " // Inactive state: inherit background with hover effect
                                    }`}
                                onClick={() => handleTabClick(tab)}
                                role="tab"
                                aria-selected={activeTab === tab ? 'true' : 'false'}
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
