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
        "http://127.0.0.1:5000/process_voice",
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
          console.log(title, price);
          dispatch(addToCart({ title, price, itemImg }));
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
      }
    } catch (error) {
      console.error("Error in Speech Recognition");
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
      }, 10000);
    } else {
      setIsAnimationVisible(false);
      setPopupMessage("Click to activate Voice Assistant");
    }
  };

  return (
    <div>
      <div className="fixed popup bg-teal-200 w-fit right-28 bottom-10 p-3 rounded-md max-w-sm">
        {popMessage.toString()} {/* Ensure popMessage is a string */}
      </div>
      <div
        className="fixed bottom-10 right-14 z-10 flex items-center justify-center bg-teal-400 border-2 rounded-full w-12 h-12 cursor-pointer shadow-lg "
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
