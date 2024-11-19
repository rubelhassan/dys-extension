"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../lib/firebaseConfig";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/"); // Redirect to home after successful registration
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/"); // Redirect to home after successful registration
    } catch (error) {
      console.error("Google sign-up failed:", error.message);
    }
  };

  return (
    <div className="register-form">
      <h2 className="register">Register</h2>
      <form onSubmit={handleEmailSignUp}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email" // Added id for association with the label
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password" // Added id for association with the label
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <button onClick={handleGoogleSignUp} className="google-signup-button">
        Sign Up with Google
      </button>
    </div>
  );
};

export default Register;
