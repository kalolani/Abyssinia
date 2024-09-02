/* eslint-disable no-unused-vars */
import Button from "./Link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

/* eslint-disable react/prop-types */
const AboutCard = ({ image, name, occupation }) => {
  return (
    <div className="relative group z-10 w-full bg-white shadow-md transition-all">
      <div className="relative z-10 group-hover:cursor-pointer">
        <div className="relative z-[10] w-full flex justify-center overflow-hidden">
          <img
            src={image}
            alt={name}
            className="block relative -z-[1000] h-[22rem] w-full overflow-hidden"
          />
          <div className="z-[10] absolute top-[0%] left-[0%] py-4 w-[102%] h-full bg-about opacity-0 shadow-lg scale-50 group-hover:scale-100 group-hover:backface-hidden group-hover:opacity-100 transition-all duration-300 will-change-transform">
            <div className="absolute w-[75%] h-[0.3px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white origin-center scale-x-0 group-hover:scale-x-100 transition-all duration-300 delay-300 will-change-transform"></div>{" "}
            <div className="absolute w-full top-[42%] -translate-y-[30px] group-hover:translate-y-[0px] left-1/2 -translate-x-[22%] -translate-y-1/2 flex gap-2 items-center transition-all duration-500 will-change-transform">
              <a
                href="https://www.linkedin.com/in/kaleab-gemechu-456ab9259/"
                // target="_blank"
                className="group hover:cursor-pointer"
              >
                <FaLinkedinIn
                  size={15}
                  className="text-white hover:text-cyan-500"
                />
              </a>
              <a
                href="https://www.instagram.com/kal_olani/"
                // target="_blank"
                className="hover:cursor-pointer"
              >
                <FaFacebookF
                  size={15}
                  className="text-white hover:text-cyan-500"
                />
              </a>
              <a
                href="https://t.me/kal_olani7"
                // target="_blank"
                className="hover:cursor-pointer"
              >
                <FaTelegramPlane
                  size={15}
                  className="text-white hover:text-cyan-500"
                />
              </a>
              <a
                href="https://x.com/kaleab481039"
                // target="_blank"
                className="hover:cursor-pointer"
              >
                <FaSquareXTwitter
                  size={15}
                  className="text-white hover:text-cyan-500"
                />
              </a>
              <a
                href="https://x.com/kaleab481039"
                // target="_blank"
                className="hover:cursor-pointer"
              >
                <AiFillInstagram
                  size={15}
                  className="text-white hover:text-cyan-500"
                />
              </a>
            </div>
            <div className="absolute w-full top-[60%] translate-y-[30px] group-hover:-translate-y-[20px] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center transition-all duration-500 will-change-transform">
              <h2 className="text-tertiary font-bold capitalize text-center opacity-0 group-hover:opacity-100">
                {name}
              </h2>
              <p className="text-tertiary text-[14px] text-center opacity-0 group-hover:opacity-100 transition-apacity delay-100">
                {occupation}
              </p>
            </div>
          </div>
          <div className="absolute z-[9] py-4 w-[101%] h-[25%] bottom-[0%] custom-bg group-hover:h-0 group-hover:opacity-0 transition-all duration-300 will-change-transform overflow-hidden">
            <h3 className="capitalize text-primary font-bold text-center">
              {name}
            </h3>
            <p className="capitalize text-secondary text-[14px] text-center">
              {" "}
              {occupation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
