"use client";
import { useEffect, useState } from 'react';
import { auth } from '../lib/firebaseConfig';

const UserInfo = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Set the currently logged-in user
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (!user) return null; // Don't render if no user is logged in

  return (
    <div style={{ textAlign: 'right', padding: '0.5rem', fontSize: '0.9rem', color: '#333' }}>
      Logged in as: <strong>{user.email}</strong>
    </div>
  );
};

export default UserInfo;
