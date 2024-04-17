'use client'
import { Typewriter } from 'react-simple-typewriter'
const Herobg = () => {
  
  return (
    <div className="hero-bg     ">
        <div className="    h-full">
      <div className="absolute  w-1/4 right-[15%] flex flex-col gap-3 top-[38%]  ">
        <p className="text-3xl text-orange-600 font-semibold  uppercase font-serif italic text-red  ">

        <Typewriter 
        
        
        words={['Looking for a Courior Service ? ', 'Urgent Courior Service? ', 'Want To delivery Fast ?', 'Repeat!']}
            loop={5}
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
        <button className="bg-orange-700 rounded-md py-4 text-white font-semibold">
          Get A Quote 
        </button>
      </div>
      </div>
    </div>
  );
};

export default Herobg;
