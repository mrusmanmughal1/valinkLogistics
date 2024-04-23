"use client";
import Link from "next/link";
import React from "react";

import { usePathname  } from 'next/navigation'
const NavLinks = ({style}) => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <div className="  ">
      <ul className={`flex  gap-1 `}>
        <li className="">
          <Link href="/home"  className={`    p-4 ${pathname === '/home' ? 'activeLink  ' : ''}`}>Home</Link>
        </li>
        <li>
          <Link href="/about" className={` p-4 ${pathname === '/about' ? 'activeLink ' : ''}`}>About Us</Link>
        </li>
        <li>
          <Link href="/company" className={` p-4 ${pathname === '/company' ? 'activeLink ' : ''}`}>Our Company</Link>
        </li>
        <li>
          <Link href="/service" className={` p-4 ${pathname === '/service' ? 'activeLink ' : ''}`}>Services</Link>
        </li>
        <li>
          <Link href="/client" className={` p-4 ${pathname === '/client' ? 'activeLink ' : ''}`}>Client Area</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
