import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface SideBarProps {
  savedColors: string[];
}

const SideBar: React.FC<SideBarProps> = ({ savedColors }) => {
  const copyToClipboard = (color: string) => {
    navigator.clipboard
      .writeText(color)
      .then(() => {
        toast.success(`Color ${color} copied to clipboard`, {
          style: {
            backgroundColor: "#000", // black background
            color: "#fff", // white font
            borderRadius: "8px", // rounded edges
          },
        });
      })
      .catch((err) => {
        console.error("Unable to copy color to clipboard", err);
        toast.error("Failed to copy color to clipboard", {
          style: {
            backgroundColor: "#000", // black background
            color: "#fff", // white font
            borderRadius: "8px", // rounded edges
          },
        });
      });
  };

  return (
    <div className="sidebar  flex flex-col w-64 bg-white border-t p-3 border-[#ececec]">
      <div className="sidebar-nav flex items-center justify-between">
        <p className="text-black font-bold">Library</p>
        <div className="group relative hover:bg-black-light inline-block p-2 pl-4 pr-4 cursor-pointer rounded-md">
          <FontAwesomeIcon icon={faPlus} className="text-[#222]" />
          <span className="w-max hidden group-hover:block absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded-md">
            Add
          </span>
        </div>
      </div>
      <div className="flex flex-col sidebar-content mt-5 gap-1">
        {savedColors.map((color, index) => (
          <div
            key={index}
            className="color-rectangle flex justify-center items-center rounded-md cursor-pointer"
            style={{
              backgroundColor: color,
              height: "20px",
              width: "auto",
              padding: "15px",
            }}
            onClick={() => copyToClipboard(color)}
          >
            <p className="font-semibold">{color}</p>
          </div>
        ))}
        {savedColors.length === 0 && (
          <p className="text-md text-[#7d7c83]">
            Your saved color schemes will appear here
          </p>
        )}
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default SideBar;
