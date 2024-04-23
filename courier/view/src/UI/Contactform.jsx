import React from "react";
import logo from "../Assets/Logo.png";
import Image from "next/image";


const Contactform = () => {
  return (
    <div className="w-11/12 mx-auto p-16 ">
      <div className="text-center uppercase text-3xl font-semibold drop-shadow-xl  ">
        Contact Us
      </div>
      <div className="flex py-10  ">
        <div className="w-full shadow-lg p-10 bg-orange-400 text-center flex-col justify-between flex ">
            <div className="space-y-2">

                <p className="text-2xl font-bold">Service Area</p>
                <p>We proudly serve clients in the United Kingdom.</p>
            </div>
            <div className=" flex justify-center">
            <Image src={logo} width={170} height={170} alt="Logo" className="drop-shadow-2xl"/>

            </div>
          <div className="text-center">
            <p className="text-2xl font-bold">Contact Information</p>
            <p className="font-semibold">Couriernet Limited</p>
            <p>Vanlink , 4th floors, 84 Salop St,</p>
            <p>Wolverhampton</p>

            <p>Phone: +44 (0)7860 246773</p>
            <p>Email: info@vanlinklogitics.co.uk</p>
          </div>
        </div>
        <div className="w-full  shadow-lg p-10 bg-orange-50  ">
          <div className="">
            <div className="text-center text-2xl font-semibold">
              {" "}
              Query Form
            </div>
            <form>
              <div className=" space-y-2">
                <div className="">
                  <p className="font-bold text-lg">Name</p>
                  <input type="text" className="w-full border rounded-md p-2" />
                </div>
                <div className="">
                  <p className="font-bold text-lg">Phone</p>
                  <input
                    type="text"
                    className="w-full  border rounded-md p-2"
                  />
                </div>
                <div className="">
                  <p className="font-bold text-lg">Email</p>
                  <input
                    type="text"
                    className="w-full  border rounded-md p-2"
                  />
                </div>
                <div className="">
                  <p className="font-bold text-lg">Message</p>
                  <textarea
                    rows={6}
                    cols={10}
                    type="text"
                    className="w-full  border rounded-md"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
