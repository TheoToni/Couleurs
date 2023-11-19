import React, { useState, useEffect } from "react";
import {
  faTimes,
  faHeart,
  faLock,
  faCopy,
  faArrowsAlt,
  faTh,
  faAdjust,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ColorfulDiv: React.FC = ({}) => {
  const [color, setColor] = useState(getRandomColor());

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        setColor(getRandomColor());
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  function getRandomColor(): string {
    const letters = "0123456789ABCDEF";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    return newColor;
  }

  const handleColorClick = () => {
    navigator.clipboard.writeText(color);
  };

  return (
    <div
      className="gap-2 "
      style={{
        backgroundColor: color,

        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div className="group relative hover:bg-black-light inline-block p-2 pl-4 pr-4 cursor-pointer rounded-md">
        <FontAwesomeIcon icon={faTimes} className="text-[#222]" />
        <span className="hidden w-max group-hover:block absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded-md">
          Remove color
        </span>
      </div>

      <div className="group relative hover:bg-black-light inline-block p-2 pl-4 pr-4 cursor-pointer rounded-md">
        <FontAwesomeIcon icon={faHeart} className="text-[#222]" />
        <span className=" w-max hidden group-hover:block absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded-md">
          Save color
        </span>
      </div>
      <div className="group relative hover:bg-black-light inline-block p-2 pl-4 pr-4 cursor-pointer rounded-md">
        <FontAwesomeIcon icon={faLock} className="text-[#222]" />
        <span className=" w-max hidden group-hover:block absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded-md">
          Toggle lock
        </span>
      </div>
      <div className="group relative hover:bg-black-light inline-block p-2 pl-4 pr-4 cursor-pointer rounded-md">
        <FontAwesomeIcon icon={faCopy} className="text-[#222]" />
        <span className=" w-max hidden group-hover:block absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded-md">
          Copy hex
        </span>
      </div>
      <div className="group relative hover:bg-black-light inline-block p-2 pl-4 pr-4 cursor-pointer rounded-md">
        <FontAwesomeIcon icon={faArrowsAlt} className="text-[#222]" />
        <span className=" w-max hidden group-hover:block absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded-md">
          Drag
        </span>
      </div>
      <div className="group relative hover:bg-black-light inline-block p-2 pl-4 pr-4 cursor-pointer rounded-md">
        <FontAwesomeIcon icon={faTh} className="text-[#222]" />
        <span className=" w-max hidden group-hover:block absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded-md">
          View shades
        </span>
      </div>
      <div className="group relative hover:bg-black-light inline-block p-2 pl-4 pr-4 cursor-pointer rounded-md">
        <FontAwesomeIcon icon={faAdjust} className="text-[#222]" />
        <span className=" w-max hidden group-hover:block absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded-md">
          Check contrast
        </span>
      </div>
      <i className="icon3" />
      <i className="icon4" />
      <i className="icon5" />
      <i className="icon6" />
      <p
        className="text-white text-2xl font-semibold cursor-pointer hover:bg-black-light inline-block p-2 pl-4 pr-4 rounded-md "
        onClick={handleColorClick}
      >
        {color}
      </p>
    </div>
  );
};

export default ColorfulDiv;
