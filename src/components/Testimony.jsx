import TestimonialCarousel from "./TestimonyCarousel";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Testimony() {
  return (
    <>
      <div className="relative py-[60px] bg-[#EDF4F3]">
        <div className="relative flex justify-center">
          {" "}
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="capitalize text-center text-secondary text-[14px] font-medium py-2 px-[20px] tracking-wider rounded-[5px] bg-gradient-to-r from-[#FEE7C4] to-[#BEE5E4]"
          >
            testimony
          </motion.p>
        </div>
        <motion.h1
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="text-primary font-bold text-center capitalize text-4xl phone:text-2xl tablet:text-3xl laptop:text-4xl my-6 mt-8"
        >
          Check What’s Our Client Say
          <br className="visible phone:hidden" /> About Us
        </motion.h1>
        {/* <div className="max-w-[700px] m-auto flex flex-col gap-4 items-center">
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
          <div>
            <p className="capitalize text-primary">kaleab gemechu</p>
          </div>
          <div className="flex items-center gap-4">
            <HiMiniArrowLongLeft className="cursor-pointer" />
            <HiMiniArrowLongRight className="cursor-pointer" />
          </div>
        </div> */}
        <div className="relative">
          {" "}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="left-0 top-0"
          >
            <TestimonialCarousel />
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="absolute left-[15%] tablet:left-[5%] laptop:left-[15%] top-[35%] tablet:top-[30%] laptop:top-[35%] opacity-100 phone:opacity-0"
        >
          <img
            src="yoro.png"
            className="block w-[82px] h-[82px] opacity-100 phone:opacity-0 laptop:opacity-100"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="absolute left-[8%]  tablet:left-[5%] laptop:left-[8%] top-[65%] tablet:top-[60%] laptop:top-[65%] phone:opacity-0 laptop:opacity-100"
        >
          <img
            src="zirkzee.png"
            className="block w-[60px] h-[60px] opacity-100 phone:opacity-0 laptop:opacity-100"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="absolute left-[20%] tablet:left-[15%] laptop:left-[20%] top-[80%] tablet:top-[75%] laptop:top-[80%] phone:opacity-0 laptop:opacity-100"
        >
          <img
            src="ronaldo.png"
            className="block w-[82px] h-[82px]opacity-100 phone:opacity-0 laptop:opacity-100"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="absolute right-[15%] tablet:right-[5%] laptop:right-[15%] top-[35%] tablet:top-[30%] laptop:top-[35%] phone:opacity-0 laptop:opacity-100"
        >
          <img
            src="messi.png"
            className="block w-[82px] h-[82px] opacity-100 phone:opacity-0 laptop:opacity-100"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="absolute right-[8%] tablet:right-[5%] laptop:right-[8%] top-[65%] tablet:top-[60%] laptop:top-[65%] phone:opacity-0 laptop:opacity-100"
        >
          <img
            src="kobe.png"
            className="block w-[60px] h-[60px] opacity-100 phone:opacity-0 laptop:opacity-100"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="absolute right-[20%] tablet:right-[15%] laptop:right-[20%] top-[80%] top-[75%] laptop:top-[80%] phone:opacity-0 laptop:opacity-100"
        >
          <img
            src="sancho.png"
            className="block w-[82px] h-[82px] opacity-100 phone:opacity-0 laptop:opacity-100"
          />
        </motion.div>
        <p className="p-8 opacity-0 inline-block">kaleab</p>
      </div>
    </>
  );
}

export default Testimony;
