/* eslint-disable react/prop-types */
// src/components/Accordion.jsx
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleItem } from "../Redux/accordionSlice";
import { FiPlus } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";

function Accordion({ num, title, children }) {
  const dispatch = useDispatch();
  const curOpen = useSelector((state) => state.accordion.openItem); // Get the current open item number
  const isOpen = num === curOpen; // Check if this item is open

  const toggleHandler = () => {
    dispatch(toggleItem(isOpen ? null : num)); // Toggle: close if open, open if closed
  };

  const iconColor = isOpen ? "rgb(241 245 249)" : "rgb(120 53 15)";

  return (
    <div
      className={`w-[450px] relative shadow-md py-[14px] px-[24px] cursor-pointer border-[1px] grid grid-cols-[auto_1fr_auto] items-center rounded-t-md gap-[24px] ${
        isOpen ? "open" : "pb-0 gap-[15px]"
      }`}
      onClick={toggleHandler} // Single handler for toggling open/close
    >
      <div className="relative z-[1] inline-block px-[3px] py-[3px] bg-amber-100 rounded-sm">
        {num}
      </div>
      <p
        className={`relative z-[1] title text-primary ${
          isOpen ? "text-tertiary" : ""
        }`}
      >
        {title}
      </p>
      <p className="relative z-[1]">
        {isOpen ? (
          <FaTimes size={17} color={iconColor} />
        ) : (
          <FiPlus size={17} color={iconColor} />
        )}
      </p>
      <motion.div
        className={`w-full col-span-3 px-2 overflow-hidden ${
          isOpen ? "" : "h-[0px] p-0"
        }`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{
          height: { duration: 0.5, ease: "easeInOut" },
          opacity: { duration: 0.3, ease: "easeInOut" },
        }}
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

export default Accordion;
