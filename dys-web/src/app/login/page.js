// app/login/page.js
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';  // Updated import for Next.js App Router
import { auth } from ".././lib/firebaseConfig";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle email/password login
  const handleEmailPasswordLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/'); // Redirect to the home page after successful login
    } catch (err) {
      setError(err.message);
    }
  };

  // Function to handle Google sign-in
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push('/'); // Redirect to the home page after successful login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleEmailPasswordLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login with Email</button>
      </form>
      <button onClick={handleGoogleLogin} className="google-login-button">
        Login with Google
      </button>
    </div>
  );
};

export default Login;
