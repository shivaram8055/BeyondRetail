import React, { useState } from "react";
import Item from "./Item";

import mobileData from "../Data/mobile_data.json";
import laptopData from "../Data/laptops_data.json";
import earphonesData from "../Data/earphones_data.json";
import cameraData from "../Data/camera_data.json";
import gammingData from "../Data/gamming_data.json";

const ProductPage = () => {
  const categories = ["Mobiles", "Laptops", "Earphones", "Cameras", "Gaming"];
  const [selectedCategory, setSelectedCategory] = useState("Mobiles");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const getCategoryData = () => {
    switch (selectedCategory) {
      case "Mobiles":
        return mobileData;
      case "Laptops":
        return laptopData;
      case "Earphones":
        return earphonesData;
      case "Cameras":
        return cameraData;
      case "Gaming":
        return gammingData;
      default:
        return [];
    }
  };

  const products = getCategoryData();

  return (
    <>
      <h1 className="px-36 text-xl font-bold py-6">Products Available:</h1>
      <div className="flex justify-center my-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`mx-2 px-4 py-2 rounded ${
              selectedCategory === category
                ? "bg-teal-400 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap px-navbarPadX">
        {products.map((item, index) => (
          <Item
            title={item.title}
            itemImg={item.itemImg}
            price={item.price}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default ProductPage;
