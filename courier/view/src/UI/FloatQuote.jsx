import Link from "next/link";
import React from "react";

const FloatQuote = () => {
  return (
    <div className=" md:block hidden">
     

      <div className="fixed bottom-[8%]  flex  flex-col gap-2  items-center right-5 bg-orange-500  px-4 py-5 shadow-2xl  rounded-full text-white font-semibold border-4 border-orange-100">

        
      <Link href={'/'}>Get a Quote ! </Link>  

        
      </div>
    </div>
  );
};

export default FloatQuote;
