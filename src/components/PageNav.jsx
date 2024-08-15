import { useEffect, useState } from "react";
import Button from "./Button";

function PageNav() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-[100000] flex justify-between px-12 pt-6 pb-2 content-center items-center from-[#FBF7F4] to-[#fbf7f400] bg-gradient-180 ${
        isSticky ? "backdrop-blur-md bg-[#ffffff61]" : "bg-[#FBF7F4]"
      }`}
    >
      <div className="">
        <p className="font-medium text-primary text-lg font-bold capitalise">
          Abyssinia software solution
        </p>
      </div>
      <ul className="flex gap-8 justify-center items-center mr-14">
        <li className="group py-2 relative font-medium text-primary capitalize text-base text-base hover:cursor-pointer hover:text-btn-bg-main transition-all duration-200">
          <a className="before:inline-block before:content-[''] before:absolute before:bottom-[15%] before:w-full before:h-[2px] before:bg-btn-bg-main before:scale-x-0 before:origin-center group-hover:before:scale-x-100 before:transition-all before:duration-[200ms]">
            Home
          </a>
        </li>
        <li className="group py-2 relative font-medium text-primary capitalize text-base text-base hover:cursor-pointer hover:text-btn-bg-main transition-hover duration-200">
          <a className="before:inline-block before:content-[''] before:absolute before:bottom-[15%] before:w-full before:h-[2px] before:bg-btn-bg-main before:scale-x-0 before:origin-center group-hover:before:scale-x-100 before:transition-all before:duration-[200ms]">
            services
          </a>
        </li>
        <li className="group py-2 relative font-medium text-primary capitalize text-base text-base hover:cursor-pointer hover:text-btn-bg-main transition-hover duration-200">
          <a className="before:block before:content-[''] before:absolute before:bottom-[15%] before:w-full before:h-[2px] before:bg-btn-bg-main before:scale-x-0 before:origin-center group-hover:before:scale-x-100 before:transition-all before:duration-[200ms]">
            {" "}
            pages
          </a>
        </li>
        <li className="group py-2 relative font-medium text-primary capitalize text-base text-base hover:cursor-pointer hover:text-btn-bg-main transition-hover duration-200">
          <a className="before:block before:content-[''] before:absolute before:bottom-[15%] before:w-full before:h-[2px] before:bg-btn-bg-main before:scale-x-0 before:origin-center group-hover:before:scale-x-100 before:transition-all before:duration-[200ms]">
            about
          </a>
        </li>
        <li className="group py-2 relative font-medium text-primary capitalize text-base text-base hover:cursor-pointer hover:text-btn-bg-main transition-hover duration-200">
          <a className="before:block before:content-[''] before:absolute before:bottom-[15%] before:w-full before:h-[2px] before:bg-btn-bg-main before:scale-x-0 before:origin-center group-hover:before:scale-x-100 before:transition-all before:duration-[200ms]">
            blog
          </a>
        </li>
        <li className="group py-2 relative font-medium text-primary capitalize text-base text-base hover:cursor-pointer hover:text-btn-bg-main transition-hover duration-200">
          <a className="before:block before:content-[''] before:absolute before:bottom-[15%] before:w-full before:h-[2px] before:bg-btn-bg-main before:scale-x-0 before:origin-center group-hover:before:scale-x-100 before:transition-all before:duration-[200ms]">
            contact
          </a>
        </li>
      </ul>
      <div>
        <Button variant="primary" size="sm">
          contact
        </Button>
      </div>
    </div>
  );
}

export default PageNav;
