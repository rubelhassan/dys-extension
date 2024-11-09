// src/components/Navbar.js
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <ul>
        <li className={pathname === '/' ? 'active' : ''}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === '/self-diagnosis' ? 'active' : ''}>
          <Link href="/self-diagnosis">Self Diagnosis</Link>
        </li>
        <li className={pathname === '/extension-info' ? 'active' : ''}>
          <Link href="/extension-info">Extension Info</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
