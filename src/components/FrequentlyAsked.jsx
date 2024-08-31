/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FiPlus } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import her from "../assets/images/her.png";
import Accordion from "./Accordion";
function FrequentlyAsked({ data }) {
  // const [curOpen, setCurOpen] = useState(data[0].image); // Initialize with the num of the first item

  return (
    <div className="py-[56px]">
      <div className="flex justify-center">
        <p className="capitalize text-center text-secondary text-[14px] font-medium py-2 px-[20px] tracking-wider rounded-[5px] bg-gradient-to-r from-[#FEE7C4] to-[#BEE5E4]">
          FAQS
        </p>
      </div>
      <h2 className="text-primary font-bold text-center capitalize text-4xl phone:text-2xl tablet:text-3xl laptop:text-4xl my-4">
        Get the Answers to Common Questions
      </h2>
      <div className="max-w-[1050px] grid grid-cols-2 phone:grid-cols-1 tablet:grid-cols-1 btablet:grid-cols-2 tablet:justify-center tablet:items-center laptop:grid-cols-2 laptop:items-start m-auto gap-14 pt-10 px-4">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="w-[500px] phone:w-[350px] laptop:w-[500px] flex flex-col gap-[24px] phone:justify-self-center"
        >
          {data.map((item) => (
            <Accordion
              id={item.id}
              key={item.image}
              num={item.image}
              title={item.title}
              // curOpen={curOpen}
              // setCurOpen={setCurOpen}
            >
              {item.text}
            </Accordion>
          ))}
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid w-full tablet:w-1/2 btablet:w-full tablet:justify-self-center"
        >
          <img
            src={her}
            className="w-full h-full laptop:w-full place-items-start -mt-[30px]"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default FrequentlyAsked;
