import React, { useState } from "react";
import Item from "./Item";
import ChevronRightTwoToneIcon from "@mui/icons-material/ChevronRightTwoTone";

import mobileData from "../Data/mobile_data.json";
import laptopData from "../Data/laptops_data.json";
import earphonesData from "../Data/earphones_data.json";
import cameraData from "../Data/camera_data.json";
import gammingData from "../Data/gamming_data.json";

const ProductPage = () => {
  const categories = ["Mobiles", "Laptops", "Earphones", "Cameras", "Gaming"];
  const [selectedCategory, setSelectedCategory] = useState("Mobiles");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    // You can add logic here to handle the search
    console.log("Search query:", searchQuery);
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

  const filterProductsBySearchQuery = (products) => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const products = getCategoryData();
  const filteredProducts = filterProductsBySearchQuery(products);

  return (
    <>
      <div className="text-sm px-navbarPadX pt-10 ">
        Home {<ChevronRightTwoToneIcon />} {location.pathname.slice(1)}
      </div>
      <h1 className="px-navbarPadX text-xl font-bold py-6">
        Products Available:
      </h1>

      <div className="flex justify-center my-8">
        <div className="w-full md:w-3/4 lg:w-1/2 flex items-center">
          <input
            type="text"
            className="flex-1 border text-sm p-2"
            placeholder="Search products"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button
            className="ml-2 bg-gray-200 text-gray-800 hover:bg-teal-400 hover:text-white px-4 py-2 rounded"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex justify-center my-6 items-baseline">
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

      <div className="grid grid-cols-5 justify-center px-navbarPadX gap-5 py-6">
        {filteredProducts.map((item, index) => (
          <Item
            title={item.title}
            itemImg={item.itemImg}
            price={item.price}
            specifications={item.specifications}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default ProductPage;
