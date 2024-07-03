"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../Assets/Logo-01.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
const Mobilenav = () => {
  const [showMblNav, setshowMblNav] = useState(false);

  return (
    <div className="   text-white ">
      <div className="bg-white relative py-2">
        <div className="flex justify-between items-center px-4">
          <div className="">
            <Link href="/">
            <Image src={logo} width={70} height={70} />
            </Link>
          </div>
          <div
            className=" font-bold  text-2xl shadow-md text-blue-primary p-1"
            onClick={() => setshowMblNav(!showMblNav)}
          >
            {showMblNav ? <RxCross2 /> : <GiHamburgerMenu />}
          </div>
        </div>
       {showMblNav && <div className="w-full absolute bg-white text-blue-primary border-t  z-50">
          <div className=" p-3 ">
            <ul className={`flex flex-col  gap-4 py-4 `}>
              <li className="" onClick={()=>setshowMblNav(false)}>
                <Link
                  href="/home"
                  c
                >
                  Home
                </Link>
              </li>
              <li  onClick={()=>setshowMblNav(false)}>
                <Link
                  href="/about"
            
                >
                  About Us
                </Link>
              </li>
              <li  onClick={()=>setshowMblNav(false)}>
                <Link
                  href="/company"
                  
                >
                  Our Company
                </Link>
              </li>
              <li  onClick={()=>setshowMblNav(false)}>
                <Link
                  href="/service"
                  
                >
                  Services
                </Link>
              </li>
              <li  onClick={()=>setshowMblNav(false)}>
                <Link
                  href="/client"
                
                >
                  Client Area
                </Link>
              </li>
            </ul>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default Mobilenav;
