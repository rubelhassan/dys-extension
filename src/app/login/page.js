// app/login/page.js
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Updated import for Next.js App Router
import { auth } from ".././lib/firebaseConfig";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Function to handle email/password login
  const handleEmailPasswordLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/"); // Redirect to the home page after successful login
    } catch (err) {
      handleError(err.code);
    }
  };

  // Function to handle Google sign-in
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    setError("");
    try {
      await signInWithPopup(auth, provider);
      router.push("/"); // Redirect to the home page after successful login
    } catch (err) {
      handleError(err.code);
    }
  };

  // Error handling function
  const handleError = (code) => {
    switch (code) {
      case "auth/user-not-found":
        setError("No user found with this email.");
        break;
      case "auth/wrong-password":
        setError("Incorrect password. Please try again.");
        break;
      case "auth/invalid-email":
        setError("Invalid email format.");
        break;
      case "auth/too-many-requests":
        setError(
          "Too many failed login attempts. Please try again later or reset your password."
        );
        break;
      case "auth/popup-closed-by-user":
        setError("Google login popup was closed. Please try again.");
        break;
      case "auth/unauthorized-domain":
        setError(
          "The domain is not authorized for Google sign-in. Please contact support."
        );
        break;
      default:
        setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleEmailPasswordLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email Address"
            aria-required="true"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-label="Password"
            aria-required="true"
          />
        </div>
        <button type="submit" className="email-login-button" aria-label="Login with Email">
          Login with Email
        </button>
      </form>
      <button onClick={handleGoogleLogin} 
            className="google-login-button" 
            aria-label="Login with Google Account">
               Login with Google
      </button>
    </div>
  );
};

export default Login;
