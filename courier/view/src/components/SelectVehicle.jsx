"use client";

import PlaceSearchForm from "@/UI/PlaceSearchForm";
import Image from "next/image";
import { ALL_Vehicles_API } from "@/Config/Constants";
import { useState } from "react";

async function getData() {
  const res = await fetch(ALL_Vehicles_API);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const SelectVehicle = async () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const data = await getData();

  return (
    <div className=" py-10 px-4 md:py-20 md:px-20 bg-orange-200">
      <div className="w-11/12 mx-auto space-y-10">
        <div className="flex justify-center flex-wrap">
          <p className="text-white text-sm md:text-xl  px-10 rounded-md py-4 uppercase flex font-semibold text-center bg-orange-600">
            Please Select The Vehicle You Need
          </p>
        </div>

        <div className="flex md:flex-row flex-col md:flex-wrap lg:flex-nowrap justify-around ">
          {data.map((val, i) => {
            console.log(val);
            const { typeofVan, idealUses } = val;
            return (
              <div
                key={i}
                onClick={() => alert(val)}
                className="space-y-4 text-center hover:bg-orange-600 hover:text-white rounded-md py-4 px-8"
              >
                <div className="hover:-translate-y-3 transition-all duration-700 flex flex-col justify-center items-center">
                  <Image
                    src="https://www.couriernet.co.uk/wp-content/uploads/2019/12/car-bg-preview-300-n.png"
                    width={250}
                    height={150}
                    alt="Car"
                    className="drop-shadow-lg"
                  />
                  <p className=" text-lg font-semibold">{typeofVan}</p>
                  <p className="text-xs font-semibold  ">{idealUses}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="">
          <PlaceSearchForm />
        </div>
      </div>
    </div>
  );
};

export default SelectVehicle;
