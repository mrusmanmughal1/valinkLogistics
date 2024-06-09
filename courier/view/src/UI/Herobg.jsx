"use client";
import { Typewriter } from "react-simple-typewriter";
import herobg from "../Assets/hero.jpg";
import Image from "next/image";
const Herobg = () => {
  return (
    <div className="h-screen overflow-hidden relative    ">
      <Image src={herobg} alt="" className="w-full h-screen object-cover" />
      <div className="    h-full">
        <div className="absolute w-3/4  md:w-1/4 right-[15%] flex flex-col gap-3 top-[43%] md:top-[20%]  ">
          <p className="text-3xl text-orange-600  font-semibold  uppercase   font-serif drop-shadow-md text-red  ">
            <Typewriter
              words={[
                "Looking for a Courior Service ? ",
                "Urgent Courior Service? ",
                "Want To delivery Fast ?",
                "Speedy, reliable, and tailored to you!",
              ]}
              loop={99 * 9}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          <p className="text-justify text-white text-lg  capitalize  ">
            "Need Urgent Delivery? Get It There Today! Nationwide Same Day Courier Service Across the UK."
          </p>
          <a href="#quote"  className="bg-orange-600 rounded-md py-4  text-center uppercase shadow-xl text-white font-semibold">
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default Herobg;
