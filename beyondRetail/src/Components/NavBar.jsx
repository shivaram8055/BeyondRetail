import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { teal } from "@mui/material/colors";

const NavBar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setIsSearchVisible(true);
  };

  return (
    <>
      <div className="h-48px bg-black w-full text-white text-xs p-4 flex items-center justify-center absolute top-0 invisible md:visible">
        <div>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </div>
        <button className="pl-1 hover:underline font-bold">ShopNow</button>
      </div>
      <div className="flex justify-between px-5 md:px-navbarPadX py-navbarPadY border-b-2 md:pt-16">
        <div className="font-bold text-md md:text-2xl">BEYONDRETAIL</div>
        <div>
          <nav className=" justify-between md:gap-8 hidden md:flex">
            <Link
              to={"/" || "/Home"}
              className={`hover:underline ${
                location.pathname === "/" ? "text-teal-700 underline" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/Contact"
              className={`hover:underline ${
                location.pathname === "/Contact"
                  ? "text-teal-700 underline"
                  : ""
              }`}
            >
              Contact
            </Link>
            <Link
              to="/About"
              className={`hover:underline ${
                location.pathname === "/About" ? "text-teal-700 underline" : ""
              }`}
            >
              About
            </Link>
            <Link
              to="/SignUp"
              className={`hover:underline ${
                location.pathname === "/SignUp" ? "text-teal-700 underline" : ""
              }`}
            >
              SignUp
            </Link>
          </nav>
        </div>
        <div className="flex gap-4 md:gap-6 items-center">
          <div onClick={handleSearchClick}>
            {isSearchVisible ? (
              <input
                className="border text-sm p-1 px-2"
                type="text"
                placeholder="Looking for something"
                onBlur={() => setIsSearchVisible(false)}
              />
            ) : (
              <SearchIcon />
            )}
          </div>
          <div className="hidden md:block">
            <FavoriteBorderIcon />
          </div>
          <div>
            <ShoppingCartOutlinedIcon />
          </div>
          <div className="md:hidden">
            <AccountCircleOutlinedIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
