import React from "react";
import menu_img from "../assets/menu.png";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import upload from "../assets/upload.png";
import more from "../assets/more.png";
import notification from "../assets/notification.png";
import profile from "../assets/jack.png";
import { Link } from "react-router-dom";

const Nav = ({ setSidebar }) => {
  return (
    <div className="fixed left-0 top-0 z-50 w-full flex flex-row p-2 justify-between  items-center shadow-md">
      <div className="flex items-center gap-2">
        <img
          onClick={() => {
            setSidebar((prev) => (prev === false ? true : false));
          }}
          src={menu_img}
          alt=""
          className="size-7 cursor-pointer hidden lg:block"
        />
        <Link to='/'><img src={logo} alt="" className="w-32 h-10" /></Link>
      </div>

      <div className='flex flex-row justify-between gap-8 lg:gap-16'>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            className="border border-gray-400 px-2 py-1 rounded-2xl"
          />
          <img src={search} alt="" className="size-6 cursor-pointer" />
        </div>

        <div className="flex items-center gap-1">
          <img src={upload} alt="" className="size-8" />
          <img src={more} alt="" className="size-8" />
          <img src={notification} alt="" className="size-8" />
          <img
            src={profile}
            alt=""
            className="size-11 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
