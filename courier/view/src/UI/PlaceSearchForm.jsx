"use client";
import { SearchplaceForm } from "@/app/helpers/FormsValidations";
import { useJsApiLoader , Autocomplete } from "@react-google-maps/api";
import { useFormik } from "formik";

const PlaceSearchForm = () => {
  const SearchData = {
    CollectionPostCode: "",
    DeliveryPostalCode: "",
  };
   const { isLoaded } = useJsApiLoader({
    googleMapsApiKey:'AIzaSyAMQas2m1Fbq6JYpDf78c8RWHjH6uB4WRs',
    libraries:['places'],
  });
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: SearchData,
      onSubmit: (values, action) => {
        action.resetForm();
        console.log(values);
      },
      validationSchema: SearchplaceForm,
    });


  if(!isLoaded){
    return <h1> is loading </h1>
  }
  
  return (
    <div className=" w-11/12 lg:w-1/2   mx-auto">
      <form onSubmit={handleSubmit}>
        <div className=" space-y-6">
          <div className="flex gap-5 flex-col md:flex-row ">
            <div className="flex flex-col gap-2 w-full mx-auto ">
              <label htmlFor="" className="font-semibold text-sm">
                Full Collection Postcode*
              </label>
          <Autocomplete  className="w-full">

              <input
                type="text"
                className={`p-2 w-full rounded-md outline-orange-300 ${
                  errors.CollectionPostCode && "border-2 border-red-600"
                }`}
                
                name="CollectionPostCode"
                id="CollectionPostCode"
              />
              </Autocomplete>
              {errors.CollectionPostCode && touched.CollectionPostCode && (
                <p className="text-red-600 text-sm font-semibold">
                  {errors.CollectionPostCode}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="font-semibold text-sm">
                Full Delivery Postcode*
              </label>
          <Autocomplete>

              <input
                type="text"
                className={`p-2 w-full rounded-md outline-orange-300 ${
                  errors.DeliveryPostalCode && "border-2 border-red-600"
                }`}
                value={values.DeliveryPostalCode}
                onChange={handleChange}
                name="DeliveryPostalCode"
                id="DeliveryPostalCode"
              />
              </Autocomplete>

              {errors.DeliveryPostalCode && touched.DeliveryPostalCode && (
                <p className="text-red-600 text-sm font-semibold">
                  {errors.DeliveryPostalCode}
                </p>
              )}
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
  );
};

export default PlaceSearchForm;
