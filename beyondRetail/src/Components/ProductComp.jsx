import React from "react";
// import ColorLabel from "./ColorLabel";
// const ifColor = false;
import airpods from "../assets/MTJV3.jpeg";

// const colors = [grey, yellow, orange, white];

const ProductComp = ({ productImg, mrp, title, header, hasColor, colors }) => {
  return (
    <div className="p-4 h-4 w-40 text-sm md:w-60 md:text-base">
      <div className="flex items-center justify-center flex-col border w-200 h-440cont rounded-xl p-2 shadow-2xl hover:scale-101">
        <div className="">
          <img className="" src={airpods} alt="product Img" />
        </div>
        <div className="flex flex-col p-2 md:p-4 w-fit gap-1 md:gap-2">
          <p className="text-xs font-semi-bold line-clamp-2 md:text-base">
            {title}
          </p>
          <span className="text-10px text-gray-500 md:text-sm">{mrp}</span>
          <div className="bg-black text-white w-full rounded-full flex justify-center text-10px hover:bg-slate-300 hover:text-black md:p-2 md:text-xs">
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComp;
