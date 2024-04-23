import Link from "next/link";
import { FaSquarePhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import logo from "../Assets/Logo.png"
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="bg-orange-500 text-white ">
        <div className="w-11/12   mx-auto ">
          <div className=" flex py-10  flex-col md:flex-row gap-2 px-6 md:px-2 justify-between items-center ">
            <div className="  flex flex-col  md:gap-6 ">
              <p className="flex items-center gap-1 ">
                {" "}
                <FaSquarePhone className="text-2xl" />
                02033711919
              </p>
              <p className="flex items-center gap-1 ">
                {" "}
                <IoMail className="text-2xl" /> office@couriernet.co.uk
              </p>
            </div>
            <div className="hidden md:block">
              <Image src={logo} width={100} className="drop-shadow-2xl shadow-md" />
            </div>
            <div className="  flex flex-col md:gap-6 ">
              <div className="flex justify-start md:justify-end text-2xl gap-2">
                <FaFacebookSquare />
                <SlSocialInstagram />
                <TfiYoutube />
                <FaGooglePlusG />
              </div>
              <div className="">Terms and Conditions| Privacy Policy</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-orange-600  py-6  md:py-4  text-xs text-white">
        <div className=" w-11/12 text-base  mx-auto flex  flex-col md:flex-row gap-5 md:gap-0 items-center justify-between ">
          <Link href={"#"} className=" p-4 rounded-md shadow-md border w-full md:w-auto text-center order-1 lg:order-none">
            Request a Quote{" "}
          </Link>
          <div className="  ">
            <ul className={`flex  gap-4 `}>
              <li className="">
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
        </div>
      </div>
    </>
  );
};

export default Footer;
