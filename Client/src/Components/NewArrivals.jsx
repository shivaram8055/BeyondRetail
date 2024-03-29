import React from "react";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  return (
    <div className="flex flex-col px-8 py-9 gap-4 md:px-navbarPadX ">
      <div className="flex items-center gap-2">
        <div className="bg-teal-400 h-4 w-1 md:h-6 md:w-2"></div>
        <div className="text-xs md:text-sm text-teal-700">Featured</div>
      </div>
      <div className="md:text-2xl">New Arrivals</div>
      <div className="flex md:gap-4 gap-2 flex-col md:flex-row text-slate-200 w-[90vw] pr-5">
        <div className="h-40 w-full md:h-600px md:w-500px bg-phone flex md:flex-col md:justify-end md:p-6 md:gap-1 flex-col bg-cover p-4">
          {" "}
          <h1 className="text-base">Samsung Galaxy S23 Ultra</h1>
          <h3 className="text-xs">The new Galaxy Watch6-Classic</h3>
          <Link to="/products" className="text-sm underline">
            Shop Now
          </Link>
        </div>
        <div className="flex md:gap-4 gap-2 md:flex-col flex-col">
          <div className="md:h-292px md:w-700px h-40 w-full bg-s23series bg-cover flex md:flex-col md:justify-end md:p-6 md:gap-1 flex-col p-4">
            {" "}
            <h1 className="text-base">Galaxy Watches</h1>
            <h3 className="text-xs">The new Galaxy Watch6-Classic</h3>
            <Link to="/products" className="text-sm underline">
              Shop Now
            </Link>
          </div>
          <div className="flex flex-col md:gap-4 gap-2 md:flex-row">
            <div className="bg-laptops bg-cover bg-right md:w-342px md:h-292px h-40 w-full flex flex-col md:justify-end md:p-6 md:gap-1 p-4">
              <h1 className="text-base">Galaxy Watches</h1>
              <h3 className="text-xs">The new Galaxy Watch6-Classic</h3>
              <Link to="/products" className="text-sm underline">
                Shop Now
              </Link>
            </div>
            <div className="bg-buds bg-cover bg-bottom md:w-342px md:h-292px h-40 w-full flex flex-col md:justify-end md:p-6 md:gap-1 p-4">
              <h1 className="text-base">Galaxy Buds</h1>
              <h3 className="text-xs">The new Galaxy Watch6-Classic</h3>
              <Link to="/products" className="text-sm underline">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
