import Image from "next/image";
import React from "react";

const SelectVehicle = () => {
  const Vehicles = [
    {
      img: "",
      name: "",
      details: "",
    },
    {
      img: "",
      name: "",
      details: "",
    },
    {
      img: "",
      name: "",
      details: "",
    },
    {
      img: "",
      name: "",
      details: "",
    },
    {
      img: "",
      name: "",
      details: "",
    },
  ];
  return (
    <div className=" py-10 px-4 md:py-20 md:px-20 bg-orange-200">
      <div className="w-11/12 mx-auto space-y-10">
        <div className="flex justify-center flex-wrap">
          <p className="text-white text-sm md:text-xl  px-10 rounded-md py-4 uppercase flex font-semibold text-center bg-orange-600">
            Please Select The Vehicle You Need
          </p>
        </div>

        <div className="flex  justify-around ">
          <div className="space-y-4 text-center hover:bg-orange-400 hover:text-white rounded-md py-4 px-8">
            <div className="hover:-translate-y-3 transition-all duration-700">
              <Image
                src="https://www.couriernet.co.uk/wp-content/uploads/2019/12/car-bg-preview-300-n.png"
                width={250}
                height={150}
                alt="Car"
                className="drop-shadow-lg"
              />
              <p className=" text-lg font-semibold">Car</p>
              <p className="text-xs font-semibold  ">Small Parcels Only</p>
            </div>
          </div>
          <div className="space-y-4 text-center hover:bg-orange-600 hover:text-white rounded-md py-4 px-8 ">
            <div className="hover:-translate-y-3 transition-all duration-700 ">
              <Image
                src="https://www.couriernet.co.uk/wp-content/uploads/2019/12/car-bg-preview-300-n.png"
                width={250}
                height={150}
                alt="Car"
                className="drop-shadow-lg"

              />
              <p className=" text-lg font-semibold ">Small Van </p>
              <p className="text-xs font-semibold  ">Up to 1.3 Meters</p>
            </div>
          </div>
          <div className="space-y-4 text-center hover:bg-orange-600 hover:text-white rounded-md py-4 px-8">
            <div className="hover:-translate-y-3 transition-all duration-700">
              <Image
                src="https://www.couriernet.co.uk/wp-content/uploads/2019/12/van-bg-preview300b.png"
               
                width={250}
                height={150}
                alt="Car"
                className="drop-shadow-lg"

              />
              <p className=" text-lg font-semibold">Large Van</p>
              <p className="text-xs font-semibold  ">Up to 3 Meter</p>
            </div>
          </div>
          <div className="space-y-4 text-center hover:bg-orange-600 hover:text-white rounded-md py-4 px-8">
            <div className="hover:-translate-y-3 transition-all duration-700">
              <Image
                src="https://www.couriernet.co.uk/wp-content/uploads/2019/12/van-bg-preview300b.png"
                width={250}
                height={150}
                alt="Car"
                className="drop-shadow-lg"

              />
              <p className=" text-lg font-semibold"> Extra Large Van</p>
              <p className="text-xs font-semibold  ">Up To 4 Meter</p>
            </div>
          </div>
          <div className="space-y-4 text-center hover:bg-orange-600 hover:text-white  rounded-md py-4 px-8">
            <div className="hover:-translate-y-3 transition-all duration-700">
              <Image
                src="https://www.couriernet.co.uk/wp-content/uploads/2019/12/van-bg-preview300b.png"
                width={250}
                height={150}
                alt="Car"
                className="drop-shadow-lg"

              />
              <p className=" text-lg font-semibold"> Luton Van</p>
              <p className="text-xs font-semibold  ">
                Up To 4.1 Meter + Tail Lift
              </p>
            </div>
          </div>
        </div>
        <div className=" w-11/12 md:w-1/2   mx-auto">
          <form action="">
            <div className=" space-y-6">
              <div className="flex gap-5 flex-col md:flex-row ">
                <div className="flex flex-col gap-2 w-full mx-auto ">
                  <label htmlFor="" className="font-semibold text-sm">
                    Full Collection Postcode*
                  </label>
                  <input
                    type="text"
                    className="p-2 rounded-md outline-orange-300"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="" className="font-semibold text-sm">
                    Full Delivery Postcode*
                  </label>
                  <input
                    type="text"
                    className="p-2 rounded-md outline-orange-300"
                  />
                </div>
              </div>
              <div className="text-center">
                <button className="text-white bg-orange-600 py-4 px-6 rounded-md font-semibold">
                  Get a Quote
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SelectVehicle;
