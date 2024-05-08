import Image from "next/image";
import hero from "../../Assets/2.jpg";
import home1 from "../../Assets/home-1.jpg";
import home2 from "../../Assets/home-2.jpg";
import Link from "next/link";

const home = () => {
  return (
    <div>
      <div className="  md:h-screen overflow-hidden relative ">
        <Image
          src={hero}
          alt=""
          className="w-full  md:object-conta h-screen object-cover"
        />

        <div className=" md:text-2xl  text-center  slide-right  Font-semibold    font-serif  font-semibold absolute top-[33%] left-[%] rounded-lg text-white ">
          <div className=" relative uppercase  font-semibold  sidetip  p-4 rounded-r-2xl  ">
            <p className=" p-4  drop-shadow-xl rounded-md">
              {" "}
              Take the complexity out{" "}
            </p>
            <p className="  drop-shadow-xl  rounded-md">
              with customs brokerage services
            </p>
          </div>
        </div>
      </div>

      {/* second section  */}

      <div className="  py-20     bg-orange-50 ">
        <div className="flex flex-col gap-8   lg:flex-row w-11/12 mx-auto ">
          <div className="w-full  text-center flex justify-center">
            <Image
              src={home1}
              alt=""
              className="object-contain   drop-shadow w-full"
            />
          </div>
          <div className="w-full flex  justify-center">
            <div className="w-full lg:w-3/4 space-y-4">
              <h1 className="text-lg   font-bold text-orange-500 xl:text-3xl drop-shadow-xl   ">
                Welcome to VANLINK LOGISTICS
              </h1>
              <div className="text-justify text-lg xl:text-lg leading-9">
                <p className="">
                  Experience a better way to deliver parcels throughout the
                  United Kingdom. VANLINK LOGISTICS is London, England’s
                  premier on-demand, same-day courier service that uses
                  cutting-edge technologies to ensure the secure delivery of
                  your packages. We employ only the best people in the industry
                  to handle your deliveries today and every day; on time, every
                  time.
                </p>
                <br />
                <p>
                  We believe the supplier-vendor relationship to be an
                  important, strong and long term partnership. Both the client
                  and the logistics partners will concentrate on their lead
                  competencies and work closely together with the common aim to
                  be a leader in each other’s sector. We want to service you in
                  a reliable, efficient and flexible manner .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* third  */}
      <div className=" py-20 text-center bg-orange-200 space-y-2 ">
        <p className="font-semibold">
          Barcodes, Inc. Same Day Courier Service in Birmingham to
        </p>
        <p className="font-semibold text-orange-600 text-4xl drop-shadow-xl ">
          {" "}
          Logistics Facilities & Technical Support
        </p>
        <p className="font-semibold">
          to Continue Operations as Essential Services
        </p>
      </div>

      {/* fourth section  */}
      <div className="  bg-orange-50 pt-20 pb-10 ">
        <div className="flex flex-col  gap-14 md:gap-32   md:flex-row w-11/12 mx-auto ">
          <div className="w-full flex  md:w-3/4  justify-center ">
            <div className="w-full space-y-4">
              <h1 className="text-2xl font-bold text-orange-500 xl:text-[1.78rem] drop-shadow-xl  ">
                Reliable UK Transport Logistics
              </h1>
              <div className="space-y-6 text-lg xl:text-lg leading-9 text-justify ">
                <p className="">
                  We have developed according to our clients’ needs from a
                  traditional freight forwarding company to a full service
                  logistics provider. We provide all the necessary services for
                  highly-engineered supply chain solutions and combine these
                  with a range of warehousing and freight forwarding services to
                  provide a complete solution.
                </p>
                <p>
                  When time is of the essence, and you need your Courier
                  delivered promptly within Birmingham, look no further than
                  VanLink Logistics. Our dedicated same day courier service is
                  designed to meet your urgent courier delivery needs, ensuring
                  your items reach their destination quickly and securely.
                </p>
                <p>
                  If you run a small business in London, we offer a 20% discount
                  for the first 3 months when you create an account. For more
                  information, give us a call on 02033711919 or email us at
                  office@VANLINK LOGISTICS                </p>
              </div>
            </div>
          </div>
          <div className=" w-full md:w-3/4   text-center flex justify-center">
            <Image src={home2} alt="" className="object-contain  w-full" />
          </div>
        </div>
        <div className="bg-orange-50 text-center py-10">
          <Link href={"/more-about-us"}>
            <button className="text-white font-sans font-semibold bg-orange-600 p-4 rounded-md">
              More About Us{" "}
            </button>
          </Link>
        </div>
      </div>
     
    </div>
  );
};

export default home;
