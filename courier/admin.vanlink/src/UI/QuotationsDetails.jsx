const QuotationsDetails = ({ Data }) => {
  return (
    <div>
      <div className=" p-6 space-y-4">
        <span className="text-sm bg-blue-primary text-white p-2 ">
          {" "}
          ID : {Data?.quoteNum}
        </span>
        <div className="flex gap-10 w-full">
          <div className="w-full">
            <p className="text-xl px-3 py-2 uppercase text-white bg-slate-800">
              Delivery Details
            </p>

            <div className="">Name : {Data?.deliveryDetails?.name}</div>
          </div>
          <div className="w-full">
            <p className="text-xl px-3 py-2 uppercase text-white bg-slate-600">
              Collection Details{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotationsDetails;
