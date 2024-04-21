"use client";
import Link from "next/link";
import React from "react";

const NavLinks = ({style}) => {
  return (
    <div className="  ">
      <ul className={`flex  gap-16 `}>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/company">Our Company</Link>
        </li>
        <li>
          <Link href="/service">Services</Link>
        </li>
        <li>
          <Link href="/client">Client Area</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
