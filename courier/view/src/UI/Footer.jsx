import React from 'react'
import NavLinks from './NavLinks'
import Link from 'next/link'
import { FaSquarePhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
const Footer = () => {
  return (
    <>
    <div  className='bg-orange-500 text-white '>
        <div className=" w-3/4 mx-auto ">
        <div className=" flex p-8 justify-between ">
        <div className="  flex flex-col gap-3 ">

            <p className='flex items-center gap-1 '> <FaSquarePhone className='text-2xl'/>02033711919</p>
            <p className='flex items-center gap-1 '> <IoMail className='text-2xl'/> office@couriernet.co.uk</p>
        </div>
        <div className="  flex flex-col gap-3 ">
            <div className="flex justify-end text-2xl gap-2">
                <FaFacebookSquare/>
                <TfiYoutube/>
                <SlSocialInstagram/>
                <FaGooglePlusG/>
            </div>
            <div className="">Terms and Conditions| Privacy Policy</div>
        </div>
        </div>

     
        </div>
    </div>
    <div className="bg-orange-600 p-6 text-white">
    <div className=" w-3/4 mx-auto flex items-center justify-between ">
            <Link href={"#"} className='w-48'>Instant Quote </Link>
            <NavLinks style="justify-around  "/>
        </div>
        </div>
    </>
  )
}

export default Footer