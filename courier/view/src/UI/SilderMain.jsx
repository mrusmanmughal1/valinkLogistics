"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../Assets/trust/1.jpg";
import img2 from "../Assets/trust/2.jpg";
import img3 from "../Assets/trust/3.jpg";
import img4 from "../Assets/trust/4.jpg";

const SilderMain = () => {
  return (
    <div className="px-8 py-12 md:py-14 md:px-14  mx-auto    relative">
      <div style={{fontFamily:'Bebas'}} className="text-3xl md:text-5xl  text-center drop-shadow-md      font-bold">
        Our Trusted Partners{" "}
      </div>
      <div className="mx-auto w-3/4 my-8">
        <AllSlides />
      </div>
    </div>
  );
};

export default SilderMain;

export const AllSlides = () => {
  const a = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
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
        const { img } = val;

        return (
          <div key={i} className="rounded-full  relative  ">
            <div className="absolute bottom-0 border-slate-600 bg-slate-50  w-full  transition-opacity duration-1000 ease-out opacity-0 hover:opacity-75"></div>
            <Image src={img} className="" alt="" border="0" width={200} />
          </div>
        );
      })}
    </Slider>
  );
};
