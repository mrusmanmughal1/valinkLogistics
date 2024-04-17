import NavLinks from "@/UI/NavLinks";
import Image from "next/image";
import logo from "../Assets/Logo.png";
import { FaSquarePhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex px-20  relative text-sm py-2 gap-2 bg-orange-500 text-white">
          <div className=" flex items-center gap-1"> <FaSquarePhone className="text-lg"/>02033711919</div>
          <div className=" flex items-center gap-1"> <IoMail className="text-lg"/>office@couriernet.co.uk</div>
        </div>
    <div className="w-full bg-orange-600 text-white py-2">
      <nav>
        <div className="">

      
          
        </div>
        <div  className="flex      items-center  w-11/12 mx-auto   ">
        <div className="bg-orange-950 rounded-lg p-2 pt-"  >
          <Image src={logo} width={70} height={70} alt="Logo"/>
        </div>
        
        <div className="flex  justify-end w-full gap-10 items-center">
          <Link href='/' className="px-4 py-3 bg-[#e9804f] text-sm  text-center rounded-md w-40">Instant Quote</Link>
          <NavLinks  />
        </div>
        </div>
      </nav>
    </div>
    </>

  );
};

export default Navbar;
