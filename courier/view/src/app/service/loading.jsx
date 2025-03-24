import Image from "next/image";
import React from "react";
import logo from "../../Assets/Logo-01.png";
const ServiceLoading = () => {
  return (
    <div className="  flex justify-center items-center  w-full  ">
      <Image src={logo} alt="Logo" className="fade w-72 py-32" />
    </div>
  );
};

export default ServiceLoading;
