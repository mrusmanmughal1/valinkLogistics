import React from "react";

const CourierDetailsForm = () => {
  return (
    <div className=" p-10 md:p-20  bg-orange-200">
      <div className=" text-center font-extrabold text-3xl uppercase text-orange-600 drop-shadow-md p-4 md:p-4">
        Please Provide Detail's
      </div>
      <div className="flex md:flex-row flex-col gap-14 justify-center">
        <div className="">
          <div className=" space-y-1 py-2 font-semibold ">
            <label htmlFor="" className="ps-2">Company Name (Collection)</label>
            <input className="w-full rounded-md border border-orange-500 p-2" />
          </div>
          <div className=" space-y-1 py-2 font-semibold ">
            <label htmlFor="" className="ps-2">Collection Address</label>
            <input className="w-full rounded-md border border-orange-500 p-2" />
          </div>
          <div className=" space-y-1 py-2 font-semibold ">
            <label htmlFor="" className="ps-2">Post code (Collection)</label>
            <input className="w-full rounded-md border border-orange-500 p-2" />
          </div>
          <div className=" space-y-1 py-2 font-semibold ">
            <label htmlFor="" className="ps-2">Collection Date</label>
            <input className="w-full rounded-md border border-orange-500 p-2" />
          </div>
          <div className=" space-y-1 py-2 font-semibold ">
            <label htmlFor="" className="ps-2">Company Name</label>
            <input className="w-full rounded-md border border-orange-500 p-2" />
          </div>
          <div className=" space-y-1 py-2 font-semibold ">
            <label htmlFor="" className="ps-2">Contact Name (Collection)*</label>
            <input className="w-full rounded-md border border-orange-500 p-2" />
          </div>
          <div className=" space-y-1 py-2 font-semibold ">
            <label htmlFor="" className="ps-2">Contact Number (Collection)*</label>
            <input className="w-full rounded-md border border-orange-500 p-2" />
          </div>
          <div className=" space-y-1 py-2 font-semibold ">
            <label htmlFor="" className="ps-2">Items Details*</label>
            <input className="w-full rounded-md border border-orange-500 p-2" />
          </div>
          <div className=" space-y-1 py-2 font-semibold ">
            <label htmlFor="" className="ps-2">Vehicle*</label>
            <input className="w-full rounded-md border border-orange-500 p-2" />
          </div>
          <div className=" space-y-1 py-2 font-semibold ">
            <label htmlFor="" className="ps-2">Company Name</label>
            <textarea
              cols={10}
              rows={10}
              className="w-full rounded-md border border-orange-500 p-2"
            />
          </div>
        </div>

        {/* second  */}
        <div className="">
          <div className=" space-y-1 py-2 font-semibold ">
            <label htmlFor="" className="ps-2">Company Name (Delivery)*</label>
            <input className="w-full rounded-md border border-orange-500 p-2" />
          </div>
          <div className=" space-y-1 py-2 font-semibold ">
            <label htmlFor="" className="ps-2">Delivery Address*</label>
            <input className="w-full rounded-md border border-orange-500 p-2" />
          </div>
          <div className=" space-y-1 py-2 font-semibold ">
            <label htmlFor="" className="ps-2">Post code (Delivery)*</label>
            <input className="w-full rounded-md border border-orange-500 p-2" />
          </div>
          <div className=" space-y-1 py-2 font-semibold ">
            <label htmlFor="" className="ps-2">Delivery Date*</label>
            <input className="w-full rounded-md border border-orange-500 p-2" />
          </div>
          <div className=" space-y-1 py-2 font-semibold ">
            <label htmlFor="" className="ps-2">Contact Name (Delivery)*</label>
            <input className="w-full rounded-md border border-orange-500 p-2" />
          </div>
          <div className=" space-y-1 py-2 font-semibold ">
            <label htmlFor="" className="ps-2">Contact Number (Delivery)*</label>
            <input className="w-full rounded-md border border-orange-500 p-2" />
          </div>
          <div className=" space-y-1 py-2 font-semibold ">
            <label htmlFor="" className="ps-2">Booker Name*</label>
            <input className="w-full rounded-md border border-orange-500 p-2" />
          </div>
          <div className=" space-y-1 py-2 font-semibold ">
            <label htmlFor="" className="ps-2">Booker Number*</label>
            <input className="w-full rounded-md border border-orange-500 p-2" />
          </div>
          <div className=" space-y-1 py-2 font-semibold ">
            <label htmlFor="" className="ps-2">Booker Email ID*</label>
            <input className="w-full rounded-md border border-orange-500 p-2" />
          </div>
          
          <div className=" space-y-1 py-2 font-semibold ">
            <label htmlFor="" className="ps-2">Special Instructions (Delivery)</label>
            <textarea
              cols={10}
              rows={10}
              className="w-full rounded-md border border-orange-500 p-2"
            />
          </div>
        </div>
      </div>
      <div className=" flex flex-row gap-4 font-semibold justify-center">
        <button className="text-white bg-orange-600 p-4 rounded-md">Previous</button>
        <button className="text-white bg-orange-600 p-4 rounded-md">Next</button>

      </div>
    </div>
  );
};

export default CourierDetailsForm;
