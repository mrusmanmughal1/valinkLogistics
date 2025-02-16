
const QuotationsDetails = ({Data}) => {
  console.log(Data)
  return (
    <div>

      <div className=" p-6 space-y-4" >
        <span className="text-sm bg-blue-primary text-white p-2 "> ID : {Data?._id}</span>
        <div className="flex w-full">
          <div className="w-full"><p>Delivery Details</p>
          
          <div className="">
           Name :   {Data?.deliveryDetails?.name}
          </div>
          </div>
          <div className="w-full">Collection Details </div>

        </div>
      </div>
    </div>
  )
}

export default QuotationsDetails