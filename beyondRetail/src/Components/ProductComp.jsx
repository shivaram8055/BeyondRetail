import React from "react";
// import Iphone from "../Images/iphone-card-40-iphone15prohero-202309.jpeg";
import { PriceChange } from "@mui/icons-material";

// iPhone 15 Pro &
const title = "iPhone 15 Pro Max";
const colors = ["#9BB5CE", "#5C5B57", "#F9E5C9", "#F5F5F0", "#505F4E"];
const price =
  "From ₹21483.00/mo. with instant savings§§ and No Cost EMI§ or ₹134900.00‡";

const ProductComp = ({ title, price, productImage }) => {
  return (
    <>
      <div className="md:w-1/4 p-6 rounded-lg shadow-xl hover:shadow-2xl hover:ease-in-out flex flex-col gap-5 border items-center justify-center">
        <div className="title text-xl line-clamp-2">{title}</div>
        <div className="flex flex-col items-center gap-4">
          <img src={productImage} alt="" className="h-52" />
          <div className="colors flex gap-1">
            {colors.map((item, index) => {
              return (
                <div
                  className="h-3 w-3 rounded-full cursor-pointer "
                  style={{ backgroundColor: item }}
                  key={index}
                ></div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-around">
          <div className="price text-xs line-clamp-2">{price}</div>
          <div className="p-1 px-4 text-md bg-teal-400 rounded-full cursor-pointer  ">
            Buy
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductComp;
