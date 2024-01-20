import React, { useState } from "react";
import ColorfulDiv from "../src/components/ColorfulDiv";
import {
  faBars,
  faRedo,
  faShareAlt,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from "./components/Navigation";
import SideBar from "./components/SideBar";
import { motion } from "framer-motion";

const App: React.FC = () => {
  // Add state to toggle the sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [amountOfColors, setamountOfColors] = useState<number>(5);
  const [savedColors, setsavedColors] = useState<string[]>([]);

  // Function to toggle the sidebar state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen overflow-auto">
      <Navigation />
      <div className="toolbox bg-white p-2 pl-10 pr-10 flex items-center justify-end">
        <div className="leftToolbox mr-auto">
          <p className="hidden md:flex text-md text-[#7d7c83]">
            Press the space bar to generate color palettes!
          </p>
        </div>
        <div className="group relative hover:bg-black-light inline-block p-2 pl-4 pr-4 cursor-pointer rounded-md">
          <FontAwesomeIcon icon={faUndo} className="text-[#222]" />
          <span className="w-max hidden group-hover:block absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded-md">
            Undo
          </span>
        </div>
        <div className="group relative hover:bg-black-light inline-block p-2 pl-4 pr-4 cursor-pointer rounded-md">
          <FontAwesomeIcon icon={faRedo} className="text-[#222]" />
          <span className="w-max hidden group-hover:block absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded-md">
            Redo
          </span>
        </div>
        <div className="group relative hover:bg-black-light inline-block p-2 pl-4 pr-4 cursor-pointer rounded-md">
          <FontAwesomeIcon icon={faShareAlt} className="text-[#222]" />
          <span className="w-max hidden group-hover:block absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded-md">
            Export
          </span>
        </div>
        <div
          className=" group relative hover:bg-black-light inline-block p-2 pl-4 pr-4 cursor-pointer rounded-md"
          onClick={toggleSidebar}
        >
          <motion.div animate={{ rotate: isSidebarOpen ? 90 : 0 }}>
            <FontAwesomeIcon icon={faBars} className="text-[#222]" />
          </motion.div>
          <span className="hidden w-max group-hover:block absolute bottom-full mb-2 left-1/3 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded-md">
            Saved palettes
          </span>
        </div>
      </div>
      <div className="flex md:flex-row flex-col colordivwrapper flex-1  ">
        <ColorfulDiv
          amountOfColors={amountOfColors}
          setAmountOfColors={setamountOfColors}
          setsavedColors={setsavedColors}
          savedColors={savedColors}
        />
        <ColorfulDiv
          amountOfColors={amountOfColors}
          setAmountOfColors={setamountOfColors}
          setsavedColors={setsavedColors}
          savedColors={savedColors}
        />
        <ColorfulDiv
          amountOfColors={amountOfColors}
          setAmountOfColors={setamountOfColors}
          setsavedColors={setsavedColors}
          savedColors={savedColors}
        />
        <ColorfulDiv
          amountOfColors={amountOfColors}
          setAmountOfColors={setamountOfColors}
          setsavedColors={setsavedColors}
          savedColors={savedColors}
        />
        <ColorfulDiv
          amountOfColors={amountOfColors}
          setAmountOfColors={setamountOfColors}
          setsavedColors={setsavedColors}
          savedColors={savedColors}
        />
        {isSidebarOpen && <SideBar savedColors={savedColors} />}
      </div>
    </div>
  );
};

export default App;
