"use client";
import React from "react";
import { useFormik } from "formik";
import { ProvideDetails } from "@/app/helpers/FormsValidations";
import { POST_QUOTATION_FORM } from "@/Config/Constants";
import { ListPostalCodes } from "@/Context/PostalCodeContext";

const CourierDetailsForm = ({ selected, setPage, Distance }) => {
  const { typeofVan, _id } = selected;
  console.log(selected);

  const { ALLPostalCodes } = ListPostalCodes();
  const { Collection, Delivery } = ALLPostalCodes;

  const CourierDetails = {
    collectionDetails: {
      name: "",
      address: Collection,
      postCode: "asdas",
      date: "",
      time: "",
      contact: "",
      phoneNumber: "",
      additionalInstructions: "",
    },
    deliveryDetails: {
      name: "",
      address: Delivery,
      postCode: "asd",
      date: "",
      time: "",
      contact: "",
      phoneNumber: "",
      additionalInstructions: "",
    },
    bookerDetails: {
      name: "",
      phoneNumber: "",
      email: "",
    },
    selectedVan: _id,
    quoteAmmount: 22,
    quoteDistance: 22,
    notes: "",
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
      // action.resetForm();
      console.log(values);
      handleSubmitt(values);
    },
    // validationSchema: ProvideDetails,
  });
  return (
    <div className=" p-10 md:p-20  bg-blue-100">
      <div className=" text-center font-extrabold text-3xl uppercase text-blue-primary drop-shadow-md p-4 md:p-4">
        Please Provide Detail's
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex md:flex-row flex-col gap-14 justify-center">
          <div className="capitalize">
            <div className="space-y-1 py-2 font-semibold">
              <label htmlFor="collectionDetails.name" className="ps-2">
                Company Name (Collection)
              </label>
              <input
                className={`${
                  errors.collectionDetails?.name && "border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
                onChange={handleChange}
                value={values.collectionDetails.name}
                name="collectionDetails.name"
              />
            </div>
            <div className="space-y-1 py-2 font-semibold">
              <label htmlFor="collectionDetails.address" className="ps-2">
                Collection Address*
              </label>
              <input
                name="collectionDetails.address"
                onChange={handleChange}
                disabled={true}
                value={values.collectionDetails.address}
                className={`${
                  errors.collectionDetails?.address && "border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
              />
            </div>
            <div className="space-y-1 py-2 font-semibold">
              <label htmlFor="collectionDetails.postCode" className="ps-2">
                Collection Post Code *
              </label>
              <input
                name="collectionDetails.postCode"
                disabled={true}
                onChange={handleChange}
                value={values.collectionDetails.postCode}
                className={`${
                  errors.collectionDetails?.postCode &&
                  "border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
              />
            </div>
            <div className="space-y-1 py-2 font-semibold">
              <label htmlFor="collectionDetails.date" className="ps-2">
                Collection Date*
              </label>
              <input
                type="date"
                name="collectionDetails.date"
                onChange={handleChange}
                value={values.collectionDetails.date}
                className={`${
                  errors.collectionDetails?.date && "border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
              />
            </div>
            <div className="space-y-1 py-2 font-semibold">
              <label htmlFor="collectionDetails.time" className="ps-2">
                Collection Time*
              </label>
              <input
                type="time"
                name="collectionDetails.time"
                onChange={handleChange}
                value={values.collectionDetails.time}
                className={`${
                  errors.collectionDetails?.time && "border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
              />
            </div>
            <div className="space-y-1 py-2 font-semibold">
              <label htmlFor="collectionDetails.contact" className="ps-2">
                Contact Name (Collection)
              </label>
              <input
                name="collectionDetails.contact"
                onChange={handleChange}
                value={values.collectionDetails.contact}
                className={`${
                  errors.collectionDetails?.contact && "border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
              />
            </div>
            <div className="space-y-1 py-2 font-semibold">
              <label htmlFor="collectionDetails.phoneNumber" className="ps-2">
                Contact Number (Collection)*
              </label>
              <input
                name="collectionDetails.phoneNumber"
                onChange={handleChange}
                value={values.collectionDetails.phoneNumber}
                className={`${
                  errors.collectionDetails?.phoneNumber &&
                  "border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
              />
            </div>
            <div className="space-y-1 py-2 font-semibold">
              <label htmlFor="collectionDetails.detail" className="ps-2">
                Collection Details *
              </label>
              <input
                name="collectionDetails.detail"
                onChange={handleChange}
                value={values.collectionDetails.detail}
                className={`${
                  errors.collectionDetails?.detail && "border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
              />
            </div>
            <div className="space-y-1 py-2 font-semibold">
              <label htmlFor="selectedVan" className="ps-2">
                Selected Van*
              </label>
              <input
                name="selectedVan"
                disabled={true}
                value={typeofVan}
                className={`${
                  errors.selectedVan && "border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
              />
            </div>
            <div className="space-y-1 py-2 font-semibold">
              <label
                htmlFor="collectionDetails.additionalInstructions"
                className="ps-2"
              >
                Collection Instructions *
              </label>
              <textarea
                name="collectionDetails.additionalInstructions"
                cols={10}
                rows={10}
                onChange={handleChange}
                value={values.collectionDetails.additionalInstructions}
                className={`${
                  errors.collectionDetails?.additionalInstructions &&
                  "border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
              />
            </div>
          </div>

          {/* Delivery Section */}
          <div className="capitalize">
            <div className="space-y-1 py-2 font-semibold">
              <label htmlFor="deliveryDetails.name" className="ps-2">
                Company Name (Delivery)*
              </label>
              <input
                className={`${
                  errors.deliveryDetails?.name && "border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
                name="deliveryDetails.name"
                onChange={handleChange}
                value={values.deliveryDetails.name}
              />
            </div>
            <div className="space-y-1 py-2 font-semibold">
              <label htmlFor="deliveryDetails.address" className="ps-2">
                Delivery Address*
              </label>
              <input
                className={`${
                  errors.deliveryDetails?.address && "border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
                name="deliveryDetails.address"
                onChange={handleChange}
                disabled={true}
                value={values.deliveryDetails.address}
              />
            </div>
            <div className="space-y-1 py-2 font-semibold">
              <label htmlFor="deliveryDetails.postCode" className="ps-2">
                Postal Code (Delivery)*
              </label>
              <input
                name="deliveryDetails.postCode"
                disabled={true}
                className={`${
                  errors.deliveryDetails?.postCode && "border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
                onChange={handleChange}
                value={values.deliveryDetails.postCode}
              />
            </div>
            <div className="space-y-1 py-2 font-semibold">
              <label htmlFor="deliveryDetails.date" className="ps-2">
                Delivery Date*
              </label>
              <input
                type="date"
                name="deliveryDetails.date"
                className={`${
                  errors.deliveryDetails?.date && "border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
                onChange={handleChange}
                value={values.deliveryDetails.date}
              />
            </div>
            <div className="space-y-1 py-2 font-semibold">
              <label htmlFor="deliveryDetails.time" className="ps-2">
                Delivery Time *
              </label>
              <input
                type="time"
                name="deliveryDetails.time"
                className={`${
                  errors.deliveryDetails?.time && "border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
                onChange={handleChange}
                value={values.deliveryDetails.time}
              />
            </div>
            <div className="space-y-1 py-2 font-semibold">
              <label htmlFor="deliveryDetails.contact" className="ps-2">
                Delivery Person Name
              </label>
              <input
                name="deliveryDetails.contact"
                onChange={handleChange}
                value={values.deliveryDetails.contact}
                className={`${
                  errors.deliveryDetails?.contact && "border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
              />
            </div>
            <div className="space-y-1 py-2 font-semibold">
              <label htmlFor="deliveryDetails.phoneNumber" className="ps-2">
                Contact Number (Delivery)*
              </label>
              <input
                name="deliveryDetails.phoneNumber"
                onChange={handleChange}
                value={values.deliveryDetails.phoneNumber}
                className={`${
                  errors.deliveryDetails?.phoneNumber &&
                  "border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
              />
            </div>
            <div className="space-y-1 py-2 font-semibold">
              <label htmlFor="bookerDetails.name" className="ps-2">
                Booker Name*
              </label>
              <input
                name="bookerDetails.name"
                className={`${
                  errors.bookerDetails?.name && "border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
                onChange={handleChange}
                value={values.bookerDetails.name}
              />
            </div>
            <div className="space-y-1 py-2 font-semibold">
              <label htmlFor="bookerDetails.phoneNumber" className="ps-2">
                Booker Number*
              </label>
              <input
                name="bookerDetails.phoneNumber"
                className={`${
                  errors.bookerDetails?.phoneNumber && "border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
                onChange={handleChange}
                value={values.bookerDetails.phoneNumber}
              />
            </div>
            <div className="space-y-1 py-2 font-semibold">
              <label htmlFor="bookerDetails.email" className="ps-2">
                Booker Email ID*
              </label>
              <input
                name="bookerDetails.email"
                className={`${
                  errors.bookerDetails?.email && "border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
                onChange={handleChange}
                value={values.bookerDetails.email}
              />
            </div>
            <div className="space-y-1 py-2 font-semibold">
              <label
                htmlFor="deliveryDetails.additionalInstructions"
                className="ps-2"
              >
                Special Instructions (Delivery)
              </label>
              <textarea
                name="deliveryDetails.additionalInstructions"
                cols={10}
                rows={6}
                onChange={handleChange}
                value={values.deliveryDetails.additionalInstructions}
                className={`${
                  errors.deliveryDetails?.additionalInstructions &&
                  "border-4 border-red-600"
                } w-full rounded-md border border-blue-200 p-2`}
              />
            </div>
          </div>
        </div>

        {/* Error aur Submission Feedback */}
        {Object.keys(errors).length > 0 && (
          <div className="text-center pb-2 font-semibold text-red-700">
            * Please Fill All the Missing Fields
          </div>
        )}

        <div className="flex flex-row gap-4 font-semibold justify-center">
          <button
            type="button"
            className="text-white bg-blue-primary p-4 rounded-md"
            onClick={() => handleClick(2)}
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
