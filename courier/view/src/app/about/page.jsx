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
          <div className=" text-2xl text-center  Font-semibold   font-serif   font-semibold absolute top-[33%] left-[%] rounded-lg text-white ">
            <div className=" relative uppercase    font-semibold  sidetip p-4 rounded-r-2xl  ">
              <p className=" p-4 drop-shadow-xl   rounded-md">
                {" "}
                Provide Services{" "}
              </p>
              <p className=" drop-shadow-xl  rounded-md">ALL Over Uk</p>
            </div>
          </div>
        </div>
        <div className="bg-orange-100">
          <div className="flex  items-center flex-col md:flex-row gap-10 md:gap-20 p-10 py-20 w-11/12 mx-auto">
            <div className="w-full">
              <div className="space-y-1">
                <p>WE STARTED WITH A SIMPLE IDEA.</p>
                <p className="text-orange-600 font-bold text-3xl drop-shadow">
                  COMPANY OVERVIEW
                </p>
              </div>
              <div className="text-justify py-3">
                <p>
                  From Urgent Deliveries to Manufacturing Support: VanLink
                  Logistics was born in 2019 with a mission to keep the UK's
                  manufacturing industry moving. We started by providing
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
        <div className="p-10 bg-orange-300">
          <div className=" w-11/12 mx-auto">
            <div className=" font-semibold text-center">
              <p className="drop-shadow-xl "> OUR VALUES</p>
              <p className="text-3xl drop-shadow-md ">
                CORE <span className="text-orange-500">VALUES</span>
              </p>
            </div>
            <div className=" py-10 grid md:grid-cols-2 grid-cols-1 gap-y-10 gap-x-20 ">
              <div className=" p-6 rounded-md bg-orange-200 hover:bg-orange-100 hover:shadow-md">
                <p className="text-2xl font-bold">
                  Full, Part, and Consolidated Loads{" "}
                </p>
                <p>
                  Our dedicated fleet of vehicles delivers full, partial, and
                  consolidated loads across every region of the UK.
                </p>
              </div>
              <div className=" p-6 rounded-md bg-orange-200 hover:bg-orange-100 hover:shadow-md">
                <p className="text-2xl font-bold">Palletforce Equipments </p>
                <p>
                  Sending smaller shipments of fewer than 10 pallets used to be
                  an expensive business, but van link logistics provides the
                  greatest alternatives,
                </p>
              </div>
              <div className=" p-6 rounded-md bg-orange-200 hover:bg-orange-100 hover:shadow-md">
                <p className="text-2xl font-bold">
                  European Transport Logistics
                </p>
                <p>
                  With our trusted and well vetted network of partners, we
                  commit to delivering your goods on the same day so that you
                  can track them and receive them
                </p>
              </div>
              <div className=" p-6 rounded-md bg-orange-200 hover:bg-orange-100 hover:shadow-md">
                <p className="text-2xl font-bold">
                  Our customers is our top priority{" "}
                </p>
                <p>
                  {" "}
                  We will deliver your items on the same day, anywhere in the
                  United Kingdom, we are committed to providing you with the
                  greatest transport and logistics services.
                </p>
              </div>
              <div className=" p-6 rounded-md bg-orange-200 hover:bg-orange-100 hover:shadow-md">
                <p className="text-2xl font-bold">
                  Transport Logistics service{" "}
                </p>
                <p>
                  Since 1973, Vanlink Logistics has been the most trustworthy
                  transport and logistics service in the entire United Kingdom.
                </p>
              </div>
              <div className=" p-6 rounded-md bg-orange-200 hover:bg-orange-100 hover:shadow-md">
                <p className="text-2xl font-bold">Customer Focus </p>
                <p>We treat each customer as our only customer</p>
                <p>We seek to exceed customer expectations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
