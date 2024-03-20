import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import ProductPage from "./Pages/Products";
import SignUpPage from "./Pages/SignUpPage";
import AboutPage from "./Pages/AboutPage";

import Footer from "./Components/footer/Footer";

import { Provider } from "react-redux";
import { Store, persistor } from "./Redux/Store";
import CheckOut from "./Pages/Checkout";
import SpeechBtn from "./Components/BackendComponents/SpeechBtn";

import CategoriedProducts from "./Components/CategoriedProducts";

import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <NavBar />
            <SpeechBtn />
            <Routes>
              <Route path="/" element={<SpeechBtn />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="products" element={<ProductPage />} />
              <Route path="/signin" element={<SignUpPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/checkout" element={<CheckOut />} />

              <Route
                path="/products/mobiles"
                element={<CategoriedProducts category="Mobiles" />}
              />
              <Route
                path="/products/laptops"
                element={<CategoriedProducts category="Laptops" />}
              />
              <Route
                path="/products/earphones"
                element={<CategoriedProducts category="Earphones" />}
              />
              <Route
                path="/products/cameras"
                element={<CategoriedProducts category="Cameras" />}
              />
              <Route
                path="/products/gaming"
                element={<CategoriedProducts category="Gaming" />}
              />
            </Routes>
            <Footer />
          </Router>
        </PersistGate>
      </Provider>

      {/* <div className="min-h-screen w-screen flex justify-center items-center">
        <div className="container mx-auto">
          <Carousel />
        </div>
      </div> */}
      {/* <ProductDetails /> */}
    </>
  );
};

export default App;
