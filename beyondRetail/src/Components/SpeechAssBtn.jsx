import React, { useState } from "react";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import SpeechAnimation from "../assets/Animation/SpeechAnimation.json";
import Lottie from "lottie-react";

const SpeechAssBtn = () => {
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleButtonClick = () => {
    setIsBoxVisible(!isBoxVisible);

    // Set the default AI message when the button is clicked
    setChatHistory(["AI: Hi, how can I assist you today?"]);
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = () => {
    // Add the user's input to the chat history
    setChatHistory([...chatHistory, `User: ${userInput}`]);

    // Handle the interaction with the user input as needed
    console.log("User input:", userInput);

    // Clear the user input
    setUserInput("");
  };

  return (
    <div>
      <div
        className={`rounded-full sticky p-2 shadow-lg bg-teal-400 hover:bg-teal-500`}
        style={styles.speechAssBtn}
        onClick={handleButtonClick}
      >
        {!isBoxVisible ? (
          <KeyboardVoiceOutlinedIcon style={{ fontSize: "2.2rem" }} />
        ) : (
          <Lottie
            animationData={SpeechAnimation}
            speed={0.5}
            style={{ height: "2.5rem" }}
          />
        )}
      </div>
      {isBoxVisible && (
        <div className="fixed bottom-32 right-16 bg-white border border-gray-300 rounded-md p-4 z-50">
          {/* Display chat history */}
          {chatHistory.map((message, index) => (
            <div key={index} className="mb-2 text-gray-500">
              {message}
            </div>
          ))}
          {/* Input box for user input */}
          <input
            type="text"
            placeholder="Ask your question here..."
            className="w-full p-2 border rounded-md mb-4"
            value={userInput}
            onChange={handleInputChange}
          />
          <button
            className="bg-teal-400 text-white px-4 py-2 rounded-md hover:bg-teal-500 hover:color:white"
            onClick={handleSubmit}
          >
            Submit
          </button>
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
};

export default SpeechAssBtn;
