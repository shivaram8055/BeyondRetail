import React, { useState, useEffect } from "react";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import Lottie from "lottie-react";
import SpeechAnimation from "../assets/Animation/SpeechAnimation.json";
import { addToCart } from "../Redux/CartSlice";
import { useDispatch } from "react-redux";

const SpeechAssBtn = () => {
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);
  const [listeningText, setListeningText] = useState(
    "Press the button to start listening"
  );
  const dispatch = useDispatch();
  const [result, setResult] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleButtonClick = async () => {
    // const title = "APPLE iPhone 14 Plus"
    // const price = "\u20b969,990"
    // const itemImg = "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/v/0/t/-original-imaghxa5rgcv5enm.jpeg?q=70"
    try {
      setIsAnimationVisible(!isAnimationVisible);

      const response = await fetch("http://localhost:5000/process_voice", {
        method: "POST",
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data["response_text"]);
        console.log(data["intent"] === "orderProduct");

        // Check the intent and dispatch addToCart if it's 'orderProduct'

        // Show the popup
        setIsPopupVisible(true);

        // Change icon and print statement after 5 seconds
        setTimeout(() => {
          setIsAnimationVisible(false);
          setListeningText("Press the button to start listening");
        }, 5000);

        if (data["intent"] == "orderProduct") {
          const productDetails = data["response_text"][1];
          const title = productDetails["title"];
          const price = productDetails["price"];
          const itemImg = productDetails["itemImg"];
          console.log(title, price);
          dispatch(addToCart({ title, price, itemImg }));
        }
      } else {
        console.error("Error in Speech Recognition:", response.statusText);
      }
    } catch (error) {
      console.error("Error in Speech Recognition:", error.message);
    }
  };

  useEffect(() => {
    if (isAnimationVisible) {
      setListeningText("I am listening...");
    } else {
      setListeningText("Press the button to start listening");
    }
  }, [isAnimationVisible]);

  const closePopup = () => {
    // Hide the popup
    setIsPopupVisible(false);
    setIsAnimationVisible(false);
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          className={`rounded-full sticky p-2 shadow-lg bg-teal-400 hover:bg-teal-500`}
          style={styles.speechAssBtn}
          onClick={handleButtonClick}
        >
          {!isAnimationVisible ? (
            <KeyboardVoiceOutlinedIcon style={{ fontSize: "2.2rem" }} />
          ) : (
            <Lottie
              animationData={SpeechAnimation}
              speed={0.5}
              style={{ height: "2.5rem" }}
            />
          )}
        </div>
        <p className="text-gray-500 mt-2">{listeningText}</p>

        {/* Popup to display results */}
        {isPopupVisible && isAnimationVisible && (
          <div className="popup rounded-lg" style={styles.popup}>
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <p>{result[0]}</p>
          </div>
        )}
      </div>
    </>
  );
};

const styles = {
  speechAssBtn: {
    position: "fixed",
    bottom: "3rem",
    right: "3rem",
  },
  popup: {
    position: "fixed",
    bottom: "3rem",
    right: "6.5rem", // Adjust this value based on your design
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    padding: "10px",
    zIndex: 1,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    width: "10rem",
    opacity: 1,
    transition: "opacity 0.3s ease-in-out", // Add transition property
  },
};

export default SpeechAssBtn;
