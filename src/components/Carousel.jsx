/* eslint-disable react/prop-types */
// src/components/Carousel.jsx

import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextSlide, prevSlide, setSlide } from "../Redux/carauselSlice";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Button from "./Button";

const Carousel = ({ content = [] }) => {
  const dispatch = useDispatch();
  const currentSlide = useSelector((state) => state.carousel.currentSlide);
  const slideRef = useRef();

  const totalSlides = content.length;

  // Auto-scroll the slides at a specified interval
  useEffect(() => {
    const autoScrollInterval = setInterval(() => {
      dispatch(nextSlide());
    }, 3000); // Change the time interval (3000ms = 3 seconds) as needed

    // Clear the interval on component unmount
    return () => clearInterval(autoScrollInterval);
  }, [dispatch]);

  // Handle infinite scrolling effect
  useEffect(() => {
    if (currentSlide < 1) {
      slideRef.current.style.transition = "none";
      dispatch(setSlide(totalSlides));
    } else if (currentSlide > totalSlides) {
      slideRef.current.style.transition = "none";
      dispatch(setSlide(1));
    } else {
      slideRef.current.style.transition = "transform 0.5s ease-in-out";
    }
  }, [currentSlide, dispatch, totalSlides]);

  // Determine the translateX value based on screen size and current slide
  const calculateTranslateX = () => {
    if (window.innerWidth <= 640) {
      // Phone size
      return `-${(currentSlide - 1) * 102}%`;
    } else if (window.innerWidth >= 1024) {
      // Laptop size
      return `-${(currentSlide - 1) * (102 / 3)}%`;
    } else {
      // Tablet or default size
      return `-${(currentSlide - 1) * (102 / 2)}%`;
    }
  };

  return (
    <div className="carousel-container overflow-hidden px-4">
      {/* Wrap the carousel component */}
      <div className="carousel relative w-full max-w-6xl mx-auto overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={() => dispatch(prevSlide())}
          className="absolute left-2 z-10 p-2 bg-gray-200 rounded-full hover:bg-gray-300 top-1/3 transform -translate-y-1/2 shadow-sm shadow-primary"
        >
          <FaArrowCircleLeft />
        </button>

        {/* Slides */}
        <div
          ref={slideRef}
          className="slides flex gap-2 transition-transform duration-500 ease-in-out translate-x-${-(currentSlide - 1) * 100} w-full"
          style={{
            transform: `translateX(${calculateTranslateX()})`,
            width: "100%",
          }}
        >
          {/* Duplicate Last Three Slides */}
          {content.slice(-3).map((item, index) => (
            <div
              key={`duplicate-last-${index}`}
              className="w-full phone:w-full tablet:w-1/2 laptop:w-1/3 flex-shrink-0 overflow-hidden"
            >
              <SlideContent item={item} />
            </div>
          ))}

          {/* Original Slides */}
          {content.map((item, index) => (
            <div
              key={index}
              className="w-full phone:w-full tablet:w-1/2 laptop:w-1/3 flex-shrink-0 overflow-hidden"
            >
              <SlideContent item={item} />
            </div>
          ))}

          {/* Duplicate First Three Slides */}
          {content.slice(0, 3).map((item, index) => (
            <div
              key={`duplicate-first-${index}`}
              className="w-full phone:w-full tablet:w-1/2 laptop:w-1/3 flex-shrink-0 overflow-hidden"
            >
              <SlideContent item={item} />
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => dispatch(nextSlide())}
          className="absolute right-2 z-10 p-2 bg-gray-200 rounded-full hover:bg-gray-300 top-1/3 transform -translate-y-1/2 shadow-md shadow-primary"
        >
          <FaArrowCircleRight />
        </button>

        {/* Indicators */}
        <div className="indicators flex justify-center mt-4 space-x-2">
          {content.map((_, index) => (
            <button
              key={index}
              className={`${
                index + 1 === currentSlide ? "bg-primary" : "bg-gray-400"
              } w-2.5 h-2.5 rounded-full`}
              onClick={() => dispatch(setSlide(index + 1))}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Slide Content Component
const SlideContent = ({ item }) => (
  <>
    <div className="overflow-hidden rounded-t-[5px]">
      <img
        src={item.img}
        alt={item.title}
        className="block h-[15rem] w-full sm:w-[18rem] md:w-[22rem] scale-100 hover:cursor-pointer hover:scale-105 rounded-t-[5px]"
      />
    </div>
    <div className="flex items-center justify-center mb-2 border-b-[1px] w-[70%] m-auto py-2 gap-4 pt-2">
      {item.calanderIcon}
      <span>{item.date}</span>
      {item.adminIcon}
      <span>{item.name}</span>
    </div>
    <h2 className="text-lg font-semibold mb-2 text-left px-6">{item.title}</h2>
    <div className="py-4 px-6">
      <Button variant="primary" size="sm" className="bg-btn-bg-main font-bold">
        explore more
      </Button>
    </div>
  </>
);

export default Carousel;
