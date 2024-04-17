import Image from "next/image";
import React from "react";
import aboutus from "../../Assets/5.jpg";
import aboutsecond from "../../Assets/6.jpg";

const about = () => {
  return (
    <div>
      <div className="">
        <div className="  overflow-hidden relative ">
          <Image src={aboutsecond} alt="About us page " />
        </div>
        <div className="bg-orange-100">
          <div className="flex gap-20 p-10 w-11/12 mx-auto">
            <div className="w-full">
              <div className="space-y-1">
              <p>WE STARTED WITH A SIMPLE IDEA.</p>
              <p className="text-orange-600 font-bold text-3xl">
                COMPANY OVERVIEW
              </p>
              </div>
              <div className="text-justify py-3">
                <p>
                  Express Courier Link is highly professional skilled & reliable
                  Courier Service Provider Company which has been classified for
                  courier delivery service for any destination in Pakistan and
                  abroad.
                </p>
                <p>
                  {" "}
                  Our Organization is not only one of the biggest, but also one
                  of the most trusted in Pakistan. ECL has been providing
                  excellent courier services since 1992.
                </p>
                <p>
                  {" "}
                  Head office Based in Karachi with regional offices Lahore and
                  Islamabad. EXPRESS COURIER LINK – Offering
                  (Overnight-Overland-COD SERVICES) our Presence 300 Locations
                  in Pakistan & Overseas – UAE, Saudi Arabia, Bangladesh, Sri
                  Lanka, Hong Kong, Singapore, China.
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
              <p> OUR VALUES</p>
              <p className="text-3xl">
                CORE <span className="text-orange-500">VALUES</span>
              </p>
            </div>
            <div className=" py-10 grid grid-cols-2 gap-y-10 gap-x-20 ">
              <div className=" p-6 rounded-md bg-orange-200 hover:bg-orange-100">
                <p className="text-2xl font-bold">Customer Focus </p>
                <p>We treat each customer as our only customer</p>
                <p>We seek to exceed customer expectations</p>
              </div>
              <div className=" p-6 rounded-md bg-orange-200 hover:bg-orange-100">
                <p className="text-2xl font-bold">Customer Focus </p>
                <p>We treat each customer as our only customer</p>
                <p>We seek to exceed customer expectations</p>
              </div>
              <div className=" p-6 rounded-md bg-orange-200 hover:bg-orange-100">
                <p className="text-2xl font-bold">Customer Focus </p>
                <p>We treat each customer as our only customer</p>
                <p>We seek to exceed customer expectations</p>
              </div>
              <div className=" p-6 rounded-md bg-orange-200 hover:bg-orange-100">
                <p className="text-2xl font-bold">Customer Focus </p>
                <p>We treat each customer as our only customer</p>
                <p>We seek to exceed customer expectations</p>
              </div>
              <div className=" p-6 rounded-md bg-orange-200 hover:bg-orange-100">
                <p className="text-2xl font-bold">Customer Focus </p>
                <p>We treat each customer as our only customer</p>
                <p>We seek to exceed customer expectations</p>
              </div>
              <div className=" p-6 rounded-md bg-orange-200 hover:bg-orange-100">
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
