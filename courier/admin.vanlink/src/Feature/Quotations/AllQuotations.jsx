import { BiWorld } from "react-icons/bi";
import { useGetAllQuotations } from "../../Services/Quotations/useGetAllQuotations";
import Loader from "../../UI/Loader";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Model from "../../UI/Model";
import { useState } from "react";
import QuotationsDetails from "../../UI/QuotationsDetails";

const AllQuotations = () => {
  const [quotenum, setquotnum] = useState(null);
  const [searchQuote, setSearchQuote] = useState(null);
  const [status, setstatus] = useState("");
  const { data, isError, isPending, next, pre, page } =
    useGetAllQuotations(searchQuote);
  const [Detail, setDetail] = useState();
  const [model, setmodel] = useState(false);
  if (isPending) return <Loader style="min-h-96 " />;
  if (isError)
    return (
      <p className="text-2xl text-center font-bold">
        {" "}
        Sorry ! No Data is Available . Try Again Later .
      </p>
    );
  return (
    <div className="flex flex-col gap-4 font-bold">
      <div className=" text-lg font-bold uppercase">
        All Quotations ({data?.data?.count || 0})
      </div>
      <div className="flex justify-between w-full">
        <p>Filters</p>
        <div className="">
          Status :{" "}
          <select
            name=""
            id=""
            className="w-32 px-2"
            onChange={(e) => setstatus(e.target.value)}
          >
            <option value="Pending">Pending</option>
            <option value="Accepted">Accepted</option>
            <option value="InProgress">In-progress</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>
      <div className="flex">
        <input
          type="text"
          onChange={(e) => setquotnum(e.target.value)}
          max={16}
          className="w-full outline-none px-4 font-medium border-blue-primary border-2"
          placeholder="Enter Quotation Number"
        />
        <button
          onClick={() => setSearchQuote(quotenum)}
          className="px-4 py-2 bg-blue-primary text-white"
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="flex justify-end  ">
        <div className="flex items-center gap-2">
          <button onClick={pre} className="bg-blue-primary text-white p-1">
            <FaArrowLeft />
          </button>
          {page}
          <button onClick={next} className="bg-blue-primary text-white p-1">
            <FaArrowRight />
          </button>
        </div>
      </div>
      {/* <Adminfilters /> */}
      {data?.data?.quotes?.map((val, i) => {
        const {
          bookerDetails,
          collectionDetails,
          deliveryDetails,
          quoteJobStatus,
          userID,
          quoteDistance,
          quoteAmmount,
          quoteNum,
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
                  ID: {quoteNum}
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
                Total Distance : {quoteDistance}
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
      <Model model={model} setmodel={setmodel}>
        <QuotationsDetails Data={Detail} />
      </Model>
    </div>
  );
};

export default AllQuotations;
