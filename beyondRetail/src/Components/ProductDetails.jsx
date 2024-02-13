// ProductDetails.jsx
import React from "react";
import { Close } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartSlice";

const ProductDetails = ({ title, price, itemImg, specifications, onClose }) => {
  const handleClose = () => {
    onClose && onClose();
  };
  const dispatch = useDispatch();

  return (
    <>
      {/* Backdrop to cover the entire screen when product details are visible */}
      <div
        className="fixed top-0 left-0 w-fit h-screen bg-white z-50 "
        onClick={handleClose}
      ></div>
      {/* Product details */}
      <div className="flex justify-around md:p-10 md:mx-80 h-fit w-fit items-center rounded-xl bg-white border relative flex-col md:flex-row p-5">
        <button
          className="absolute top-4 right-4 text-gray-500 text-2xl cursor-pointer"
          onClick={handleClose}
        >
          <Close />
        </button>
        <img
          src={itemImg}
          alt="product-image"
          className="p-4 md:h-72 md:m-4 h-36"
        />
        <div className="productDetails flex flex-col gap-4">
          <h1 className="font-bold text-lg">{title}</h1>
          <h2 className="text-md">Price: {price}</h2>
          <button
            className="border md:p-2 p-1 rounded-lg bg-teal-300 text-teal-900 md:w-1/4 hover:text-teal-50 hover:bg-teal-400"
            onClick={() => dispatch(addToCart({ title, price, itemImg }))}
          >
            Add to cart
          </button>
          <hr />
          <div>
            <h2 className="font-bold">Specifications:</h2>
            <ul className="ml-6 list-disc text-sm">
              {specifications.map((item, index) => (
                <li key={index} className="text-md">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <hr />
          <div className="delivery flex flex-col gap-4">
            <h1 className="font-bold">Delivery Details:</h1>
            <ul className="ml-6 flex gap-4 flex-wrap">
              <li className="border md:p-2 p-1 text-sm rounded-md border-teal-400">
                Free Delivery
              </li>
              <li className="border md:p-2 p-1 text-sm rounded-md border-teal-400">
                7 Days Replacement
              </li>
              <li className="border md:p-2 p-1 text-sm rounded-md border-teal-400">
                Top Brand
              </li>
              <li className="border md:p-2 p-1 text-sm rounded-md border-teal-400">
                1 year Warranty
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
