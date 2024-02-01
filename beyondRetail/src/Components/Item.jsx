// Item.jsx
import React, { useState } from "react";
import ProductDetails from "./ProductDetails";

const Item = ({ title, price, itemImg,specifications }) => {
  // const specifications=[
  //   "Nothing Phone",
  //   "\u20b945,999",
  //   "6.2 inches",
  //   "128GB",
  //   "8GB",
  //   "Dual 16MP + 20MP",
  //   "4000mAh"
  // ]

  const [showProductDetails, setShowProductDetails] = useState(false);

  const handleProductClick = () => {
    setShowProductDetails(true);
  };

  const handleCloseProductDetails = () => {
    setShowProductDetails(false);
  };

  return (
    <>
      <div
        className={`flex pt-10 flex-col gap-4 item-center justify-center hover:shadow-md p-4 rounded-xl overflow-hidden${
          showProductDetails ? "opacity-50 pointer-events-none" : ""
        }`}
        onClick={handleProductClick}
      >
        <div className="container h-fit w-fit p-6 rounded-md border-2 flex justify-center items-center overflow-hidden">
          <img src={itemImg} alt={title} className="item-image h-48  " />
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-lg text-gray-500 line-clamp-1 w-2/3 cursor-pointer">
            {title}
          </div>
          <div className="text-xl font-medium">{price}</div>
        </div>
      </div>{" "}
      {showProductDetails && (
        <div className="fixed top-0 left-0 bg-opacity-50 h-full flex items-center justify-center z-50 bg-black">
          <ProductDetails
            title={title}
            price={price}
            specifications={specifications}
            itemImg={itemImg}
            onClose={handleCloseProductDetails}
          />
        </div>
      )}
    </>
  );
};

export default Item;
