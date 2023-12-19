import React from "react";

import Item from "./Item";

import mobileData from "../Data/earphones_data.json";

const ProductPage = () => {
  return (
    <>
      <div className="flex flex-wrap px-navbarPadX">
        {mobileData.map((item, index) => {
          return (
            <Item
              title={item.title}
              itemImg={item.itemImg}
              price={item.price}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductPage;
