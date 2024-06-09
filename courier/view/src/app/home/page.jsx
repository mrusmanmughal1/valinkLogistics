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
                  Fast, Reliable Same Day Delivery: One-hour collection ensures
                  your urgent parcel or pallet reaches its destination
                  efficiently, either the same day or by the very next day. No
                  more disruptions to your business operations! VanLink
                  Logistics keeps the UK moving – we understand the
                  time-sensitive nature of your needs.
                </p>
                <br />
                <p>
                  Real-Time Peace of Mind: Our drivers leverage cutting-edge
                  technology for secure deliveries you can track every step of
                  the way. Monitor your shipment's progress in real-time and
                  ensure it arrives on time, every time. Eliminate delivery
                  anxiety and focus on what matters most – running your
                  business.
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
                Your Trusted Partner in Speed: Don't let slow deliveries become a bottleneck in your supply chain. Imagine a world where urgent deliveries are a breeze, not a burden. VanLink Logistics is your trusted partner for keeping your production running smoothly. We offer a seamless same-day courier service designed to meet your urgent delivery needs and exceed your expectations. Our reliable one-hour collection window ensures your critical parcels and pallets get picked up promptly, and our cutting-edge tracking technology allows you to monitor their progress in real-time, eliminating any delivery anxiety. Focus on what you do best – running your business – and leave the fast, secure deliveries to us. VanLink Logistics is the key to keeping your operations running like clockwork.
                </p>
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
