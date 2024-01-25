// Item.jsx
import React, { useState } from "react";
import ProductDetails from "./ProductDetails";

const Item = ({ title, price, itemImg }) => {
  const specifications = [
    "More innovation, less footprint – Galaxy S23 Ultra's striking symmetrical design returns with one major difference: recycled and eco-conscious materials. From the metal frame to the glass finish, it's polished with fresh new colors inspired by nature.",
    "Note's signature tool comes built in - The built-in S Pen keeps the legacy of Note alive. Plus, it helps you ditch the dependency on notebooks, making sketches and jotting notes effortless and eco-friendly.",
    "Low light. Camera. Action - A Pro-grade Camera grabs brighter photos and video, dusk to dawn. The intelligent pixel sensor adapts to low light with Nightography and the camera lens tones down flare for clearer captures.",
  ];

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
        className={`flex pt-10 flex-col gap-2 product-item hover:shadow-md p-4 rounded-xl overflow-hidden ${
          showProductDetails ? "opacity-50 pointer-events-none" : ""
        }`}
        onClick={handleProductClick}
      >
        <div className="container h-72 w-64 rounded-md border-2 flex justify-center items-center overflow-hidden">
          <img src={itemImg} alt={title} className="item-image h-48" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-lg text-gray-500 line-clamp-1 w-60 cursor-pointer">
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
