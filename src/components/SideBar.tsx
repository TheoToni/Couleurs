import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Use the props interface in the functional component
function SideBar() {
  return (
    <div
      className={`sidebar flex flex-col w-64 bg-white border-t p-3 border-[#ececec] 
      }`}
    >
      <div className="sidebarnav flex items-center justify-between">
        <p className="text-black font-bold">Library</p>
        <div className="group relative hover:bg-black-light inline-block p-2 pl-4 pr-4 cursor-pointer rounded-md">
          <FontAwesomeIcon icon={faPlus} className="text-[#222]" />
          <span className="w-max hidden group-hover:block absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded-md">
            Add
          </span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
