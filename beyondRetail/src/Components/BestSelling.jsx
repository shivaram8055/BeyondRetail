import React from "react";
<<<<<<< HEAD
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
=======
import ProductComp from "./ProductComp";
import airpods from "../assets/MTJV3.jpeg";

const bestSellingData = {
  iphone13: {
    image: airpods,
    title: "Iphone-13(64GB)",
    price: "₹34900.00",
  },
  iphone14: {
    image: airpods,
    title: "Iphone-14(64GB)",
    price: "₹44900.00",
  },
  iphone15: {
    image: airpods,
    title: "Iphone-15(64GB)",
    price: "₹54900.00",
  },
  iphone16: {
    image: airpods,
    title: "Iphone-15(64GB)",
    price: "₹54900.00",
  },
  iphone17: {
    image: airpods,
    title: "Iphone-15(64GB)",
    price: "₹54900.00",
  },
};

const BestSelling = () => {
  return (
    <>
      <div className="flex flex-col gap-5py-10">
        <div className="flex pl-5">
          <div
            style={{
              width: 20,
              height: 30,
              background: "#115e59",
              borderRadius: 4,
            }}
          />
          <div
            className="text-teal-800 text-lg font-extrabold"
            style={{
              height: 40,
            }}
          >
            Best Selling Products
          </div>
        </div>
        <div className="flex" style={{ left: 60 }}>
          {Object.keys(bestSellingData).map((key) => {
            const item = bestSellingData[key];
            return (
              <ProductComp
                key={key}
                image={item.image}
                title={item.title}
                mrp={item.price}
              />
            );
          })}
        </div>
      </div>

      {/* <NavBar />
      <Footer /> */}
    </>
  );
};

export default BestSelling;
>>>>>>> 17a037bec2cd0a3ce93f0823e798618631422ba8
