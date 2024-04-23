'use client'
import { Typewriter } from 'react-simple-typewriter'
import herobg from "../Assets/hero.jpg"
import Image from 'next/image';
const Herobg = () => {
  
  return (
    <div className="h-screen overflow-hidden relative    ">
      <Image src={herobg} alt="" className="w-full h-screen object-cover"/>
        <div className="    h-full">
      <div className="absolute w-3/4  md:w-1/4 right-[15%] flex flex-col gap-3 top-[43%] md:top-[20%]  ">
        <p   className="text-3xl text-orange-600  font-semibold  uppercase   font-serif drop-shadow-md text-red  ">

        <Typewriter 
        
        
        words={['Looking for a Courior Service ? ', 'Urgent Courior Service? ', 'Want To delivery Fast ?', 'Speedy, reliable, and tailored to you!']}
            loop={99*9}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
        />
        </p>
        <p className="text-justify text-white ">
          Looking for a sameday courier service for your deliveries? You’ve come
          to the right place! Let Couriernet Limited handle all your delivery
          needs. Contact us today, to book our courier services or get a quote.
        </p>
        <button className="bg-orange-600 rounded-md py-4 shadow-xl text-white font-semibold">
          Get A Quote 
        </button>
      </div>
      </div>
    </div>
  );
};

export default Herobg;
