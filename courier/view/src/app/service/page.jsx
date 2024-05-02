import React from "react";
import sercice from "../../Assets/9.jpg";
import Image from "next/image";

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
            <p className="text-xl font-semibold">
              UK and Europe Same-Day Delivery
            </p>
            <p>
              Our same-day delivery service covers London, the UK, and Europe
              with a vehicle to suit your delivery requirements.
            </p>
          </div>
        </div>
      </div>
      <div className="py-14 bg-orange-50">
        <div className="w-3/4 flex justify-center flex-col md:flex-row gap-10 mx-auto">
          <div className="border-orange-400   p-8    border-4">
            <div className=" text-center space-y-3">
              <p className="text-2xl font-bold  ">Next Day  Delivery</p>
              <p className="">
                We offer international shipments to any part of the world.
                Experience a fast and reliable door-to-door service at a
                reasonable cost.
              </p>
            </div>
          </div>
          <div className="border-orange-400 p-8     border-4">
            <div className=" text-center space-y-3">
              <p className="text-2xl font-bold">Domestic Overnight Delivery</p>
              <p>
                We conduct late collections to suit your business hours with
                timed deliveries all over the UK on the following day.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 bg-orange-200">
        <div className="w-3/4 space-y-8 text-center  mx-auto p-8">
          <p className="text-3xl font-semibold drop-shadow-xl text-orange-500 font-serif">
            Why Choose Us?
          </p>
          <div className="text-justify  ">
            <p className="  drop-shadow-xl">
              " At Couriernet Limited, we strive to offer the best courier
              solutions for your business needs at a competitive price. Our
              company is constantly searching for new delivery sources and
              technologies to help us improve our services and take the stress
              out of your delivery requirements
           
              Put simply, if you want a partner who cares about your business,
              choose vanlinklogitics. Contact us in London, England to find
              out more about the services we can provide "
            </p>
          </div>
          <div className="text-center">
            <a
              href=""
              className="text-white font-semibold bg-orange-500 p-5 px-8 rounded-md"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default service;
