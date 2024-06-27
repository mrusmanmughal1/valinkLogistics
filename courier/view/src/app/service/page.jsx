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
          <div className="text-bold font-serif text-3xl text-blue-primary drop-shadow-xl ">
            Fast & Reliable Same Day Delivery: Choose the Perfect Service for
            You (UK).
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
      <div className="py-14 bg-blue-50">
        <div className="w-3/4 flex justify-center flex-col md:flex-row gap-10 mx-auto">
          <div className="border-blue-primary    p-8    border-4 shadow-lg">
            <div className=" text-center space-y-3">
              <p className="text-2xl font-bold  ">Next Day Delivery</p>
              <p className="">
                Explore global opportunities with our international shipping
                services. Enjoy fast, reliable door-to-door delivery worldwide
                at competitive rates
              </p>
            </div>
          </div>
          <div className="border-blue-primary p-8  shadow-lg   border-4">
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
      <div className="py-20 bg-blu00">
        <div className="w-3/4 space-y-8 text-center  mx-auto p-8">
          <p className="text-3xl font-semibold drop-shadow-lg text-blue-primary font-serif">
            Why Choose Us?
          </p>
          <div className="text-center  ">
            <p className="  drop-shadow-xl capitalize text-lg py-2 font-serif  text-justify">
              We Deliver When You Need It: VanLink Logistics offers a
              comprehensive range of same-day delivery options to fit your
              specific needs and budget. Whether you require urgent delivery
              within hours or prefer next-day service for less time-sensitive
              shipments, we have you covered. You can even schedule deliveries
              in advance for future peace of mind. The Right Vehicle for Every
              Delivery: Our diverse fleet includes cars, small vans, SWB, MWB,
              LWB vans, and Luton vans, ensuring we have the perfect vehicle for
              your parcel or pallet, regardless of size or weight. Get a quote
              and specify your requirements to see which option best suits your
              needs! Transparent Pricing: We believe in upfront and transparent
              pricing. Our quote system considers factors like distance,
              urgency, and vehicle size to provide an accurate estimate before
              you book. No hidden fees, just reliable delivery at a competitive
              price. Specialized Handling: We understand that some deliveries
              require extra care. Our team is experienced in handling fragile
              items and medical supplies, ensuring your shipment arrives safely
              and securely. Let us know your specific requirements, and we'll
              tailor our service accordingly. Get a Quote & Real-Time Support:
              Our user-friendly online quote system provides instant pricing
              based on your delivery details. Need help or have questions? Our
              real-time customer support team is always available to assist you.
            </p>
          </div>
          <div className="text-center">
            <Link
              href="/client"
              className="text-white font-semibold bg-blue-primary p-5 px-8 rounded-md"
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
