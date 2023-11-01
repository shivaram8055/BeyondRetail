import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const NavBar = () => {
  return (
    <>
      <div className="flex px-navbarPadX py-navbarPadY">
        <div className="flex">
          <div className="pr-190px">BEYONDRETAIL</div>
          <ul className="flex">
            <li>
              <a href="#" className="pr-48px">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="pr-48px">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="pr-48px">
                About
              </a>
            </li>
            <li>
              <a href="#" className="pr-148px">
                SignUp
              </a>
            </li>
          </ul>
        </div>
        <div className="flex">
          <div className=" bg-slate-300 text-sm px-20px py-7px">
            What are you looking for?{<SearchIcon />}
          </div>
          <div className="flex pl-24px">
            <ul className="flex">
              <li className="pr-16px">
                <FavoriteBorderOutlinedIcon />
              </li>
              <li>
                <ShoppingCartOutlinedIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
