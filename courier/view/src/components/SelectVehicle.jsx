"use client";

import PlaceSearchForm from "@/UI/PlaceSearchForm";
import Image from "next/image";
import { ALL_Vehicles_API } from "@/Config/Constants";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "@/UI/Loader";
import one from "../Assets/Cars/cartest.png";
import two from "../Assets/Cars/2.png";
import three from "../Assets/Cars/3.png";
import four from "../Assets/Cars/4.png";
import five from "../Assets/Cars/5.png";

const SelectVehicle = ({ setVehicle, selected, setDIstance, setPage }) => {
  const cars = [one, two, three, four, five];
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await fetch(ALL_Vehicles_API, { signal });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  if (isLoading)
    return (
      <div className=" py-20">
        {" "}
        <Loader />
      </div>
    );
  if (!data) return <p className="text-center  text-4xl font-bold  flex justify-center items-center  py-20 uppercase text-orange-500">Server Busy. Try Again Later , Thank You</p>;

  return (
    <div className=" py-10 px-4 md:py-20 md:px-20 bg-[#a2b7d423]">
      <div className="w-11/12 mx-auto space-y-10">
        <div className="flex justify-center flex-wrap">
          <p className="text-white text-sm md:text-xl  px-10 rounded-md py-4 uppercase flex font-semibold text-center bg-blue-primary">
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
                  selectedvan && "bg-[#EDA802] "
                } space-y-4 text-center cursor-pointer hover:bg-[#EDA802]   hover:text-white rounded-md py-4 px-8`}
              >
                <div
                  className={` ${
                    selected?._id == val?._id && "-translate-y-3 "
                  } hover:-translate-y-3 transition-all duration-700 flex flex-col justify-center items-center`}
                >
                  <Image
                    src={one}
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
          <PlaceSearchForm
            setPage={setPage}
            setDIstance={setDIstance}
            selected={selected}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectVehicle;
