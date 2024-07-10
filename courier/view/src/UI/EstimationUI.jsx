"use Client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

import Image from "next/image";
import logo from "../Assets/Cars/1.png";

const EstimationUI = ({ Distance = "", setPage, selected = "" }) => {
  const [Km, SetKm] = useState();
  // charges
  const { mileRate, minCharge } = selected;

  console.log("selected", mileRate, minCharge);
  const handleClick = (val) => {
    setPage(val);
  };

  useEffect(() => {
    // if value is  Km then cover to miles
    const ToMiles = (val) => {
      console.log("if working");
      const hasKiloMetters = val?.includes("km");

      if (hasKiloMetters) {
        const distanceValue = parseInt(val?.match(/\d+/)[0], 10);

        const DistanceInMiles = distanceValue * 0.621371;
        console.log(DistanceInMiles, " distanice in miles");
        SetKm(DistanceInMiles.toFixed());
      } else {
        const distanceValue = parseInt(val?.match(/\d+/)[0], 10);
        console.log(distanceValue, " if not ");

        return SetKm(distanceValue);
      }
    };

    ToMiles(Distance);
  });

  const calulateRate = Km * mileRate;
  const rate = calulateRate?.toFixed(1);

  if (!Distance) return <Loader />;
  return (
    <div className="bg-blue-50 p-10 md:p-20  border-2">
      <div className="flex justify-center items-center     ">
        <div className="flex justify-center flex-col relative    border ">
          <div className="text-bold rounded-t-md  font-bold     bg-blue-200  text-center   md:text-2xl p-4">
            Quotation Information
          </div>
          <div className="flex">
            <div className="w-full bg-blue-100 flex flex-col justify-center items-center py-10 px-20">
              <Image
                src={selected?.image?.src}
                width={250}
                height={250}
                alt="Logo"
                className="drop-shl  "
              />
              <div className=" space-y-2   text-black     text-lg md:text-xl text-center font-semibold">
                <p>The Quote Will be Delivered on Same Day </p>
                <p className="text-blue-primary text-3xl font-bold">
                  Total Cost : £{rate < minCharge ? minCharge : rate}
                </p>
                <p className="text-xs ">(Quote Excluding vat)</p>
                <p className="text-base text-yellowcolor  p-2">
                  Collection in 60 Minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="flex justify-center gap-8 items-center">
          <button
            className="bg-blue-primary text-white rounded-md p-4"
            onClick={() => handleClick(1)}
          >
            Previous
          </button>
          <button
            className="bg-blue-primary text-white rounded-md p-4 px-8 "
            onClick={() => handleClick(3)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EstimationUI;
