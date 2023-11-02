import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="h-48px bg-black w-full text-white text-xs p-4 flex items-center justify-center absolute top-0 invisible md:visible">
        <div>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </div>
        <button className="pl-1 hover:underline font-bold">ShopNow</button>
      </div>
      <div className="flex justify-between px-5 py-4 md:px-navbarPadX py-navbarPadY boder-bottom overflow-hidden border-b-2 md:pt-16">
        <div className="font-bold text-sm md:text-xl">BEYONDRETAIL</div>
        <div>
          <nav className="flex justify-between md:gap-8 hidden md:flex">
            <a href="">Home</a>
            <a href="">Contact</a>
            <a href="">About</a>
            <a href="">SignUp</a>
          </nav>
        </div>
        <div className="flex gap-4 md:gap-6 items-center">
          <div>
            <SearchIcon />
          </div>
          <div className="hidden md:block">
            <FavoriteBorderIcon />
          </div>
          <div>
            <AccountCircleOutlinedIcon />
          </div>
          <div>
            <ShoppingCartOutlinedIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
