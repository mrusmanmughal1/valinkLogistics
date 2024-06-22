import React from "react";

const ResponseMessage = () => {
  return (
    <div className="py-40 text-center flex  flex-col justify-center items-center text-2xl space-y-3 border-blue-primary border-4 bg-blue-50 text-blue-primary capitalize ">
      <p className="font-bold uppercase">
        Congratulations!
        <p>Thank You So Much for Choosing Us</p>
      </p>
      <div className="shadow-xl text-white bg-blue-primary p-6">
        <p>Your Will Receive a Confirmation Call in 10 mints !</p>
      </div>
    </div>
  );
};

export default ResponseMessage;
