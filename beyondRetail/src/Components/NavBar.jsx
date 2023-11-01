import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="h-48px bg-black w-full text-white text-xs p-4 flex items-center justify-center">
        <div>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </div>
        <button className="pl-1 hover:underline font-bold">
          ShopNow <ArrowForwardIosOutlinedIcon className="p-1" />
        </button>
      </div>
      <div className="flex justify-between px-navbarPadX py-navbarPadY">
        <div>LOGO</div>
        <div>
          <nav className="flex justify-between gap-8">
            <a href="">Home</a>
            <a href="">Contact</a>
            <a href="">About</a>
            <a href="">SignUp</a>
          </nav>
        </div>
        <div className="flex g-10">
          <SearchIcon />
          <div className="flex justify-between g-8">
            <FavoriteBorderIcon />
            <ShoppingCartOutlinedIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
