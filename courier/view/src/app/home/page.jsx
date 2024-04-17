import Image from "next/image";
import hero from "../../Assets/2.jpg";
import aboutImage from "../../Assets/3.jpg";
import aboutSecondImage from "../../Assets/4.jpg";

const home = () => {
  return (
    <div>
      <div className="h-screen overflow-hidden relative ">
        <Image src={hero} alt="" />

        <div className=" text-2xl text-center  Font-semibold     font-semibold absolute top-[30%] left-[2%] rounded-lg text-white p-8">
          <div className="space-y-3 relative uppercase  p-6  ">
            <p className="bg-orange-500 p-4 py-6 rounded-md">
              {" "}
              We Care About Your Products{" "}
            </p>
            <p className="bg-orange-500 p-4 py-6 rounded-md">
              We Know How To Deliver
            </p>
          </div>
        </div>
      </div>
      <div className="p-20 bg-orange-50 flex">
        <div className="w-full text-center flex justify-center">
          <Image src={aboutImage} alt="" />
        </div>
        <div className="w-full flex items-center ">
          <div className="w-3/4 space-y-4">
            <h1 className="text-2xl font-bold text-orange-500 ">
              Welcome to Couriernet Limited
            </h1>
            <p className="text-justify">
              Experience a better way to deliver parcels throughout the United
              Kingdom. Couriernet Limited is London, England’s premier
              on-demand, same-day courier service that uses cutting-edge
              technologies to ensure the secure delivery of your packages. We
              employ only the best people in the industry to handle your
              deliveries today and every day; on time, every time.
            </p>
          </div>
        </div>
      </div>
      <div className="p-20 bg-orange-100 flex">
        <div className="w-full flex   justify-center ">
          <div className="w-3/4 space-y-4">
            <h1 className="text-2xl font-bold   ">
              Welcome to Couriernet Limited
            </h1>
            <div className="space-y-6">
            <p className="text-justify">
              As you explore our website, you will discover how simple it is to
              set up your account with Couriernet Limited. Our customer web
              portal will offer you instant access to all your account needs
              such as quick and easy job bookings, real-time visual tracking,
              price quotes, instant POD’s, and more. 
            </p>
            <p>If you run a small business
              in London, we offer a 20% discount for the first 3 months when you
              create an account. For more information, give us a call on
              02033711919 or email us at office@couriernet.co.uk.</p>
              </div>
          </div>
        </div>
        <div className="w-full text-center flex justify-center">
          <Image src={aboutImage} alt="" />
        </div>
      </div>
      <div className="bg-orange-100 text-center py-10">
        <button className="text-white font-semibold bg-orange-800 p-4 rounded-md">Read More About Us </button>
      </div>
    </div>
  );
};

export default home;
