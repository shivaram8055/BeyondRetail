import React from "react";

const Item = ({ title, price, itemImg }) => {
  return (
    <>
      <div className="flex pt-10 flex-col gap-2 product-item hover:shadow-md p-4 rounded-xl overflow-hidden">
        <div className="container h-72 w-64 rounded-md border-2 flex justify-center items-center overflow-hidden ">
          <img src={itemImg} alt={title} className="item-image h-48" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-lg text-gray-500 line-clamp-1 w-60">{title}</div>
          <div className="text-xl font-medium ">{price}</div>
        </div>
      </div>
    </>
  );
};

export default Item;
