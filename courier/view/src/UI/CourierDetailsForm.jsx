"use client";
import React from "react";
import { useFormik } from "formik";
import { ProvideDetails } from "@/app/helpers/FormsValidations";

const CourierDetailsForm = () => {
  const CourierDetails = {
    CompanyName: "",
    CollectionAddress: "",
    CollectionPostCode: "",
    POstCode: "",
    CollectionDate: "",
    Time: "",
    contactName: "",
    contactNumber: "",
    itemsDetails: "",
    vehicle: "",

    DeliveryCompanyName: "",
    DeliveryCollectionAddress: "",
    DeliveryPOstCode: "",
    DeliveryCollectionDate: "",
    DeliveryTime: "",
    DeliverycontactName: "",
    DeliverycontactNumber: "",
    DeliveryBookerName :'',
    DeliveryitemsDetails: "",
    Deliveryvehicle: "",
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: CourierDetails,
    onSubmit: (values, action) => {
      console.log(values)
      action.resetForm();
    },
    validationSchema: ProvideDetails,
  });
  return (
    <div className=" p-10 md:p-20  bg-orange-200">
      <div className=" text-center font-extrabold text-3xl uppercase text-orange-600 drop-shadow-md p-4 md:p-4">
        Please Provide Detail's
      </div>
      <form onSubmit={handleSubmit}>
        <button type="submit">usman</button>
        <div className="flex md:flex-row flex-col gap-14 justify-center">
          <div className=" capitalize">
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Company Name (Collection)*
              </label>
              <input
                className={`${
                  errors.CompanyName && " border-4 border-red-300"
                } w-full rounded-md border border-orange-500 p-2`}
                onChange={handleChange}
                id="CompanyName"
                name="CompanyName"
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Collection Address*
              </label>
              <input
               id="CollectionAddress"
               name="CollectionAddress"
                className={`${
                  errors.CollectionAddress && " border-4 border-red-300"
                } w-full rounded-md border border-orange-500 p-2`}
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Post code (Collection)*
              </label>
              <input
                className={`${errors.POstCode && " border-4 border-red-300"} w-full rounded-md border border-orange-500 p-2`}
              
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Collection Date*
              </label>
              <input
              
              className={`${errors.CollectionDate && " border-4 border-red-300"} w-full rounded-md border border-orange-500 p-2`}
              
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Collection Time*
              </label>
              <input
              
              className={`${errors.CollectionDate && " border-4 border-red-300"} w-full rounded-md border border-orange-500 p-2`}
              
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Contact Name (Collection)*
              </label>
              <input 
                className={`${errors.contactName && " border-4 border-red-300"} w-full rounded-md border border-orange-500 p-2`}
              
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Contact Number (Collection)*
              </label>
              <input 
              
              
              className={`${errors.contactNumber && " border-4 border-red-300"} w-full rounded-md border border-orange-500 p-2`}
              
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Items Details*
              </label>
              <input 
              
              className={`${errors.itemsDetails && " border-4 border-red-300"} w-full rounded-md border border-orange-500 p-2`}
              
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Vehicle*
              </label>
              <input 
              
              className={`${errors.vehicle && " border-4 border-red-300"} w-full rounded-md border border-orange-500 p-2`}
              
              
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Company Name
              </label>
              <textarea
                cols={10}
                rows={10}
                className="w-full rounded-md border border-orange-500 p-2"
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
                className={`${errors.DeliveryCompanyName && " border-4 border-red-300"} w-full rounded-md border border-orange-500 p-2`}

                
                id="CompanyName"
                name="CompanyName"
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Delivery Address*
              </label>
              <input 
              
              
              className={`${errors.DeliveryCollectionAddress && " border-4 border-red-300"} w-full rounded-md border border-orange-500 p-2`}
              
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Post code (Delivery)*
              </label>
              <input 
              
              
              className={`${errors.DeliveryPOstCode && " border-4 border-red-300"} w-full rounded-md border border-orange-500 p-2`}
              
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Delivery Date*
              </label>
              <input 
              
              className={`${errors.DeliveryCollectionDate && " border-4 border-red-300"} w-full rounded-md border border-orange-500 p-2`}
              
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Contact Name (Delivery)*
              </label>
              <input 
              
              
              className={`${errors.DeliverycontactName && " border-4 border-red-300"} w-full rounded-md border border-orange-500 p-2`}
              
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Contact Number (Delivery)*
              </label>
              <input
              
              className={`${errors.DeliverycontactNumber && " border-4 border-red-300"} w-full rounded-md border border-orange-500 p-2`}
              
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Booker Name*
              </label>
              <input 
              
              className={`${errors.DeliveryBookerName && " border-4 border-red-300"} w-full rounded-md border border-orange-500 p-2`}
              
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Booker Number*
              </label>
              <input 
              
              
              className={`${errors.DeliveryBookertNumber && " border-4 border-red-300"} w-full rounded-md border border-orange-500 p-2`}
              
              />
            </div>
            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Booker Email ID*
              </label>
              <input className="w-full rounded-md border border-orange-500 p-2" />
            </div>

            <div className=" space-y-1 py-2 font-semibold ">
              <label htmlFor="" className="ps-2">
                Special Instructions (Delivery)
              </label>
              <textarea
                cols={10}
                rows={10}
                className="w-full rounded-md border border-orange-500 p-2"
              />
            </div>
          </div>
        </div>
      </form>
      <div className=" flex flex-row gap-4 font-semibold justify-center">
        <button className="text-white bg-orange-600 p-4 rounded-md">
          Previous
        </button>
        <button className="text-white bg-orange-600 p-4 rounded-md">
          Next
        </button>
      </div>
    </div>
  );
};

export default CourierDetailsForm;
