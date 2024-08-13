import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

function Footer() {
  return (
    <>
      <div className="relative pt-[120px] pb-[270px] bg-[#fbfbfd]">
        <div className="absolute z-[0] bottom-0 w-full h-[266px] bg-footer-image bg-cover bg-no-repeat bg-scroll bg-left">
          <div className="absolute bottom-0 left-[30%] w-[100px] h-[55px] bg-car-image bg-no-repeat bg-center car"></div>
          <div className="absolute z-[1] bottom-0 left-[38%] w-[100px] h-[90px] bg-bike-image bg-no-repeat bg-center bike"></div>
        </div>
        <div className="max-w-[1070px] m-auto grid grid-cols-4 items-start justify-center gap-12">
          <div className="flex flex-col gap-6 justify-center items-start ">
            <h3 className="text-[25px] capitalize font-bold text-primary">
              newsletter
            </h3>
            <p className="text-secondary">
              Subscribe to our newsletter for updates.
            </p>
            <input
              placeholder="email"
              className="capitalize rounded-[3px] inline-block px-4 py-2 border border-btn-bg-main outline-6 focus:outline-btn-bg-main"
            />
            <button className="bg-btn-bg-main text-tertiary hover:bg-transparent hover:text-btn-bg-main font-semibold capitalize border px-4 py-2 rounded-[2px] border-btn-bg-main flex items-center">
              subscribe
            </button>
          </div>
          <div className="flex flex-col gap-4 justify-center items-start">
            <h3 className="text-[25px] capitalize font-bold text-primary self-center">
              explore
            </h3>
            <ul className="flex flex-col gap-4 justify-center items-start self-center">
              <li className="cursor-pointer">
                <a className="capitalize text-secondary hover:shadow-md hover:text-btn-bg-main hover:rotate-6 transition-all duration-200">
                  home
                </a>
              </li>
              <li className="cursor-pointer">
                {" "}
                <a className="capitalize text-secondary  hover:text-btn-bg-main transition-all duration-200">
                  about us
                </a>
              </li>
              <li className="cursor-pointer">
                {" "}
                <a className="capitalize text-secondary  hover:text-btn-bg-main transition-all duration-200">
                  service
                </a>
              </li>
              <li className="cursor-pointer">
                {" "}
                <a className="capitalize text-secondary  hover:text-btn-bg-main transition-all duration-200">
                  blogs
                </a>
              </li>
              <li className="cursor-pointer">
                {" "}
                <a className="capitalize text-secondary  hover:text-btn-bg-main transition-all duration-200">
                  contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 justify-center items-start">
            <h3 className="text-[25px] capitalize font-bold text-primary">
              contact info
            </h3>
            <ul className="flex flex-col gap-4 justify-center items-start">
              <li className="flex items-center justify-start gap-4">
                <IoLocationOutline
                  color="#ff845d"
                  size={70}
                  className="self-start -mt-[20px]"
                />
                <p className="text-secondary pr-4">
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
          <div className="flex flex-col gap-4 justify-center items-start">
            <h3 className="text-[25px] capitalize font-bold text-primary">
              subscription
            </h3>
            <p className="text-secondary">
              Subscribe to our SAS service to get business software at low price
              with free upgrading, technical support, free training, and free
              maintenance.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-[5px] pb-[50px] bg-[#fbfbfd]">
        <div className="flex items-center justify-between px-16">
          {" "}
          <div className="capitalize text-btn-bg-main">
            &copy; Abyssinia Software, All rights reserved.
          </div>
          <div className="capitalize text-btn-bg-main">
            designed by Abyssinia software
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
