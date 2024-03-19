const SpeechAssBtn = () => {
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);
  const [listeningText, setListeningText] = useState(
    "Press the button to start listening"
  );
  const dispatch = useDispatch();
  const [result, setResult] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    try {
      setIsLoading(true);
      setIsAnimationVisible(true);

      const response = await fetch("http://127.0.0.1:5000/process_voice", {
        method: "POST",
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data["response_text"]);

        if (data["intent"] === "orderProduct") {
          const productDetails = data["response_text"][1];
          const title = productDetails["title"];
          const price = productDetails["price"];
          const itemImg = productDetails["itemImg"];
          dispatch(addToCart({ title, price, itemImg }));
        }
      } else {
        console.error("Error in Speech Recognition:", response.statusText);
      }
    } catch (error) {
      console.error("Error in Speech Recognition:", error.message);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setIsAnimationVisible(false);
        setListeningText("Press the button to start listening");
      }, 10000);
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
    setIsPopupVisible(false);
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          className={`rounded-full sticky p-2 shadow-lg bg-teal-400 hover:bg-teal-500`}
          style={styles.speechAssBtn}
          onClick={handleButtonClick}
        >
          {!isLoading && !isAnimationVisible ? (
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
