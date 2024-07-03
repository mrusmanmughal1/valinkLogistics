import NavLinks from "@/UI/NavLinks";
import Image from "next/image";
import logo from "../Assets/Logo-01.png";
import { FaSquarePhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import Link from "next/link";
import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import Mobilenav from "@/UI/MobileNav";
const Navbar = () => {
  return (
    <>
      <div className="flex md:px-20 px-2   w-full items-center justify-between relative text-sm py-2 gap-2  text-white bg-[#052653]">
        <div className="flex gap-2  w-full justify-between md:justify-normal  md:flex-row text-xs font-semibold">
          <div className=" flex items-center   gap-1">
            {" "}
            <FaSquarePhone className="md:text-lg text-xs" />
            <a href="tel:01217900800"> +44 (0)1217 900800</a>
          </div>
          <div className=" flex items-center   gap-1">
            {" "}
            <IoMail className="text-lg" />
            <a href="mailto:info@vanlinklogitics.co.uk">
              {" "}
              info@vanlinklogitics.co.uk
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex justify-end md:text-lg text-xs gap-2">
            <a href="#">
              <FaFacebookSquare />
            </a>
            <a href="#">
              <SlSocialInstagram />
            </a>
            <a href="#">
              <TfiYoutube />
            </a>
            <a href="#">
              <FaGooglePlusG />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full  text-[#052653]   hidden md:block ">
        <nav>
          <div className="flex      items-center  w-11/12 mx-auto   ">
            <Link
              href={"/"}
              className=" p-2 pt-"
            >
              <Image src={logo} width={150}   alt="Logo" />
            </Link>

            <div className="flex    justify-end w-full gap-10 items-center">
              <div className="relative">
                <Link
                  href="/"
                  className="p-4  bg-[#0F2441]      border-4 animate-bounce text-white  font-semibold text-sm  text-center rounded-md w-40"
                >
                  Get a Quote
                </Link>
              </div>
              <NavLinks />
            </div>
          </div>
        </nav>
      </div>

      {/* mobile nav */}
      <div className="block md:hidden">
        <Mobilenav />
      </div>
    </>
  );
};

export default Navbar;
