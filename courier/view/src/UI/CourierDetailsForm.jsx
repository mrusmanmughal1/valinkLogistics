"use client";
import React from "react";
import { useFormik } from "formik";
import { ProvideDetails } from "@/app/helpers/FormsValidations";
import { POST_QUOTATION_FORM } from "@/Config/Constants";
import { ListPostalCodes } from "@/Context/PostalCodeContext";

const CourierDetailsForm = ({ selected, setPage }) => {
  const { typeofVan, _id } = selected;

  const { ALLPostalCodes } = ListPostalCodes();
  const { Collection, Delivery } = ALLPostalCodes;

  const CourierDetails = {
    collectionName: "",
    collectionAddress: "",
    CollectionPostCode: Collection,
    collectionDate: "",
    collectionTime: "",
    collectionContact: "",
    collectionNumber: "",
    collectionDetail: "",
    collectionInstruction: "",
    selectedVan: _id,
    deliveryName: "",
    deliveryAddress: "",
    deliveryPostCode: Delivery,
    deliveryDate: "",
    deliveryTime: "",
    deliveryContact: "",
    deliveryNumber: "",
    bookerName: "",
    bookerNumber: "",
    bookerEmail: "",
    deliveryInstruction: "",
  };

  const handleclick = (val) => {
    setPage(val);
  };

  //

  const handleSubmitt = async (val) => {
    try {
      const response = await fetch(POST_QUOTATION_FORM, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(val),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Success:", data);
      // Handle success (e.g., update state, display a message, etc.)
    } catch (error) {
      console.error("Error:", error);
      // Handle error (e.g., display an error message)
    }
  };
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: CourierDetails,
    onSubmit: (values, action) => {
      console.log(values , 'ssssss');
      
      // action.resetForm();
      handleSubmitt(values);
    },
    validationSchema: ProvideDetails,
  });
  return (
    <div className=" p-10 md:p-20  bg-blue-100">
      <div className=" text-center font-extrabold text-3xl uppercase text-blue-primary drop-shadow-md p-4 md:p-4">
        Please Provide Detail's
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex md:flex-row flex-col gap-14 justify-center">
          <div className=" capitalize">
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Company Name(Collection)
              </label>
              <input
                className={`${
                  errors.collectionName && " border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
                onChange={handleChange}
                value={values.collectionName}
                name="collectionName"
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Collection Address*
              </label>
              <input
                name="collectionAddress"
                onChange={handleChange}
                value={values.collectionAddress}
                className={`${
                  errors.collectionAddress && " border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Collection Post code *
              </label>
              <input
                name="CollectionPostCode"
                disabled={true}
                onChange={handleChange}
                value={values.CollectionPostCode}
                className={`${
                  errors.CollectionPostCode && " border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Collection Date*
              </label>
              <input
                type="date"
                name="collectionDate"
                onChange={handleChange}
                value={values.collectionDate}
                className={`${
                  errors.collectionDate && " border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Collection Time*
              </label>
              <input
                type="time"
                name="collectionTime"
                onChange={handleChange}
                value={values.collectionTime}
                className={`${
                  errors.collectionTime && " border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Contact Name (Collection)
              </label>
              <input
                name="collectionContact"
                onChange={handleChange}
                value={values.collectionContact}
                className={`${
                  errors.collectionContact && " border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Contact Number (Collection)*
              </label>
              <input
                name="collectionNumber"
                onChange={handleChange}
                value={values.collectionNumber}
                className={`${
                  errors.collectionNumber && " border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Collections Details *
              </label>
              <input
                name="collectionDetail"
                onChange={handleChange}
                value={values.collectionDetail}
                className={`${
                  errors.collectionDetail && " border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                selected Van*
              </label>
              <input
                disabled={true}
                value={typeofVan}
                className={`${
                  errors.selectedVan && " border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Collections Instructions *
              </label>
              <textarea
                name="collectionInstruction"
                cols={10}
                rows={10}
                onChange={handleChange}
                value={values.collectionInstruction}
                className={`${
                  errors.collectionInstruction && " border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
              />
            </div>
          </div>

          {/* second  */}

          <div className=" capitalize">
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Company Name (Delivery)*
              </label>
              <input
                className={`${
                  errors.deliveryName && " border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
                name="deliveryName"
                onChange={handleChange}
                value={values.deliveryName}
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Delivery Address*
              </label>
              <input
                className={`${
                  errors.deliveryAddress && " border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
                name="deliveryAddress"
                onChange={handleChange}
                value={values.deliveryAddress}
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Postal Code (Delivery)*
              </label>
              <input
                name="deliveryPostCode"
                disabled={true}
                className={`${
                  errors.deliveryPostCode && " border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
                onChange={handleChange}
                value={values.deliveryPostCode}
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Delivery Date*
              </label>
              <input
                type="date"
                name="deliveryDate"
                className={`${
                  errors.deliveryDate && " border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
                onChange={handleChange}
                value={values.deliveryDate}
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Delivery Time *
              </label>
              <input
                type="time"
                name="deliveryTime"
                className={`${
                  errors.deliveryTime && " border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
                onChange={handleChange}
                value={values.deliveryTime}
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Delivery Person Name
              </label>
              <input
                onChange={handleChange}
                value={values.deliveryContact}
                name="deliveryContact"
                className={`${
                  errors.deliveryContact && " border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Contact Number (Delivery)*
              </label>
              <input
                onChange={handleChange}
                value={values.deliveryNumber}
                name="deliveryNumber"
                className={`${
                  errors.deliveryNumber && " border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Booker Name*
              </label>
              <input
                name="bookerName"
                className={`${
                  errors.bookerName && " border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
                onChange={handleChange}
                value={values.bookerName}
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Booker Number*
              </label>
              <input
                name="bookerNumber"
                className={`${
                  errors.bookerNumber && " border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
                onChange={handleChange}
                value={values.bookerNumber}
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Booker Email ID*
              </label>
              <input
                name="bookerEmail"
                className={`${
                  errors.bookerEmail && " border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
                onChange={handleChange}
                value={values.bookerEmail}
              />
            </div>

            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Special Instructions (Delivery)
              </label>
              <textarea
                name="deliveryInstruction"
                cols={10}
                rows={6}
                onChange={handleChange}
                value={values.deliveryInstruction}
                className={`${
                  errors.deliveryInstruction && " border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
              />
            </div>
          </div>
        </div>
        {errors == {} && <p>ss</p>}
        {Object.keys(errors).length  && (
          <div
            className=" text-center
        pb-2 font-semibold text-red-700"
          >
            * Please Fill All the Missing Fields
          </div>
        )}

        <div className=" flex flex-row gap-4 font-semibold justify-center">
          <button
            className="text-white bg-blue-primary p-4 rounded-md"
            onClick={() => handleclick(2)}
          >
            Previous
          </button>
          <button
            type="submit"
            className="text-white bg-blue-primary p-4 rounded-md px-8"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourierDetailsForm;
