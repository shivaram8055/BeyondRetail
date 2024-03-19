import React, { useState } from "react";
import ProductDetails from "./ProductDetails";

const SliderComp = ({ productImg, mrp, title }) => {
  return (
    <div className="p-4 h-1 w-fit md:h-20 md:w-64 hover:scale-101">
      <div className="flex justify-center flex-col border w-62 h-440cont rounded-xl p-8 shadow-lg items-stretch">
        <div>
          <img className="md:h-28 w-fit" src={productImg} alt="product Img" />
        </div>
        <div className="flex flex-col p-1">
          <p
            className="text-base font-semibold line-clamp-2 cursor-pointer"
            onClick={handleProductClick}
          >
            {title}
          </p>
          <span className="text-sm text-gray-500">{mrp}</span>
        </div>
      </div>
    </div>
  );
};

export default SliderComp;
