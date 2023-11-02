import React from "react";
import NavBar from "./Components/NavBar";
import ProductComp from "./Components/ProductComp";
import airpods from "./assets/MTJV3.jpeg";
import NewArrivals from "./Components/NewArrivals";
import Categories from "./Components/Categories";

const App = () => {
  return (
    <>
      {/* <ProductComp
        productImg={airpods}
        mrp={"₹24900.00"}
        title={
          "AirPods Pro (2nd generation) with MagSafe Charging Case (USB‑C)"
        }
      /> */}
      <Categories />

      {/* <NavBar />
      <Footer /> */}
    </>
  );
};

export default App;
