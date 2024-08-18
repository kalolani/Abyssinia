import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Footer() {
  return (
    <>
      <div className="relative pt-[120px] pb-[270px] bg-[#fbfbfd] overflow-hidden">
        <div className="absolute z-[0] bottom-0 w-full h-[266px] bg-footer-image bg-cover bg-no-repeat bg-scroll bg-left phone:bg-center">
          <div className="absolute bottom-0 left-[30%] w-[100px] h-[55px] bg-car-image bg-no-repeat bg-center car"></div>
          <div className="absolute z-[1] bottom-0 left-[38%] w-[100px] h-[90px] bg-bike-image bg-no-repeat bg-center bike"></div>
          <div className="absolute z-[1] bottom-0 left-[28%] w-[150px] h-[210px] phone:h-[210px] phone:left-[0%] laptop:left-[28%] bg-basketball-image bg-no-repeat bg-center"></div>
        </div>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="max-w-[1150px] m-auto grid grid-cols-custom-layout phone:grid-cols-1 phone:justify-center tablet:grid-cols-2 btablet:grid-cols-tablet laptop:grid-cols-custom-layout items-start justify-center gap-12 px-4"
        >
          <div className="flex flex-col gap-6 justify-center items-start phone:items-center tablet:items-start laptop:items-start">
            <h3 className="text-[25px] capitalize font-bold text-primary">
              newsletter
            </h3>
            <p className="text-secondary phone:text-center laptop:text-left">
              Subscribe to our newsletter for updates.
            </p>
            <input
              placeholder="email"
              className="capitalize rounded-[3px] inline-block px-4 py-2 border border-btn-bg-main outline-6 focus:outline-btn-bg-main"
            />
            <button className="bg-btn-bg-main text-tertiary hover:bg-transparent hover:text-btn-bg-main font-semibold capitalize border px-4 py-2 rounded-[2px] border-btn-bg-main flex items-center mr-0 ">
              subscribe
            </button>
          </div>
          <div className="flex flex-col gap-4 justify-center items-start">
            <h3 className="text-[25px] capitalize font-bold text-primary self-start phone:self-center tablet:self-start laptop:self-start">
              explore
            </h3>
            <ul className="flex flex-col gap-4 justify-center items-start self-start phone:self-center tablet:self-start laptop:self-start">
              <li className="cursor-pointer hover:shadow-md hover:rotate-[5deg] hover:scale-150 transition-all duration-200">
                <a className="capitalize text-secondary hover:text-btn-bg-main">
                  home
                </a>
              </li>
              <li className="cursor-pointer hover:shadow-md hover:rotate-[5deg] hover:scale-150 transition-all duration-200">
                {" "}
                <a className="capitalize text-secondary  hover:text-btn-bg-main transition-all duration-200">
                  about
                </a>
              </li>
              <li className="cursor-pointer hover:shadow-md hover:rotate-[5deg] hover:scale-150 transition-all duration-200">
                {" "}
                <a className="capitalize text-secondary  hover:text-btn-bg-main transition-all duration-200">
                  service
                </a>
              </li>
              <li className="cursor-pointer hover:shadow-md hover:rotate-[5deg] hover:scale-150 transition-all duration-200">
                {" "}
                <a className="capitalize text-secondary  hover:text-btn-bg-main transition-all duration-200">
                  blogs
                </a>
              </li>
              <li className="cursor-pointer hover:shadow-md hover:rotate-[5deg] hover:scale-150 transition-all duration-200">
                {" "}
                <a className="capitalize text-secondary  hover:text-btn-bg-main transition-all duration-200">
                  contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 justify-center items-start phone:items-center tablet:items-start laptop:items-start">
            <h3 className="text-[25px] capitalize font-bold text-primary">
              contact info
            </h3>
            <ul className="flex flex-col gap-4 justify-center items-start phone:items-center tablet:items-start laptop:items-start">
              <li className="flex items-center gap-4">
                <IoLocationSharp
                  color="#ff845d"
                  size={55}
                  className="self-start -mt-[15px]"
                />

                <p className="text-secondary">
                  Addis Ababa, Bole Wollo Sefer,gorgoriwos Adebabay infront of
                  Tsedey Bank 242 Building 4th floor
                </p>
              </li>

              <li className="flex items-center gap-4">
                {" "}
                <FaPhone color="#ff845d" />
                <p className="text-secondary">0916163516</p>
              </li>
              <li className="flex items-center gap-4">
                {" "}
                <FaPhone color="#ff845d" />
                <p className="text-secondary">0916163516</p>
              </li>
              <li className="flex items-center gap-4">
                {" "}
                <TfiEmail color="#ff845d" />
                <p className="text-secondary">abyssiniasoftware1@gmail.com</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 justify-center items-start phone:items-center tablet:items-start laptop:items-start">
            <h3 className="text-[25px] capitalize font-bold text-primary">
              subscription
            </h3>
            <p className="text-secondary phone:text-center tablet:text-left laptop:text-left">
              Subscribe to our SAS service to get business software at low price
              with free upgrading, technical support, free training, and free
              maintenance.
            </p>
            <div className="flex flex-col tablet:flex laptop:flex-col gap-4">
              <p className="text-secondary text-[20px] phone:text-center laptop:text-left">
                follow us on:
              </p>
              <ul className="flex gap-6">
                <li className="group p-2 rounded-3xl border border-btn-bg-main hover:cursor-pointer hover:bg-btn-bg-main transition-all duration-200">
                  <a>
                    <FaLinkedinIn className="text-secondary group-hover:text-[#fff] transition-all duration-200" />
                  </a>
                </li>

                <li className="group p-2 rounded-3xl border border-btn-bg-main hover:cursor-pointer hover:bg-btn-bg-main transition-all duration-200">
                  <a>
                    <FaXTwitter className="text-secondary group-hover:text-[#fff] transition-all duration-200" />
                  </a>
                </li>
                <li className="group p-2 rounded-3xl border border-btn-bg-main hover:cursor-pointer hover:bg-btn-bg-main transition-all duration-200">
                  <a>
                    <SlSocialInstagram className="text-secondary group-hover:text-[#fff] transition-all duration-200" />
                  </a>
                </li>
                <li className="group p-2 rounded-3xl border border-btn-bg-main hover:cursor-pointer hover:bg-btn-bg-main transition-all duration-200">
                  <a>
                    <TiSocialFacebook className="text-secondary group-hover:text-[#fff] transition-all duration-200" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="pt-[5px] pb-[50px] bg-[#fbfbfd]">
        <div className="flex items-center justify-between px-16 phone:flex-col laptop:flex-row phone:gap-6 phone:mt-2">
          {" "}
          <div className="capitalize text-[#6a7695]">
            &copy; Abyssinia Software, All rights reserved.
          </div>
          <div className="capitalize text-[#6a7695]">
            designed by Abyssinia software
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
