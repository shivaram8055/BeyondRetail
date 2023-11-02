import React from "react";
import NavBar from "./Components/NavBar";
import ProductComp from "./Components/ProductComp";
const App = () => {
  return (
    <>
      <ProductComp
        productImg={airpods}
        mrp={"₹24900.00"}
        title={
          "AirPods Pro (2nd generation) with MagSafe Charging Case (USB‑C)"
        }
      />

      {/* <NavBar />
      <Footer /> */}
    </>
  );
};

export default App;
