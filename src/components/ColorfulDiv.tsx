import React, { useState, useEffect } from "react";
import {
  faTimes,
  faHeart,
  faLock,
  faCopy,
  faArrowsAlt,
  faTh,
  faAdjust,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ColorfulDivProps = {
  amountOfColors: number;
  setAmountOfColors: React.Dispatch<React.SetStateAction<number>>;
  savedColors: string[];
  setsavedColors: React.Dispatch<React.SetStateAction<string[]>>;
};

const ColorfulDiv: React.FC<ColorfulDivProps> = ({
  amountOfColors,
  setAmountOfColors,
  savedColors,
  setsavedColors,
}) => {
  const [color, setColor] = useState(getRandomColor());
  const [locked, setLocked] = useState(false);
  const [removed, setRemoved] = useState(false);
  const [showHexPopup, setShowHexPopup] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space" && !locked) {
        setColor(getRandomColor());
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [locked]);

  function getRandomColor(): string {
    const letters = "0123456789ABCDEF";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    return newColor;
  }

  const handleColorClick = () => {
    if (!locked) {
      navigator.clipboard.writeText(color);
      setShowHexPopup(true);
      setTimeout(() => {
        setShowHexPopup(false);
      }, 2000);
    }
  };

  const handleSaveColor = () => {
    // Check if the color already exists in the state
    if (!savedColors.includes(color)) {
      // If it doesn't exist, add it to the state
      setsavedColors((prevColors) => [...prevColors, color]);

      // Show the saved color hex popup
      setShowHexPopup(true);

      // Hide the popup after 2 seconds (adjust as needed)
      setTimeout(() => {
        setShowHexPopup(false);
      }, 2000);
    }
  };

  const toggleLock = () => {
    setLocked(!locked);
  };

  const removeComponent = () => {
    if (amountOfColors > 2) {
      setAmountOfColors(amountOfColors - 1);
      setRemoved(true);
    }
  };

  if (removed) {
    return null; // Render nothing if the component is removed
  }

  return (
    <div
      className={`gap-2 ${locked ? "locked" : ""}`}
      style={{
        backgroundColor: color,
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        className="group relative hover:bg-black-light inline-block p-2 pl-4 pr-4 cursor-pointer rounded-md"
        onClick={toggleLock}
      >
        <FontAwesomeIcon
          icon={locked ? faLock : faLockOpen}
          className="text-[#222]"
        />
        <span className=" w-max hidden group-hover:block absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded-md">
          Toggle lock
        </span>
        <span
          className={`w-max ${
            showHexPopup ? "block" : "hidden"
          } fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2 py-1 text-xs text-white bg-black rounded-md`}
        >
          Copied: {color}
        </span>
      </div>

      <div className="group relative hover:bg-black-light inline-block p-2 pl-4 pr-4 cursor-pointer rounded-md">
        <FontAwesomeIcon
          onClick={handleColorClick}
          icon={faCopy}
          className="text-[#222]"
        />
        <span className=" w-max hidden group-hover:block absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded-md">
          Copy hex
        </span>
      </div>

      <div className="group relative hover:bg-black-light inline-block p-2 pl-4 pr-4 cursor-pointer rounded-md">
        <FontAwesomeIcon
          onClick={removeComponent}
          icon={faTimes}
          className="text-[#222]"
        />
        <span className="hidden w-max group-hover:block absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded-md">
          Remove color
        </span>
      </div>

      <div className="group relative hover:bg-black-light inline-block p-2 pl-4 pr-4 cursor-pointer rounded-md">
        <FontAwesomeIcon
          icon={faHeart}
          onClick={handleSaveColor}
          className="text-[#222]"
        />
        <span className=" w-max hidden group-hover:block absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded-md">
          Save color
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
