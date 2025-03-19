const QuotationsDetails = ({ Data = {} }) => {
  return (
    <div>
      <div className=" p-6 ">
        <div className="flex justify-between w-full">
          <p className="text-sm  inline-block bg-blue-primary text-white p-2 ">
            {" "}
            ID : {Data?.quoteNum}
          </p>
          <div className="flex items-center gap-3">
            Status :{" "}
            <p
              className={` text-white  p-1 ${
                Data?.quoteJobStatus == "Cancelled"
                  ? "bg-red-500"
                  : Data.quoteJobStatus == "Pending"
                  ? "bg-yellow-500"
                  : "bg-green-400"
              } `}
            >
              {" "}
              {Data?.quoteJobStatus}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 w-full     pb-4">
          <div className="w-full border-2">
            <p className="text-xl px-3 py-2 uppercase text-white bg-slate-800">
              Delivery Details
            </p>

            <div className="space-y-3 p-3">
              <div className="">Name : {Data?.deliveryDetails?.name}</div>
              <div className="">
                Phone : {Data?.deliveryDetails?.phoneNumber}
              </div>
              <div className="">Address : {Data?.deliveryDetails?.address}</div>
              <div className="">Contact : {Data?.deliveryDetails?.contact}</div>
              <div className="">
                Postal Code : {Data?.deliveryDetails?.postCode}
              </div>
              <div className="">
                <p>Additional Instructions</p>
                <p>{Data?.deliveryDetails?.additionalInstructions}</p>
              </div>
            </div>
          </div>
          <div className="w-full  border-2">
            <p className="text-xl px-3 py-2 uppercase text-white bg-slate-800">
              Collection Details{" "}
            </p>
            <div className="space-y-3 p-3">
              <div className="">Name : {Data?.collectionDetails?.name}</div>
              <div className="">
                Phone : {Data?.collectionDetails?.phoneNumber}
              </div>
              <div className="">
                Address : {Data?.collectionDetails?.address}
              </div>
              <div className="">
                Contact : {Data?.collectionDetails?.contact}
              </div>
              <div className="">
                Postal Code : {Data?.collectionDetails?.postCode}
              </div>
              <div className="">
                <p>Additional Instructions</p>
                <p>{Data?.collectionDetails?.additionalInstructions}</p>
              </div>
            </div>
          </div>
          <div className="w-full border-2 shadow">
            <p className="text-xl px-3 py-2 uppercase text-white bg-slate-800">
              Van Details
            </p>
            <div className="p-3">
              <p>Selected Van : {Data?.selectedVan?.typeofVan}</p>
              <p>Payment Status : {Data?.quotePayStatus?.toString()}</p>
              <p>Distance : {Data?.quoteDistance}</p>
              <p>Amount : {Data?.quoteAmmount}</p>
            </div>
          </div>
          <div className="w-full border-2">
            <p className="text-xl px-3 py-2 uppercase text-white bg-slate-800">
              Booker Details
            </p>
            <p className="p-3">
              <p>Name : {Data?.bookerDetails?.name}</p>
              <p>
                {" "}
                Email : {Data?.bookerDetails?.email}
                <p> Phone :{Data?.bookerDetails?.phoneNumber}</p>
              </p>
            </p>
          </div>
        </div>
        <div className="">
          <p>Notes</p>
          <p>{Data?.notes}</p>
        </div>
      </div>
    </div>
  );
};

export default QuotationsDetails;
