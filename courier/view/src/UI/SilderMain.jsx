"use client";
import Image from "next/image";
import Slider from "react-slick";
import img from "../Assets/Logo.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SilderMain = () => {
  
  return (
    <div className="p-20 mx-auto   relative">
      <div className="text-2xl text-center font-bold font-mono">
        We Are Working With
      </div>
      <div className="mx-auto w-3/4 my-8">
       <AllSlides/>
      </div>
    </div>
  );
};

export default SilderMain;


export const AllSlides = () => {
  const a = [1, 2, 3, 4 ,4,4,4];

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    
    return (
      <Slider {...settings}>
        {a.map((val, i) => {
          const {   github, liveUrl } = val;
  
          return (
            <div key={i} className="rounded-full  relative  ">
              <div className="absolute bottom-0 border-slate-600 bg-slate-50  w-full  transition-opacity duration-1000 ease-out opacity-0 hover:opacity-75">
                 
              </div>
              <a href={liveUrl} target="_blank" rel="noreferrer">
                <Image src={img} className=" " alt="" border="0" width={200} />
            
              </a>
            </div>
          );
        })}
      </Slider>
    );
  };
