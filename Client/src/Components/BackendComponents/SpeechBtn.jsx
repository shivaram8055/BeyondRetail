import React, { useState } from "react";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import Lottie from "lottie-react";
import SpeechAnimation from "../../assets/Animation/SpeechAnimation.json";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";

const SpeechBtn = () => {
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);
  const [popMessage, setPopupMessage] = useState(
    "Click to activate Voice Assistant"
  );
  const dispatch = useDispatch();

  const redirectToExternalPage = (url) => {
    window.location.href = `http://localhost:5173${url}`;
  };

  // Usage

  const processVoice = async () => {
    try {
      const responseFromSpeechReco = await fetch(
        "http://127.0.0.1:5000/process_voice" ||
          "https://0wxs0q81-5000.inc1.devtunnels.ms/process_voice",
        {
          method: "POST",
        }
      );

      if (responseFromSpeechReco.ok) {
        const data = await responseFromSpeechReco.json();
        console.log(data);
        setPopupMessage(data["response_text"]);
        if (data["intent"] === "addToCart") {
          const productDetails = data["response_text"][1];
          const title = productDetails["title"];
          const price = productDetails["price"];
          const itemImg = productDetails["itemImg"];
          const id = productDetails["id"];
          console.log(title, price);
          dispatch(addToCart({ id, title, price, itemImg }));
          redirectToExternalPage("/checkout");
        } else if (data["intent"] === "page") {
          const pageName = data["response_text"];
          console.log("page-name", pageName);
          redirectToExternalPage(pageName);
        } else if (data["intent"] === "browseProducts") {
          const category = data["response_text"];
          redirectToExternalPage(`/products/${category}`);
        }
      } else {
        console.error(
          "Error in Speech Recognition:",
          responseFromSpeechReco.statusText
        );
        setPopupMessage("Error in Speech Recognition");
        setIsAnimationVisible(false);
      }
    } catch (error) {
      console.error("Error in Speech Recognition");
      setPopupMessage("Error in Speech Recognition");
      setIsAnimationVisible(false);
    }
  };

  const handleClickButton = async () => {
    if (!isAnimationVisible) {
      setIsAnimationVisible(true);
      setPopupMessage("I am Listening");
      await processVoice();

      setTimeout(() => {
        setIsAnimationVisible(false);
        setPopupMessage("Click to activate Voice Assistant");
      }, 5000);
    } else {
      setIsAnimationVisible(false);
      setPopupMessage("Click to activate Voice Assistant");
    }
  };

  return (
    <div>
      <div className="fixed popup bg-teal-200 w-fit bottom-5 right-20 md:right-28 md:bottom-10 p-3 rounded-md max-w-sm shadow-lg">
        {popMessage.toString()} {/* Ensure popMessage is a string */}
      </div>
      <div
        className="fixed bottom-5 right-5 md:bottom-10 md:right-14 z-10 flex items-center justify-center bg-teal-400 border rounded-full w-12 h-12 cursor-pointer shadow-lg "
        onClick={handleClickButton}
      >
        {isAnimationVisible ? (
          <Lottie
            animationData={SpeechAnimation}
            speed={0.5}
            style={{ height: "4rem" }}
          />
        ) : (
          <KeyboardVoiceOutlinedIcon style={{ fontSize: "2.2rem" }} />
        )}
      </div>
    </div>
  );
};

export default SpeechBtn;
