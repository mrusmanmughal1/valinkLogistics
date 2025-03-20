import { BiWorld } from "react-icons/bi";
import { useGetAllQuotations } from "../../Services/Quotations/useGetAllQuotations";
import Loader from "../../UI/Loader";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Model from "../../UI/Model";
import { useEffect, useState } from "react";
import QuotationsDetails from "../../UI/QuotationsDetails";
import { IoIosArrowUp } from "react-icons/io";
import { HiOutlineStatusOnline } from "react-icons/hi";
const AllQuotations = () => {
  const [quotenum, setquotnum] = useState(null);
  const [searchQuote, setSearchQuote] = useState({
    quoteJobStatus: "",
    quoteNum: "",
    quotePayStatus: "",
    startDate: "",
    endDate: "",
  });
  useEffect(() => {
    setSearchQuote((val) => ({ ...val, quoteJobStatus: "All" }));
  }, []);

  const { data, isError, isPending, next, pre, page } =
    useGetAllQuotations(searchQuote);
  const [Detail, setDetail] = useState();
  const [model, setmodel] = useState(false);
  const handlestatus = (u) => {
    setSearchQuote((val) => ({ ...val, quoteJobStatus: u }));
  };
  const handlequotePayStatus = () => {
    setSearchQuote((val) => ({
      ...val,
      quotePayStatus: !searchQuote.quotePayStatus,
    }));
  };
  const handleDate = (e) => {
    const { name, value } = e.target;
    if (name == "end") {
      setSearchQuote((val) => ({ ...val, endDate: value }));
    } else {
      setSearchQuote((val) => ({ ...val, startDate: value }));
    }
  };

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
        All Quotations ({data?.data?.totalRecords || 0})
      </div>
      <div className="">
        {[
          "All",
          "Pending",
          "Accepted",
          "InProgress",
          "Completed",
          "Cancelled",
        ].map((val, i) => (
          <button
            onClick={() => handlestatus(val)}
            key={i}
            className={`px-6  ${
              searchQuote.quoteJobStatus == val
                ? " border-b-4 border-blue-primary"
                : ""
            } `}
          >
            {val}
          </button>
        ))}
      </div>
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-2">
          Payment Status
          <select name="" id="" onChange={handlequotePayStatus}>
            <option value="" disabled>
              Select{" "}
            </option>

            <option value="true">Paid</option>
            <option value="false">Not Paid</option>
          </select>
        </div>
        <div className="">
          Start Date :
          <input
            type="date"
            name="start"
            id=""
            onChange={(e) => handleDate(e)}
          />
        </div>
        <div className="">
          End Date :
          <input type="date" name="end" id="" onChange={(e) => handleDate(e)} />
        </div>
        <div className="flex justify-end  ">
          <div className="flex items-center gap-2">
            <button
              onClick={pre}
              disabled={page === 1}
              className="bg-blue-primary text-white p-1 disabled:cursor-not-allowed"
            >
              <FaArrowLeft />
            </button>
            {page}
            <button
              onClick={next}
              disabled={data?.data?.numberOfPages == page}
              className="bg-blue-primary text-white p-1 disabled:cursor-not-allowed"
            >
              <FaArrowRight />
            </button>
          </div>
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
          onClick={() =>
            setSearchQuote((val) => ({ ...val, quoteNum: quotenum }))
          }
          className="px-8 py-2 bg-blue-primary text-white"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* <Adminfilters /> */}
      {isPending ? (
        <Loader style="min-h-96 " />
      ) : (
        data?.data?.data?.map((val, i) => {
          const {
            bookerDetails,
            collectionDetails,
            deliveryDetails,
            quoteJobStatus,
            userID,
            quoteDistance,
            quoteAmmount,
            quoteNum,
            quotePayStatus,
            selectedVan,
          } = val;
          const handleModel = (val) => {
            setDetail(val);
            setmodel(true);
          };
          return (
            <div className="bg-white shadow-lg border-2 border-b">
              <div
                key={i}
                className="flex flex-col   md:flex-row gap-4 
      hover:bg-slate-50"
              >
                <div className="w-full md:w-1/3 flex flex-col gap-4 border-r border-black">
                  <div className="p-2 ">
                    <span className="text-xs text-white bg-blue-primary p-1">
                      ID: {quoteNum}
                    </span>
                    <div className="mt-2">
                      <div className="">
                        <span className="text-sm"> From </span> :&nbsp; &nbsp;
                        <span className="font-semibold text-sm  capitalize">
                          {collectionDetails.address}
                        </span>
                      </div>
                      <div className="">
                        <span className="text-sm"> To </span> : &nbsp;&nbsp;
                        <span className="font-semibold  text-sm capitalize">
                          {deliveryDetails.address}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 text-sm   font-bold border-r border-black">
                  <div className="flex  p-2 gap-6">
                    <div className=" text-sm">
                      <p>Booked By : </p>
                      <p>Phone : </p>
                      <p>Agreed rate : </p>

                      <p>Total Distance :</p>
                      <p>Payment Status</p>
                      <p>Selected Van </p>
                    </div>
                    <div className="text-sm">
                      <p>{bookerDetails.name}</p>
                      <p>{bookerDetails.phoneNumber}</p>
                      <p>( £ ) {quoteAmmount} </p>
                      <p>{quoteDistance} Miles</p>
                      <p>{quotePayStatus ? "Paid" : "Un-Paid"}</p>
                      <p>{selectedVan}</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 w-full  p-2 gap-4 md:flex-row md:items-center text-purple-900">
                  <div className="flex  w-full justify-between ">
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
                  <div className=""></div>
                </div>
              </div>
              <div className=" p-4">
                <p>
                  Notes :{" "}
                  <span className="font-light capitalize">
                    {" "}
                    Please DO it As Quick as possible{" "}
                  </span>
                </p>
                <div className="inline-block ">
                  <div className="flex relative items-center group  cursor-pointer gap-2">
                    <div className=" absolute bg-gray-100 group-hover:block hidden w-28 p-2 bottom-4  left-0">
                      <ul className="text-xs space-y-2">
                        {[
                          "Pending",
                          "Accepted",
                          "In-Progress",
                          "Completed",
                          "Cancel",
                        ].map((val, i) => {
                          return (
                            <li
                              className="hover:bg-gray-200 cursor-pointer"
                              key={i}
                            >
                              {val}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <HiOutlineStatusOnline className="text-yellow-600" />{" "}
                    <span className="text-xs">{quoteJobStatus}</span>
                    <IoIosArrowUp />
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}

      <Model model={model} setmodel={setmodel}>
        <QuotationsDetails Data={Detail} />
      </Model>
    </div>
  );
};

export default AllQuotations;
