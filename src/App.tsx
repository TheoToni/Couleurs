import React from "react";
import ColorfulDiv from "../src/components/ColorfulDiv";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from "./components/Navigation";

const App: React.FC = () => {
  const divHeight = window.innerHeight / 2;

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navigation></Navigation>
      <div className="toolbox bg-white p-5 flex items-center justify-between">
        <div className="leftToolbox">
          <p className="text-md text-[#7d7c83]">
            Press the space bar to generate color palettes!
          </p>
        </div>
        <div className="rightToolbox">
          <div className="group relative hover:bg-black-light inline-block p-2 pl-4 pr-4 cursor-pointer rounded-md">
            <FontAwesomeIcon icon={faBars} className="text-[#222]" />
            <span className="hidden w-max group-hover:block absolute bottom-8 mb-2 left-1/3 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded-md">
              Saved palettes
            </span>
          </div>
        </div>
      </div>
      <div className="flex">
        <ColorfulDiv height={divHeight} />
        <ColorfulDiv height={divHeight} />
        <ColorfulDiv height={divHeight} />
        <ColorfulDiv height={divHeight} />
        <ColorfulDiv height={divHeight} />
      </div>
    </div>
  );
};

export default App;
