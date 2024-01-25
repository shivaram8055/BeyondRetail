import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, useLocation } from "react-router-dom";
import { teal } from "@mui/material/colors";

const NavBar = () => {
  const location = useLocation();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const timeout = setTimeout(() => {
    setIsVisible(false);
  }, 5000);

  const handleSearchClick = () => {
    setIsSearchVisible(true);
  };

  const isLinkActive = (path) => location.pathname === path;

  return (
    <>
      <div className="h-48px bg-black w-full text-white text-xs p-4 flex items-center justify-center absolute top-0 invisible md:visible">
        <div>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </div>
        <Link to="products">
          <button className="pl-1 hover:underline font-bold">ShopNow</button>
        </Link>
      </div>
      <div className="flex justify-between px-5 md:px-navbarPadX py-navbarPadY border-b-2 md:pt-16">
        <div className="logoTitle font-bold text-md md:text-2xl">
          BEYONDRETAIL
        </div>
        <div>
          <nav className=" justify-between md:gap-8 hidden md:flex">
            <Link
              to={"/home" || ""}
              className={`hover:underline ${
                isLinkActive("/home") ? "text-teal-700 underline" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="contact"
              className={`hover:underline ${
                isLinkActive("/contact") ? "text-teal-700 underline" : ""
              }`}
            >
              Contact
            </Link>
            <Link
              to="products"
              className={`hover:underline ${
                isLinkActive("products") ? "text-teal-700 underline" : ""
              }`}
            >
              Products
            </Link>
            <Link
              to="signin"
              className={`hover:underline ${
                isLinkActive("/signin") ? "text-teal-700 underline" : ""
              }`}
            >
              SignIn
            </Link>

            {/* <a href="">Home</a>
            <a href="">Products</a>
            <a href="">AboutUs</a>
            <a href="">SignUp</a> */}
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
          <Link to="/checkout">
            <div>
              <ShoppingCartOutlinedIcon />
            </div>
          </Link>

          <div className="md:hidden">
            <AccountCircleOutlinedIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
