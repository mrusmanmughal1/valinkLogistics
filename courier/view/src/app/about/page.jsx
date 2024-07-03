import Image from "next/image";
import React from "react";
import aboutus from "../../Assets/5.jpg";
import aboutsecond from "../../Assets/6.jpg";

const about = () => {
  return (
    <div>
      <div className="">
        <div className=" h-screen overflow-hidden relative">
          <Image
            src={aboutsecond}
            alt="About us page "
            className="  w-full h-screen object-cover"
          />
        </div>
        <div className=" text-2xl text-center slide-right  Font-semibold   font-serif   font-semibold      text-white ">
          <div className=" relative uppercase    font-semibold  bg-blue-primary p-4     ">
            <p className=" p-4 drop-shadow-xl   rounded-md">
              {" "}
              Swift Deliveries{" "}
            </p>
            <p className=" drop-shadow-xl  rounded-md">
              Fast and efficient delivery services across the UK.
            </p>
          </div>
        </div>
        <div className="bg-">
          <div className="flex  items-center flex-col md:flex-row gap-10 md:gap-20 p-10 py-20 w-11/12 mx-auto">
            <div className="w-full">
              <div className="space-y-1">
                <p>WE STARTED WITH A SIMPLE IDEA.</p>
                <p className="text-blue-primary font-bold text-3xl drop-shadow">
                  From Urgent Deliveries to Manufacturing Support
                </p>
              </div>
              <div className="text-justify py-3">
                <p>
                  VanLink Logistics was born in 2019 with a mission to keep the
                  UK's manufacturing industry moving. We started by providing
                  refrigerated van services to KFC, and quickly expanded our
                  fleet to support a wider range of needs. Today, we deliver
                  everything from single documents to full pallets, ensuring
                  critical items reach their destinations swiftly and securely.
                  Your Reliable Same Day Delivery Experts: Our highly skilled
                  and professional team is dedicated to exceeding your
                  expectations. Every member utilizes personal protective
                  equipment for safety, and our entire fleet is covered by
                  comprehensive goods in transit insurance for peace of mind.
                </p>
                <p>
                  {" "}
                  Experience the VanLink Difference: We offer a variety of
                  services to cater to your specific needs:
                </p>
                <p>
                  {" "}
                  Full, Part, and Consolidated Loads: Our dedicated fleet
                  handles deliveries of all sizes, ensuring efficient
                  transportation across the UK. Palletforce Expertise: Sending
                  smaller pallet shipments can be expensive. VanLink Logistics
                  provides cost-effective solutions for your smaller freight
                  needs. Customer-Centric Approach: At VanLink Logistics, our
                  customers are our top priority. We treat each client with the
                  utmost respect and strive to exceed expectations on every
                  delivery.
                </p>
              </div>
            </div>
            <div className="w-full">
              <Image src={aboutus} alt="" />
            </div>
          </div>
        </div>
        <div className="p-10 py-20 bg-blue-primary">
          <div className=" w-11/12 mx-auto">
            <div className=" font-semibold text-center">
              <p className="drop-shadow-xl text-white "> OUR VALUES</p>
              <p className="text-3xl text-white drop-shadow-md ">
                CORE <span className="text">VALUES</span>
              </p>
            </div>
            <div className=" py-10 grid md:grid-cols-2 grid-cols-1 gap-y-10 gap-x-20 ">
            
              <div className=" p-6 rounded-md bg-white hover:bg-bl hover:-translate-y-1 duration-500  hover:shadow-md">
                <p className="text-2xl font-bold">
                  Full, Part, and Consolidated Loads{" "}
                </p>
                <p>
                  Our dedicated fleet handles deliveries of all sizes, ensuring
                  efficient transportation across the UK.
                </p>
              </div>
              <div className=" p-6 rounded-md bg-white hover:-translate-y-1 duration-500 ">
                <p className="text-2xl font-bold">Palletforce Expertise</p>
                <p>
                  Sending smaller pallet shipments can be expensive. VanLink
                  Logistics provides cost-effective solutions for your smaller
                  freight needs.
                </p>
              </div>
              <div className=" p-6 rounded-md bg-white  hover:-translate-y-1 duration-500  hover:shadow-md">
                <p className="text-2xl font-bold">
                  Experience the VanLink Difference
                </p>
                <p>
                  We offer a variety of services to cater to your specific
                  needs.
                </p>
              </div>
              <div className=" p-6 rounded-md bg-white hover:-translate-y-1 duration-500 ">
                <p className="text-2xl font-bold">Customer-Centric Approach</p>
                <p>
                  {" "}
                  At VanLink Logistics, our customers are our top priority. We
                  treat each client with the utmost respect and strive to exceed
                  expectations on every delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
