// src/components/Header.js
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../lib/firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Image from 'next/image';

const Header = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      router.push('/');
    });
  };

  return (
    <header className="header">
      <div className="logo-container" onClick={() => router.push('/')}>
        <Image 
          src="/logo.jpg" 
          alt="Logo" 
          width={40} 
          height={40} 
          className="header-logo-image" 
        />
      </div>
      <h1 className="header-logo">DYS</h1>
      <div className="header-actions">
        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <button className="loginbutton" onClick={() => router.push('/login')}>Login</button>
            <button className="registerbutton" onClick={() => router.push('/register')}>Register</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
