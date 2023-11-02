import React from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import airpods from "./assets/homepod.jpeg";
import ProductComp from "./Components/ProductComp";
import NewArrivals from "./Components/NewArrivals";
import DeliveryDetails from "./Components/DeliveryDetails";

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
      <DeliveryDetails />
      {/* <NavBar />
      <Footer /> */}
    </>
  );
};

export default App;
