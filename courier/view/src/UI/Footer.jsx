import Link from "next/link";
import { FaSquarePhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import logo from "../Assets/Logo-01.png"
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="bg-  text-blue-primary text-white ">
        <div className="w-11/12   mx-auto ">
          <div className=" flex py-2 flex-col md:flex-row gap-3  md:px-2  justify-between items-center ">
            <div className="  flex flex-col gap-3  md:gap-6 ">
              <a  href="tel:01217900800" className="flex items-center gap-1 t ">
                <FaSquarePhone className="text-2xl" />
                +44 (0)1217 900800
                
              </a>
              <a  href="mailto:info@vanlinklogitics.co.uk" className="flex items-center gap-1 ">
                <IoMail className="text-2xl" /> info@vanlinklogitics.co.uk
              </a>
            </div>
            <div className="hidden md:block">
              <Image src={logo} width={150} className=" " />
            </div>
            <div className="  flex flex-col gap-3 md:gap-6 ">
              <div className="flex  justify-center md:justify-end text-2xl gap-2">
                <FaFacebookSquare />
                <SlSocialInstagram />
                <TfiYoutube />
                <FaGooglePlusG />
              </div>
              <div className="">Terms and Conditions | Privacy Policy</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-primary  py-6  md:py-4    text-white">
        <div className=" w-11/12  md:text-base    mx-auto flex  flex-col md:flex-row gap-5 md:gap-0 items-center justify-between ">
          <Link href={"/#quote"} className=" p-4 rounded-md shadow-md border w-full md:w-auto text-center order-1 lg:order-none">
            Request a Quote{" "}
          </Link>
          <div className="  ">
            <ul className={`flex md:flex-row text-center md:text-start flex-col gap-4 `}>
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
