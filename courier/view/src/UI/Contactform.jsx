import React from "react";

const Contactform = () => {
  return (
    <div className="w-11/12 mx-auto p-16 ">
      <div className="text-center uppercase text-3xl font-semibold ">
        Contact Us
      </div>
      <div className="flex py-10  ">
        <div className="w-full shadow-lg p-10 bg-orange-400 text-center flex-col justify-between flex ">
            <div className="space-y-2">

                <p className="text-2xl font-bold">Service Area</p>
                <p>We proudly serve clients in the United Kingdom.</p>
            </div>
          <div className="text-center">
            <p className="text-2xl font-bold">Contact Information</p>
            <p className="font-semibold">Couriernet Limited</p>
            <p>UNIT – R3, 560-568 High Road</p>
            <p>London, England N17 9TA</p>

            <p>Phone: 02033711919</p>
            <p>Email: office@couriernet.co.uk</p>
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
