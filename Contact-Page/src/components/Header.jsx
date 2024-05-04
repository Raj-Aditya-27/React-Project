import React from "react";

function Header() {
  return (
    <>
      <nav className="flex   justify-between items-center w-screen sm:px-14 md:px-16 px-2 h-[10vh]">
        <img
          src="../../public/images/logo.png"
          alt="logo"
          className="w-14 shadow-lg shadow-gray-500-bottom rounded-full"
        />
        <ul className="flex justify-around sm:justify-evenly  md:justify-around  w-3/5 items-center sm:w-1/2 md:w-1/4 md:mr-44    ">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
