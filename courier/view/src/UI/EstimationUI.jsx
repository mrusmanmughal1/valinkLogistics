import React from "react";

const EstimationUI = () => {
  return (
    <div className="bg-orange-200 p-20 border-2">
      <div className="flex justify-center items-center   ">
        <div className="flex justify-center flex-col relative shadow-lg  shadow-orange-400">
          <div className="text-bold text-white font-bold bg-orange-500 rounded-md text-center text-2xl p-4">
            QUOTE DETAILS
          </div>
      <span class="animate-ping absolute inline-flex h-5  w-5 right-0 top-0  rounded-full bg-orange-400 opacity-75"></span>

          <div className=" space-y-2 border-orange-200  border-2 p-10 text-2xl text-center font-semibold">
            <p>The Quote Will be Delivered on Same Day </p>
            <p className="text-orange-700">Cost will be : $45.00</p>
            <p>(Quote Extending vat)</p>
            <p>Collection in 60 Minutes</p>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="flex justify-center gap-8 items-center">
            <button className="bg-orange-600 text-white rounded-md p-4">Previous</button>
            <button className="bg-orange-600 text-white rounded-md p-4 ">Next</button>
        </div>
      </div>
    </div>
  );
};

export default EstimationUI;
