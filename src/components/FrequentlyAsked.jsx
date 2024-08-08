/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FiPlus } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

function FrequentlyAsked({ data }) {
  const [curOpen, setCurOpen] = useState(null);
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
      <div className="max-w-[1150px] grid grid-cols-2 m-auto gap-8 pt-10">
        <div className="w-[500px] flex flex-col gap-[24px]">
          {data.map((item, i) => (
            <AccordionItem
              key={item}
              num={item.image}
              title={item.title}
              curOpen={curOpen}
              setCurOpen={setCurOpen}
            >
              {item.text}
            </AccordionItem>
          ))}
        </div>
        <div className="grid">
          <img src="her.png" className="place-items-start -mt-[20px]" />
        </div>
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
      className={`relative shadow-md py-[14px] px-[24px] cursor-pointer border-[1px] grid grid-cols-[auto_1fr_auto] items-center rounded-t-md gap-[24px] items-center${
        isOpen ? "open" : ""
      }`}
      onClick={toggleHandler}
    >
      <div
        className={`relative z-[1] inline-block px-[3px] py-[3px] bg-amber-100 rounded-sm ${
          isOpen ? "" : ""
        }`}
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
      <p className={`relative z-[1] ${isOpen ? "" : ""}`}>
        {isOpen ? (
          <FaTimes size={20} color={iconColor} />
        ) : (
          <FiPlus size={22} color={iconColor} />
        )}
      </p>
      <div
        className={`w-full col-span-3 px-2 transition-all duration-[.05s] ${
          isOpen ? "visible h-full " : "invisible hidden h-0"
        }`}
      >
        {children}
      </div>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-[60px] bg-orange-950 z-0"></div>
      )}
    </div>
  );
}
