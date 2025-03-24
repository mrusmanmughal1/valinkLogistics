import Image from "next/image";
import React from "react";
import companyp from "../../Assets/7.jpg";
import companyprofile from "../../Assets/8.jpg";
import Contactform from "@/UI/Contactform";

const company = () => {
  return (
    <div>
      <div className="">
        <div className="  overflow-hidden relative ">
          <Image
            src={companyp}
            alt="About us page "
            className="w-full h-screen object-cover"
          />
       
        </div>
        <div className=" text-2xl text-center  slide-right    Font-semibold    font-serif   font-semibold  bg-blue-primary text-white ">
            <div className=" relative uppercase  font-semibold    p-4   ">
              <p className=" p-4  drop-shadow-xl   ">
                {" "}
                We Care About Your Products{" "}
              </p>
              <p className=" drop-shadow-xl   rounded-md">
                We Know How To Deliver
              </p>
            </div>
          </div>
        <div className="py-20 bg-blue-50">
          <div className="flex p-10 flex-col md:flex-row gap-10 w-11/12 mx-auto">
            <div className="w-full">
              <Image src={companyprofile} alt="About us page " />
            </div>
            <div className="w-full space-y-4">
              <div className="space-y-2">
                <p className="text-blue-primary drop-shadow-xl    uppercase text-2xl font-bold">
                  Company Profile
                </p>
                <p>
                  VANLINK LOGISTICS was founded by Stephen Seemanpillai to
                  provide a premier courier service to the London business
                  community as well as to customers in England and the rest of
                  the United Kingdom. We use cutting-edge technologies to
                  deliver a unique e-commerce solution in today’s demanding
                  business environment.
                </p>
              </div>
              <p className="font-semibold">Our primary objectives are :</p>
              <ul>
                <li>
                  - To be the Ultimate Choice of our Supply Chain Stakeholders.
                </li>
                <li>
                  - Creating Impact & Delivering Value Through Excellence Drive
                  and Innovation for our Stakeholders.
                </li>
                <li>
                  - Consistently provide the “best” standards of customer care
                </li>
                <li>
                  - Always on time at every place where people need your
                  products. Sell much more than before now!
                </li>
                <li>
                  - Everything we do is guided by our values and professional
                  ethics
                </li>
                <li>
                  - We ensure that we hold ourselves accountable to the highest
                  standards by delivering excellent
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <div className="p-20   company-bg  flex justify-center relative text-white text-center h-60">
            <div className="absolute inset-0 bg-blue-400  opacity-60 "></div>
            <div className="  w-8/12 mx-auto space-y-4 absolute">
              <p className="text-2xl font-semibold ">
                Client Satisfaction is Must !
              </p>
              <p>
                Committed to being at the forefront of new developments, our
                objective is to help you optimise your costs by providing the
                management information you want when you want it.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-blue-primary">
          <Contactform />
        </div>
        <div className=" bg-orange-50 relative    justify-center">
          

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.1922743867485!2d-2.1362622235281927!3d52.58421687207805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48709b9bbb973f35%3A0x5939d2142883a880!2s84%20Salop%20St%2C%20Wolverhampton%20WV3%200SR%2C%20UK!5e0!3m2!1sen!2s!4v1717247813756!5m2!1sen!2s"
            height="450"
            className="w-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default company;
