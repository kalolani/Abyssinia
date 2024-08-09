import { HiMiniArrowLongRight } from "react-icons/hi2";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import { FaQuoteLeft } from "react-icons/fa";

function Testimony() {
  return (
    <>
      <div className="relative py-[56px] bg-[#EDF4F3]">
        <div className="flex justify-center">
          {" "}
          <p className="capitalize text-center text-secondary text-[14px] font-medium py-2 px-[20px] tracking-wider rounded-[5px] bg-gradient-to-r from-[#FEE7C4] to-[#BEE5E4]">
            testimony
          </p>
        </div>
        <h1 className="text-primary font-bold text-center capitalize text-4xl my-6 mt-8">
          Check What’s Our Client Say
          <br /> About Us
        </h1>
        <div className="max-w-[700px] m-auto flex flex-col gap-4 items-center">
          <div>
            {" "}
            <FaQuoteLeft size={50} color="rgb(217 119 6)" />
          </div>
          <div>
            <p className="text-primary text-center capitalize">
              Amazing support! Totally all over my issues and we were changing
              it completely from being a place directory! Loving the theme on
              top of your task lists stay in touch with what&apos;s happening.
            </p>
          </div>
          <div>
            <img src="kal.png" className="block w-[50px] h-[50px]" />
          </div>
          <div className="flex items-center gap-4">
            <HiMiniArrowLongLeft />
            <HiMiniArrowLongRight />
          </div>
        </div>
        <div className="absolute left-[15%] top-[40%]">
          <img src="yoro.png" className="block w-[70px] h-[70px]" />
        </div>
        <div className="absolute left-[10%] top-[73%]">
          <img src="zirkzee.png" className="block w-[70px] h-[70px]" />
        </div>
        <div className="absolute left-[25%] top-[85%]">
          <img src="ronaldo.png" className="block w-[70px] h-[70px]" />
        </div>
        <div className="absolute right-[15%] top-[40%]">
          <img src="messi.png" className="block w-[70px] h-[70px]" />
        </div>
        <div className="absolute right-[10%] top-[73%]">
          <img src="kobe.png" className="block w-[70px] h-[70px]" />
        </div>
        <div className="absolute right-[25%] top-[85%]">
          <img src="sancho.png" className="block w-[70px] h-[70px]" />
        </div>
      </div>
    </>
  );
}

export default Testimony;
