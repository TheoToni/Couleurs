function Navigation() {
  return (
    <div className="wrapper flex justify-between pl-10 pr-10 bg-white border-b border-[#ececec] shadow-sm text-base text-black">
      <div className="left flex items-center p-2 gap-10 ">
        <a href="/">
          <img
            className="cursor-pointer w-10"
            src="../../logobig.png"
            alt="logo"
          />
        </a>
      </div>
      <div className="right flex items-center gap-10 ">
        <p className="cursor-pointer border-r border-[#ececec] pr-10 ">Tools</p>
        <p className="cursor-pointer">Sign in</p>
        <button className="bg-[#005CE6] text-white rounded-md font-semibold pb-1 pt-1 pl-2 pr-2">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Navigation;
