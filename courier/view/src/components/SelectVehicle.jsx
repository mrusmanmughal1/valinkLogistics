"use client";

import PlaceSearchForm from "@/UI/PlaceSearchForm";
import Image from "next/image";
import { ALL_Vehicles_API } from "@/Config/Constants";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "@/UI/Loader";

const SelectVehicle = ({ setVehicle, selected, setDIstance }) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(ALL_Vehicles_API)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  // space-y-4 text-center hover:bg-orange-600 hover:text-white rounded-md py-4 px-8

  if (isLoading)
    return (
      <div className=" py-20">
        {" "}
        <Loader />
      </div>
    );
  if (!data) return <p>No profile data</p>;
  console.log(data);

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
            const { typeofVan, idealUses } = val;
            const selectedvan = selected?._id == val?._id;
            return (
              <div
                key={i}
                onClick={() => setVehicle(val)}
                className={`${
                  selectedvan && "bg-orange-600 "
                } space-y-4 text-center cursor-pointer hover:bg-orange-600 hover:text-white rounded-md py-4 px-8`}
              >
                <div
                  className={` ${
                    selected?._id == val?._id && "-translate-y-3 "
                  } hover:-translate-y-3 transition-all duration-700 flex flex-col justify-center items-center`}
                >
                  <Image
                    src="https://www.couriernet.co.uk/wp-content/uploads/2019/12/car-bg-preview-300-n.png"
                    width={250}
                    height={150}
                    alt="Car"
                    className="drop-shadow-lg"
                  />
                  <p
                    className={`${
                      selectedvan && " text-white"
                    } text-lg font-semibold`}
                  >
                    {typeofVan}
                  </p>
                  <p
                    className={`${
                      selectedvan && " text-white"
                    } text-xs font-semibold`}
                  >
                    {idealUses}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="">
          <PlaceSearchForm setDIstance={setDIstance} selected={selected} />
        </div>
      </div>
    </div>
  );
};

export default SelectVehicle;
