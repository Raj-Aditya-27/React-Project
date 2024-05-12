import React from "react";
import { IoIosHome, IoIosNotifications, IoIosWallet } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { BiSolidConversation } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";

function Sidebar() {
  return (
    <div className="bg-white text-black rounded h-[90%] select-none flex flex-col justify-between items-start px-4 py-6">
      <div className="h-[60%]  ">
        <ul className="flex flex-col justify-between h-full">
          <li>
            <IoIosHome />
            Home
          </li>
          <li>
            <IoIosNotifications /> Notifications
          </li>
          <li>
            <FaShoppingBag />
            Shop
          </li>
          <li>
            <BiSolidConversation />
            Conversation
          </li>
          <li>
            <IoIosWallet />
            Wallet
          </li>
          <li>
            <MdSubscriptions />
            Subscription
          </li>
          <li>
            <RiAccountCircleFill />
            My Profile
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-2 cursor-pointer"><IoLogOut/>Logout</div>
    </div>
  );
}

export default Sidebar;
