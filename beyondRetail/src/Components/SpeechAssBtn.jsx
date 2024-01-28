import React, { useState, useEffect } from "react";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import Lottie from "lottie-react";
import SpeechAnimation from "../assets/Animation/SpeechAnimation.json";

const SpeechAssBtn = () => {
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);
  const [listeningText, setListeningText] = useState(
    "Press the button to start listening"
  );

  useEffect(() => {
    // You can update this logic based on the actual result received from the backend
    if (isAnimationVisible) {
      setListeningText("I am listening...");
    } else {
      setListeningText("Press the button to start listening");
    }
  }, [isAnimationVisible]);

  const handleButtonClick = () => {
    setIsAnimationVisible(!isAnimationVisible);
  };

  return (
    <div>
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
    </div>
  );
};

const styles = {
  speechAssBtn: {
    position: "fixed",
    bottom: "3rem",
    right: "3rem",
  },
};

export default SpeechAssBtn;
