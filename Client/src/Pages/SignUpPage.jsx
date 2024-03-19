import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import CardFlip from "react-card-flip";
import ChevronRightTwoToneIcon from "@mui/icons-material/ChevronRightTwoTone";

const SignUpPage = () => {
  const location = useLocation();
  const [isFlipped, setIsFlipped] = useState(false);
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    // Reset any error messages when flipping
    setSignUpError("");
    setLoginError("");
  };

  const handleSignUp = () => {
    // Simulate sign-up logic
    if (signUpEmail === "user@example.com" && signUpPassword === "password") {
      // Successful sign-up
      console.log("Sign-up successful!");
      setSignUpError("");
    } else {
      // Failed sign-up
      console.log("Sign-up failed!");
      setSignUpError("Invalid email or password");
    }
  };

  const handleLogin = () => {
    // Simulate login logic
    if (loginEmail === "user@example.com" && loginPassword === "password") {
      // Successful login
      console.log("Login successful!");
      setLoginError("");
    } else {
      // Failed login
      console.log("Login failed!");
      setLoginError("Invalid email or password");
    }
  };

  return (
    <div className="pt-4">
      <div className="text-sm md:px-navbarPadX px-10">
        <Link to="/">Home</Link> <ChevronRightTwoToneIcon />{" "}
        {location.pathname.slice(1)}
      </div>
      <div className="flex justify-center items-center h-fit m-10">
        <CardFlip isFlipped={isFlipped} flipDirection="horizontal">
          {/* Front side: Sign Up */}
          <div className="w-80 h-96 bg-white rounded-md border-2 flex flex-col justify-center items-center p-8">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            {signUpError && <p className="text-red-500 mb-4">{signUpError}</p>}
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Email"
                value={signUpEmail}
                onChange={(e) => setSignUpEmail(e.target.value)}
                className="mb-4 border-b border-gray-300 p-2 w-full"
              />
              <input
                type="password"
                placeholder="Password"
                value={signUpPassword}
                onChange={(e) => setSignUpPassword(e.target.value)}
                className="mb-4 border-b border-gray-300 p-2 w-full"
              />
              <button
                type="button"
                onClick={handleSignUp}
                className="mt-2 bg-teal-400 hover:bg-teal-500 text-white font-semibold py-2 px-4 rounded"
              >
                Sign Up
              </button>
              <button
                type="button"
                onClick={handleFlip}
                className="mt-2 text-teal-400 hover:text-teal-500 font-semibold"
              >
                Go to Login
              </button>
            </form>
          </div>

          {/* Back side: Login */}
          <div className="w-80 h-96 bg-white rounded-md border-2 flex flex-col justify-center items-center p-8">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            {loginError && <p className="text-red-500 mb-4">{loginError}</p>}
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="mb-4 border-b border-gray-300 p-2 w-full"
              />
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="mb-4 border-b border-gray-300 p-2 w-full"
              />
              <button
                type="button"
                onClick={handleLogin}
                className="mt-2 bg-teal-400 hover:bg-teal-500 text-white font-semibold py-2 px-4 rounded"
              >
                Login
              </button>
              <button
                type="button"
                onClick={handleFlip}
                className="mt-2 text-teal-400 hover:text-teal-500 font-semibold"
              >
                Go to Sign Up
              </button>
            </form>
          </div>
        </CardFlip>
      </div>
    </div>
  );
};

export default SignUpPage;
