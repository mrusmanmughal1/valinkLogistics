"use client";
import { SearchplaceForm } from "@/app/helpers/FormsValidations";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import { useFormik } from "formik";
import Loader from "./Loader";
import { useRef, useState } from "react";
import { ListPostalCodes } from "@/Context/PostalCodeContext";

const PlaceSearchForm = ({ selected, setDIstance, setPage }) => {
  const [collectionaddress, setcollectionaddress] = useState(null);
  const [destinationAddress, setdestinationAddress] = useState(null);
  const { setPostalCOdes } = ListPostalCodes();
  const SearchData = {
    collectionaddress: collectionaddress,
    destinationAddress: destinationAddress,
  };
  const currentLocationRef = useRef();
  const DelevryLocation = useRef();

  async function calculateRoute() {
    if (
      currentLocationRef.current.value == "" &&
      DelevryLocation.current.value == ""
    ) {
      return null;
    }

    const directionService = new google.maps.DirectionsService();
    const result = await directionService.route({
      origin: currentLocationRef.current.value,
      destination: DelevryLocation.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });

    setcollectionaddress(result.request.origin.query);
    setdestinationAddress(result.request.destination.query);
    setDIstance(result.routes[0]?.legs[0]?.distance.text);
    // setPostalCOdes({
    //   Delivery: currentLocationRef.current.value,
    //   destination: DelevryLocation.current.value,
    // });
  }

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLEMAPSAPIKEY,
    libraries: ["places"],
  });
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: SearchData,
      onSubmit: (values, action) => {
        calculateRoute();
        setPage(2);
        setPostalCOdes({
          Delivery: currentLocationRef.current.value,
          Collection: DelevryLocation.current.value,
        });
      },
      validationSchema: SearchplaceForm,
    });

  if (!isLoaded) {
    return <Loader />;
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
              <Autocomplete className="w-full">
                <input
                  ref={currentLocationRef}
                  value={currentLocationRef?.current?.value}
                  onChange={handleChange}
                  type="text"
                  className={`p-2 w-full rounded-md outline-orange-300 ${
                    errors.collectionaddress && "border-2 border-red-600"
                  }`}
                  name="collectionaddress"
                  id="collectionaddress"
                />
              </Autocomplete>
              {errors.collectionaddress && touched.collectionaddress && (
                <p className="text-red-600 text-sm font-semibold">
                  {errors.collectionaddress}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="font-semibold text-sm">
                Full Delivery Postcode*
              </label>
              <Autocomplete>
                <input
                  ref={DelevryLocation}
                  value={DelevryLocation?.current?.value}
                  onChange={handleChange}
                  type="text"
                  className={`p-2 w-full rounded-md outline-orange-300 ${
                    errors.destinationAddress && "border-2 border-red-600"
                  }`}
                  name="destinationAddress"
                  id="destinationAddress"
                />
              </Autocomplete>

              {errors.destinationAddress && touched.destinationAddress && (
                <p className="text-red-600 text-sm font-semibold">
                  {errors.destinationAddress}
                </p>
              )}
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={!Boolean(selected)}
              className="text-white bg-yellowcolor py-4 px-6 rounded-md font-semibold disabled:bg-yellow-600 disabled:cursor-not-allowed"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceSearchForm;
