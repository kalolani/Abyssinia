/* eslint-disable react/prop-types */
import { FiPlus } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";
function FrequentlyAsked({ data }) {
  const [curOpen, setCurOpen] = useState(data[0].image); // Initialize with the num of the first item

  return (
    <div className="py-[56px]">
      <div className="flex justify-center">
        <p className="capitalize text-center text-secondary text-[14px] font-medium py-2 px-[20px] tracking-wider rounded-[5px] bg-gradient-to-r from-[#FEE7C4] to-[#BEE5E4]">
          FAQS
        </p>
      </div>
      <h2 className="text-primary font-bold text-center capitalize text-4xl my-4">
        Get the Answers to Common Questions
      </h2>
      <div className="max-w-[1050px] grid grid-cols-2 items-start m-auto gap-14 pt-10">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="w-[500px] flex flex-col gap-[24px]"
        >
          {data.map((item) => (
            <AccordionItem
              key={item.image}
              num={item.image}
              title={item.title}
              curOpen={curOpen}
              setCurOpen={setCurOpen}
            >
              {item.text}
            </AccordionItem>
          ))}
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid"
        >
          <img
            src="her.png"
            className="w-full h-full place-items-start -mt-[30px]"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default FrequentlyAsked;

function AccordionItem({ num, title, curOpen, setCurOpen, children }) {
  function toggleHandler() {
    setCurOpen(isOpen ? null : num);
  }
  const isOpen = num === curOpen;
  let iconColor;
  if (isOpen) {
    iconColor = "rgb(241 245 249)";
  } else {
    iconColor = "rgb(120 53 15)";
  }

  return (
    <div
      className={`w-[450px] relative shadow-md py-[14px] px-[24px] cursor-pointer border-[1px] grid grid-cols-[auto_1fr_auto] items-center rounded-t-md gap-[24px] ${
        isOpen ? "open" : ""
      }`}
      onClick={toggleHandler}
    >
      <div
        className={`relative z-[1] inline-block px-[3px] py-[3px] bg-amber-100 rounded-sm`}
      >
        {num}
      </div>
      <p
        className={`relative z-[1] title text-primary ${
          isOpen ? "text-tertiary" : ""
        }`}
      >
        {title}
      </p>
      <p className={`relative z-[1]`}>
        {isOpen ? (
          <FaTimes size={17} color={iconColor} />
        ) : (
          <FiPlus size={17} color={iconColor} />
        )}
      </p>
      <motion.div
        className="w-full col-span-3 px-2 overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{
          height: { duration: 0.5, ease: "easeInOut" },
          opacity: { duration: 0.3, ease: "easeInOut" },
        }}
        style={{ display: isOpen ? "block" : "none" }} // Conditionally render the content
      >
        {children}
      </motion.div>

      <div
        className={`absolute top-0 left-0 w-full bg-orange-950 z-0 ${
          isOpen ? "h-[60px]" : "h-0"
        }`}
      ></div>
    </div>
  );
}
