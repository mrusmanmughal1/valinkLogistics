import NavLinks from "@/UI/NavLinks";
import Image from "next/image";
import logo from "../Assets/Logo.png";
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
      <div className="flex md:px-20 px-2   w-full items-center justify-between relative text-sm py-2 gap-2 bg-orange-500 text-white">
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
      <div className="w-full bg-orange-600 text-white py-2 hidden md:block ">
        <nav>
          <div className="flex      items-center  w-11/12 mx-auto   ">
            <Link
              href={"/"}
              className="shadow-2xl  bg-orange-900 rounded-lg p-2 pt-"
            >
              <Image src={logo} width={90} height={90} alt="Logo" />
            </Link>

            <div className="flex    justify-end w-full gap-10 items-center">
              <div className="relative">
                <Link
                  href="/"
                  className="p-4 bg-orange-600 shadow-lg animate-bounce  font-semibold border-2 text-sm  text-center rounded-md w-40"
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
