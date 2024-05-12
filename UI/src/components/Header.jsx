// Header.js

import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

function Header({ darkMode, handleToggle }) {
  return (
    <header className="flex items-center justify-between px-6 h-[13vh] font-semibold">
      <div className="w-1/5 bg-white rounded px-4 py-2 flex justify-between items-center">
        <div className="select-none">City</div>
        <div onClick={handleToggle}>
          {darkMode ? (
            <CiLight className="text-2xl cursor-pointer" />
          ) : (
            <MdDarkMode className="text-2xl cursor-pointer" />
          )}
        </div>
      </div>
      <div className="w-1/2 bg-white rounded px-4 py-2 flex justify-between gap-1">
        <div className="border w-[90%] flex justify-between items-center h-full px-2 rounded">
          <FaSearch className="cursor-pointer" />
          <input
            type="text"
            placeholder={"Search here..."}
            className="w-[95%] px-2 focus:outline-none"
          />
        </div>
        <div className="flex justify-center items-center gap-2 select-none">
          <IoFilterSharp className="cursor-pointer" />
          Filters
        </div>
      </div>
      <div className="w-1/5 bg-white rounded px-4 py-2 text-center select-none cursor-pointer">
        Become a seller
      </div>
    </header>
  );
}

export default Header;
