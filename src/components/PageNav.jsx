/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Link from "./Link";
import { MdMenu } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import { useStores } from "../contexts/storeContext";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function PageNav() {
  const [isSticky, setIsSticky] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  const isMediumScreen = useMediaQuery({ minWidth: 641, maxWidth: 1024 });
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const [isHidden, setIsHidden] = useState(false);

  const { isOpen, handleIsOpen, setShowPages, showPages } = useStores();
  const handleScroll = () => {
    setIsSticky(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (isLargeScreen) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  }, [isSmallScreen, isMediumScreen, isLargeScreen]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-[100000] flex justify-between px-12 phone:px-2 mdphone:px-4 ptab:px-6 mtab:px-8 tablet:px-10 laptop:px-12 pt-6 pb-2 content-center items-center from-[#FBF7F4] to-[#fbf7f400] bg-gradient-180 overflow-hidden ${
          isSticky ? "backdrop-blur-md bg-[#ffffff61]" : "bg-[#FBF7F4]"
        }`}
      >
        <div
          onClick={() => handleIsOpen()}
          className="absolute top-4 right-12 phone:right-[12%] ptab:right-[8%] laptop:invisible"
        >
          {isOpen ? (
            <IoCloseOutline
              size={40}
              color="btn-bg-main"
              className="z-[1000]"
            />
          ) : (
            <MdMenu size={40} color="btn-bg-main" className="z-[1000]" />
          )}
        </div>
        <div className="">
          <p className="font-medium text-primary text-lg font-bold capitalise phone:text-base mtab:text-lg">
            Abyssinia software solution
          </p>
        </div>
        <ul
          className={`flex gap-8 justify-center items-center mr-14 visible ${
            isHidden ? "" : "hidden"
          }`}
        >
          <li className="font-colasta group py-2 relative font-medium text-primary capitalize text-base text-base hover:cursor-pointer hover:text-btn-bg-main transition-all duration-200">
            <NavLink
              NavLink
              to="/"
              className="before:inline-block before:content-[''] before:absolute before:bottom-[15%] before:w-full before:h-[2px] before:bg-btn-bg-main before:scale-x-0 before:origin-center group-hover:before:scale-x-100 before:transition-all before:duration-[200ms]"
            >
              Home
            </NavLink>
          </li>
          <li
            onMouseEnter={() => setShowPages(true)}
            onMouseLeave={() => setShowPages(false)}
            onClick={() => setShowPages(!showPages)}
            className={`font-colasta group py-2 relative font-medium text-primary capitalize text-base text-base hover:cursor-pointer hover:text-btn-bg-main transition-hover duration-200`}
          >
            <a className="before:inline-block before:content-[''] before:absolute before:bottom-[15%] before:w-full before:h-[2px] before:bg-btn-bg-main before:scale-x-0 before:origin-center group-hover:before:scale-x-100 before:transition-all before:duration-[200ms]">
              pages
            </a>
          </li>
          <li className="font-colasta group py-2 relative font-medium text-primary capitalize text-base text-base hover:cursor-pointer hover:text-btn-bg-main transition-hover duration-200">
            <NavLink
              to="/project"
              className="before:block before:content-[''] before:absolute before:bottom-[15%] before:w-full before:h-[2px] before:bg-btn-bg-main before:scale-x-0 before:origin-center group-hover:before:scale-x-100 before:transition-all before:duration-[200ms]"
            >
              {" "}
              portifolio
            </NavLink>
          </li>
          <li className="font-colasta group py-2 relative font-medium text-primary capitalize text-base text-base hover:cursor-pointer hover:text-btn-bg-main transition-hover duration-200">
            <NavLink
              to="/about"
              className="before:block before:content-[''] before:absolute before:bottom-[15%] before:w-full before:h-[2px] before:bg-btn-bg-main before:scale-x-0 before:origin-center group-hover:before:scale-x-100 before:transition-all before:duration-[200ms]"
            >
              about
            </NavLink>
          </li>
          <li className="font-colasta group py-2 relative font-medium text-primary capitalize text-base text-base hover:cursor-pointer hover:text-btn-bg-main transition-hover duration-200">
            <NavLink
              to="/blog"
              className="before:block before:content-[''] before:absolute before:bottom-[15%] before:w-full before:h-[2px] before:bg-btn-bg-main before:scale-x-0 before:origin-center group-hover:before:scale-x-100 before:transition-all before:duration-[200ms]"
            >
              blog
            </NavLink>
          </li>
          <li className="font-colasta group py-2 relative font-medium text-primary capitalize text-base text-base hover:cursor-pointer hover:text-btn-bg-main transition-hover duration-200">
            <NavLink
              to="/contact"
              className="before:block before:content-[''] before:absolute before:bottom-[15%] before:w-full before:h-[2px] before:bg-btn-bg-main before:scale-x-0 before:origin-center group-hover:before:scale-x-100 before:transition-all before:duration-[200ms]"
            >
              contact
            </NavLink>
          </li>
        </ul>
        <div className={`${isHidden ? "" : "hidden"}`}>
          <NavLink to="/contact">
            <Link variant="primary" size="sm">
              let's talk!
            </Link>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default PageNav;
