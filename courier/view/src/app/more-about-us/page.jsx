import Image from "next/image";
import React from "react";
import more1 from "../../Assets/more1.jpg";
import more2 from "../../Assets/more2.jpg";

const page = () => {
  return (
    <div>
      <div className="text-center    relative">
        <div className="absolute z-20 flex justify-center flex-col gap-10  w-full py-40 h-screen  ">
          <div className="">
            <div className="   text-white text-center text-4xl md:text-5xl font-extrabold font-sans drop-shadow-md  uppercase">
              Everyone within our business <br></br>
              understands our mission
            </div>
            <p className="font-sans p-4 text-white">
              It means we don’t just come to work to do a job, we come to work
              to make a difference.
            </p>
          </div>
          <div className=" hidden  md:block ">
            <div className="  gap-8 text-white  flex flex-col justify-center items-center  w-full  ">
              <p className="text-2xl font-semibold w-1/2">
                “ To make the process of buying and managing shipping and
                logistics services simple, efficient, stress free and cost
                effective.”
              </p>
              <p className="w-1/2">
                We do this by providing a friendly, efficient and personalised
                service combined with innovative IT solutions that enable our
                customers to always be in control of their supply chains.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-orange-700  opacity-60 "></div>
        <Image
          src={more1}
          alt=""
          className="w-full  md:object-conta h-screen object-cover"
        />
      </div>
      <div className="  md:p-20 bg-orange-50">
        <div className="w-11/12 mx-auto py-20">
          <div className=" pb-8 text-center space-y-4  drop-shadow-md font-bold capitalize text-orange-600">
            <p className="text-4xl font-extrabold uppercase">
              VANLINK LOGISTICS
            </p>
            <p className="text-xl"> has grown from strength to strength</p>
          </div>
          <div className=" w-11/12 mx-auto md:w-full ">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8   lg:gap-x-28">
              <div className="p-10 space-y-4 bg-white shadow-sm">
                <p className="font-bold">ISO ACCREDITATION</p>
                <p>
                  In November 2016 after a lot of work Atlas Logistics UK Ltd
                  became ISO 9001 and ISO 27001 accredited, complying with The
                  Provision of Import and Export Solutions and Associated
                  Services.
                </p>
              </div>
              <div className="p-10 space-y-4 bg-white shadow-sm">
                <p className="font-bold">2016 RE BRAND</p>
                <p>
                  New logo, new website, fresh new brand but still the same
                  reliable team. Follow our blog article for more information..
                </p>
              </div>
              <div className="p-10 space-y-4 bg-white shadow-sm">
                <p className="font-bold">2013 BOTH OFFICES</p>
                <p>
                  In March 2013 both offices moved to larger premises, London
                  being strategically placed close to Heathrow Airport, and
                  Birmingham moving to a facility giving the Company access to
                  30,000 square feet of Logistics warehousing.
                </p>
              </div>
              <div className="p-10 space-y-4 bg-white shadow-sm">
                <p className="font-bold">LOGISTICS PVT WERE</p>
                <p>
                  {" "}
                  In September 2015 the shares of Logistics PVT were acquired by
                  the UK Company, meaning Atlas Logistics
                </p>
              </div>
              <div className="p-10 space-y-4 bg-white shadow-sm">
                <p className="font-bold">COMPANY ACCREDITATION</p>
                <p>
                  In MAY 2023 after a lot of work VANLINK LOGISTICS UK Ltd
                  became ISO 9001 and ISO 27001 accredited, complying with The
                  Provision of Import and Export Solutions and Associated
                  Services
                </p>
              </div>
              <div className="p-10 space-y-4 bg-white shadow-sm">
                <p className="font-bold">ISO ACCREDITATION</p>
                <p>
                  In November 2016 after a lot of work Atlas Logistics UK Ltd
                  became ISO 9001 and ISO 27001 accredited, complying with The
                  Provision of Import and Export Solutions and Associated
                  Services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-1/2 ">
          <Image src={more2} alt=""  className="w-full h-full  hidden md:block  object-cover"/>
        </div>
        <div className="w-full bg-orange-100  flex flex-col  justify-center items-center  p-8 md:p-20 text-justify space-y-10">
          <p className="text-4xl font-extrabold text-center uppercase drop-shadow-sm text-orange-600">Transport Logistics in UK</p>
          <p className="capitalize font-thin">
            when ever your shipment has reached just inform us, we are here to
            provide you the best facilities, we know how to protect your goods
            and keep them safe until we deliver them to your locations. Vanlink
            Logistics offers a lot of facilities to there customers,
            reliability, as well as price flexibility . Book now to put your
            products in reputable hands our team of courier services will
            deliver them on same day all around the United Kingdom, From the
            initial booking to the last delivery, our experienced team will
            provide you with prompt, courteous service. You can get an immediate
            answer, reliability ,practical solutions, and progress updates via
            our web portal. Anytime you need support Vanlink Logistics is just a
            call away.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
