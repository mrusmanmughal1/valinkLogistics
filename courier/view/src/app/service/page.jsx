import React from "react";
import sercice from "../../Assets/9.jpg";
import Image from "next/image";
import Link from "next/link";

const service = () => {
  return (
    <div>
      <div className="h-screen overflow-hidden relative ">
        <Image src={sercice} alt="" className="w-full h-screen object-cover" />
        <div className=" text-2xl text-center  slide-right   Font-semibold   font-serif   font-semibold absolute top-[33%] left-[%] rounded-lg text-white ">
          <div className=" relative uppercase  font-semibold sidetip  p-4 rounded-r-2xl  ">
            <p className=" p-4 drop-shadow-xl   rounded-md">
              {" "}
              We Care About Your Products{" "}
            </p>
            <p className=" drop-shadow-xl   rounded-md">
              We Know How To Deliver
            </p>
          </div>
        </div>
      </div>
      <div className=" py-20 ">
        <div className="w-11/12 mx-auto text-center space-y-4">
          <div className="text-bold font-serif text-3xl text-orange-500 drop-shadow-xl ">
            One Booking Portal, Three Different Services
          </div>
          <div className="">
            <p className="text-xl font-semibold drop-shadow-sm">
              UK and Europe Same-Day Delivery
            </p>
            <p>
              Covering London, the UK, and Europe, our same-day delivery service
              offers tailored solutions with a fleet to match your needs.
            </p>
          </div>
        </div>
      </div>
      <div className="py-14 bg-orange-50">
        <div className="w-3/4 flex justify-center flex-col md:flex-row gap-10 mx-auto">
          <div className="border-orange-400   p-8    border-4 shadow-lg">
            <div className=" text-center space-y-3">
              <p className="text-2xl font-bold  ">Next Day Delivery</p>
              <p className="">
                Explore global opportunities with our international shipping
                services. Enjoy fast, reliable door-to-door delivery worldwide
                at competitive rates
              </p>
            </div>
          </div>
          <div className="border-orange-400 p-8  shadow-lg   border-4">
            <div className=" text-center space-y-3">
              <p className="text-2xl font-bold">Domestic Overnight Delivery</p>
              <p>
                Aligning with your business hours, we offer late collections and
                timed deliveries across the UK for the next day.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 bg-orange-200">
        <div className="w-3/4 space-y-8 text-center  mx-auto p-8">
          <p className="text-3xl font-semibold drop-shadow-lg text-orange-500 font-serif">
            Why Choose Us?
          </p>
          <div className="text-center  ">
            <p className="  drop-shadow-xl capitalize text-lg py-2 font-serif">
              At VANLINK LOGISTICS, we're dedicated to providing top-notch
              courier solutions tailored to your business needs, all at
              competitive prices. Continuously innovating with new delivery
              sources and technologies, we aim to streamline your delivery
              requirements, eliminating stress from the process. For a partner
              who genuinely cares about your business, choose VANLINK LOGISTICS.
              Get in touch with us in London, England, to discover how we can
              serve you better
            </p>
          </div>
          <div className="text-center">
            <Link
              href="/client"
              className="text-white font-semibold bg-orange-500 p-5 px-8 rounded-md"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default service;
