import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductPage from "./Components/Products.jsx";
import Carousel from "./Components/HomeScreenCarousel/HomeCarousel.jsx";
import SpeechBtn from "./Components/BackendComponents/SpeechBtn.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SpeechBtn />
  </React.StrictMode>
);
