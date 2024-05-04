import React from "react";

function Header() {
  return (
    <nav className="flex  justify-around w-screen h-[72px] items-center">
      <div>
        <img src="../public/images/brand_logo.png" alt="logo" />
      </div>
      <ul className="flex border sm:w-[250px] md:w-[333px] h-[24px] justify-between">
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button className="w-[75px] h-[31px] bg-[#D01C28] text-white px-[2px] py-[6px]">
        Login
      </button>
    </nav>
  );
}

export default Header;
