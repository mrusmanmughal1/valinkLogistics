import Image from "next/image";
import React from "react";
import more1 from "../../Assets/more1.jpg";

const page = () => {
  return (
    <div>
      <div className="text-center    relative">
        <div className="absolute z-20 flex justify-center flex-col gap-10 w-full py-40 h-screen">
          <div className="">
            <div className="   text-white text-center text-5xl font-extrabold font-sans drop-shadow-md  uppercase">
              Everyone within our business <br></br>
              understands our mission
            </div>
            <p className="font-sans text-white">
              It means we don’t just come to work to do a job, we come to work
              to make a difference.
            </p>
          </div>
          <div className=" gap-8 text-white  flex flex-col justify-center items-center  w-full  ">
            <p className="text-2xl font-semibold w-1/2">
              “ To make the process of buying and managing shipping and
              logistics services simple, efficient, stress free and cost
              effective.”
            </p>
            <p className="w-1/2">
              We do this by providing a friendly, efficient and personalised
              service combined with innovative IT solutions that enable our
              customers to always be in control of their supply chains.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-orange-700  opacity-60 "></div>
        <Image
          src={more1}
          alt=""
          className="w-full  md:object-conta h-screen object-cover"
        />
      </div>
    </div>
  );
};

export default page;
