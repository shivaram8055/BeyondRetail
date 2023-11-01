import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const NavBar = () => {
  return (
    <>
      <div className="h-48px bg-black w-full text-white text-xs p-4 flex items-center justify-center">
        <div>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </div>
        <button className="pl-1 hover:underline font-bold">ShopNow</button>
      </div>
      <div className="flex justify-between px-navbarPadX py-navbarPadY">
        <div>LOGO</div>
        <div>
          <div className="flex justify-between">
            <Link>Home</Link>
            <Link>Contact</Link>
            <Link>About</Link>
            <Link>SignUp</Link>
          </div>
        </div>
        <div className="flex">
          <div>
            <SearchIcon />
          </div>
          <div>
            <FavoriteBorderIcon />
            <ShoppingCartOutlinedIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
