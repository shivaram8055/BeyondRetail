import React, { useState, useEffect } from "react";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import Lottie from "lottie-react";
import SpeechAnimation from "../assets/Animation/SpeechAnimation.json";

const SpeechAssBtn = () => {
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);
  const [listeningText, setListeningText] = useState("Press the button to start listening");
  const [result, setResult] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleButtonClick = async () => {
    try {
      setIsAnimationVisible(!isAnimationVisible);

      const response = await fetch("http://localhost:5000/speech-recognition", {
        method: "POST",
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data.answer);

        // Show the popup
        setIsPopupVisible(true);

        // Change icon and print statement after 5 seconds
        setTimeout(() => {
          setIsAnimationVisible(false);
          setListeningText("Press the button to start listening");
        }, 5000);
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
  };

  return (
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
      {isPopupVisible && (
        <div className="popup" style={styles.popup}>
          <span className="close" onClick={closePopup}>&times;</span>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  speechAssBtn: {
    position: "fixed",
    bottom: "3rem",
    right: "3rem",
  },
  popup: {
    position: "absolute",
    top: 0,
    right: "3.5rem", // Adjust this value based on your design
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    padding: "10px",
    zIndex: 1,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  },
};

export default SpeechAssBtn;
