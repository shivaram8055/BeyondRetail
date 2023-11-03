import React from "react";
import SliderComp from "./SliderComp";
import airpods from "../assets/MTJV3.jpeg";
import homepod from "../assets/homepod.jpeg";
import homepodmini from "../assets/homepodmini.jpeg";
import samsungs23ultra from "../assets/s23ultra.avif";
import buds from "../assets/buds.avif";
const productData = [
  {
    productImg: homepod,
    mrp: "MRP ₹32900.00 (Incl. of all taxes)",
    title: "HomePod - Midnight",
  },
  {
    productImg: homepodmini,
    mrp: "MRP ₹10900.00 (Incl. of all taxes)",
    title: "HomePod mini - Orange",
  },
  {
    productImg: airpods,
    mrp: "MRP ₹24900.00 (Incl. of all taxes)",
    title: "AirPods Pro (2nd generation) with MagSafe Charging Case (USB‑C)",
  },
  {
    productImg: samsungs23ultra,
    mrp: "MRP ₹24900.00 (Incl. of all taxes)",
    title: "AirPods Pro (2nd generation) with MagSafe Charging Case (USB‑C)",
  },
  {
    productImg: buds,
    mrp: "MRP ₹24900.00 (Incl. of all taxes)",
    title: "AirPods Pro (2nd generation) with MagSafe Charging Case (USB‑C)",
  },
];

export default function App() {
  return (
    <div className="md:px-navbarPadX md:py-10 px-4 py-4">
      <div className="flex flex-col md:gap-3 gap-3">
        <div className="flex items-center md:gap-2">
          <div className=" h-5 md:h-7 w-2 bg-teal-300"></div>
          <div className="md:text-base text-xs">This Month</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="md:text-2xl text-base">Best Selling Products</div>
          <div className="md:text-sm text-xs bg-teal-300 p-1 md:p-2 rounded">
            View All
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-80 md:flex-row md:gap-0 p-10">
        {productData.map((product, index) => (
          <SliderComp
            key={index}
            productImg={product.productImg}
            mrp={product.mrp}
            title={product.title}
          />
        ))}
      </div>
    </div>
  );
}
