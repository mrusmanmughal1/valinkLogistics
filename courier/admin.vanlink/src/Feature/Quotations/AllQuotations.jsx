import { BiWorld } from "react-icons/bi";
import { useGetAllQuotations } from "../../Services/Quotations/useGetAllQuotations";
import Loader from "../../UI/Loader";
import { FaArrowRight } from "react-icons/fa";
import Model from "../../UI/Model";
import { useState } from "react";
import QuotationsDetails from "../../UI/QuotationsDetails";

 

const AllQuotations = () => {
  const { data, isLoading, isError } = useGetAllQuotations();
  const [Detail, setDetail] = useState();
  const [model, setmodel] = useState(false);
  if (isLoading) return <Loader style="min-h-96 " />;
  if (isError)
    return (
      <p className="text-2xl text-center font-bold">
        {" "}
        Sorry ! No Data is Available . Try Again Later .
      </p>
    );
  return (
    <div className="flex flex-col gap-4 font-bold">
      <div className=" text-lg font-bold uppercase">All Quotations</div>
      {/* <Adminfilters /> */}
      {data?.data?.map((val, i) => {
        console.log(val);
        const {
          bookerDetails,
          collectionDetails,
          deliveryDetails,
          quoteAmmount,
          quoteJobStatus,
          userID,
        } = val;
        const handleModel = (val) => {
          setDetail(val);
          setmodel(true);
        };
        return (
          <div
            key={i}
            className="flex flex-col items-center md:flex-row gap-4 p-5 bg-white shadow-lg border-2 border-b
          hover:bg-slate-100"
          >
            <div className="w-full md:w-1/3 flex flex-col gap-4">
              <div className=" ">
                <span className="text-xs text-white bg-blue-primary p-1">
                  ID: {userID._id}
                </span>
                <div className="">
                  <span className="text-xs"> Booker Name </span> :{" "}
                  <span className="font-semibold uppercase">
                    {bookerDetails.name}
                  </span>
                </div>
              </div>
              <p className="text-xs flex gap-2 items-center">
                <BiWorld /> {deliveryDetails.address}{" "}
                <FaArrowRight className="text-lg text-blue-primary" />{" "}
                {collectionDetails.address}
                {val?.addresses?.map((v) => (
                  <span className="font-medium" key={i}>
                    {v.city},{" "}
                  </span>
                ))}
              </p>
            </div>
            <div className="w-full md:w-1/3 text-sm p-2  font-bold">
              <p className="pb-4">
                Price : {quoteAmmount} ${" "}
                <span className="text-sm font-medium">{val.rate}</span>{" "}
              </p>
              <p>
                Total Distance : 50km
                <span className="font-medium">{val.contract_type}</span>
              </p>
            </div>
            <div className="md:w-1/3 w-full flex justify-end gap-4 md:flex-row md:items-center text-purple-900">
              <div className="flex gap-2 font-medium items-center">
                Status :{" "}
                <span
                  className={`${
                    quoteJobStatus == "Pending"
                      ? "bg-yellow-500 "
                      : "bg-blue-primary"
                  } text-white px-2 py-1`}
                >
                  {" "}
                  {quoteJobStatus}{" "}
                </span>
              </div>

              <button
                onClick={() => handleModel(val)}
                className="text-xs font-semibold lg:px-2 xl:px-6 xl:py-3 px-6
               rounded-md py-3 border-2 border-blue-primary hover:text-white hover:bg-blue-primary"
              >
                VIEW
              </button>
            </div>
          </div>
        );
      })}
      <Model model={model}>
        <QuotationsDetails Data={Detail} />
      </Model>
    </div>
  );
};

export default AllQuotations;
