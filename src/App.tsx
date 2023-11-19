import React, { useState } from "react";
import ColorfulDiv from "../src/components/ColorfulDiv";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from "./components/Navigation";
import SideBar from "./components/SideBar";

const App: React.FC = () => {
  // Add state to toggle the sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // Function to toggle the sidebar state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navigation />
      <div className="toolbox bg-white p-2 pl-10 pr-10 flex items-center justify-between">
        <div className="leftToolbox">
          <p className="text-md text-[#7d7c83]">
            Press the space bar to generate color palettes!
          </p>
        </div>
        <div className="rightToolbox">
          {/* Toggle sidebar button */}
          <div
            className="group relative hover:bg-black-light inline-block p-2 pl-4 pr-4 cursor-pointer rounded-md"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faBars} className="text-[#222]" />
            <span className="hidden w-max group-hover:block absolute bottom-8 mb-2 left-1/3 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded-md">
              Saved palettes
            </span>
          </div>
        </div>
      </div>
      <div className="flex colordivwrapper flex-1">
        {/* Pass isSidebarOpen as a prop to the Sidebar component */}
        <ColorfulDiv />
        <ColorfulDiv />
        <ColorfulDiv />
        <ColorfulDiv />
        <ColorfulDiv />
        {isSidebarOpen && <SideBar />}
      </div>
    </div>
  );
};

export default App;
