import Image from "next/image";
import React from "react";
import client from "../../Assets/10.jpg";
import Signup from "@/components/Signup";

const page = () => {
  return (
    <div>
      <div className="h-screen overflow-hidden relative ">
        <Image src={client} alt="" className="w-full h-screen object-cover" />
      </div>
      <div className=" text-2xl text-center   bg-blue-primary  Font-semibold   font-serif   font-semibold   text-white ">
        <div className=" relative uppercase  font-semibold   p-4  ">
          <p className=" p-2 drop-shadow-xl   rounded-md"> Give us a Change </p>
          <p className=" drop-shadow-xl   rounded-md">To Serve you better !</p>
        </div>
      </div>
      <div className=" text-center  bg-blue-50 py-20">
        <p className="text-3xl font-bold text-blue-primary uppercase drop-shadow-md">
          Create an Account
        </p>
        <div className="">
          <Signup />
        </div>
      </div>
    </div>
  );
};

export default page;
