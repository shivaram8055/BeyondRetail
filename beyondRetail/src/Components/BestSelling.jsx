import React from "react";
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
