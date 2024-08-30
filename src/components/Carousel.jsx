/* eslint-disable react/prop-types */
// src/components/Carousel.jsx

import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextSlide, prevSlide, setSlide } from "../Redux/carauselSlice";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

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
      // Move instantly to the duplicate of the last three slides
      slideRef.current.style.transition = "none";
      dispatch(setSlide(totalSlides));
    } else if (currentSlide > totalSlides) {
      // Move instantly to the duplicate of the first three slides
      slideRef.current.style.transition = "none";
      dispatch(setSlide(1));
    } else {
      slideRef.current.style.transition = "transform 0.5s ease-in-out";
    }
  }, [currentSlide, dispatch, totalSlides]);

  return (
    <div className="carousel-container overflow-hidden">
      {" "}
      {/* Wrap the carousel component */}
      <div className="carousel relative w-full max-w-6xl mx-auto overflow-hidden">
        {" "}
        {/* Use max-width and margin auto */}
        {/* Previous Button */}
        <button
          onClick={() => dispatch(prevSlide())}
          className="absolute left-[2px] z-10 p-2 bg-gray-200 rounded-full hover:bg-gray-300 top-[40%] transform -translate-y-1/2 shadow-sm shadow-primary"
        >
          <FaArrowCircleLeft />
        </button>
        {/* Slides */}
        <div
          ref={slideRef}
          className="slides flex gap-2"
          style={{
            transform: `translateX(-${(currentSlide - 1) * (100 / 3)}%)`,
            width: "100%",
          }}
        >
          {/* Duplicate Last Three Slides */}
          {content.slice(-3).map((item, index) => (
            <div
              key={`duplicate-last-${index}`}
              className="w-1/3 flex-shrink-0 overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt="Duplicate Last"
                  className="block h-[15rem] w-[22rem] scale-100 hover:cursor-pointer hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-center mb-2 border-b-[1px] w-[70%] m-auto py-2 gap-4 pt-2">
                {item.calanderIcon}
                <span>{item.date}</span>
                {item.adminIcon}
                <span>{item.name}</span>
              </div>
              <h2 className="text-lg font-semibold mb-2 text-left px-6">
                {item.title}
              </h2>
            </div>
          ))}

          {content.map((item, index) => (
            <div key={index} className="w-1/3 flex-shrink-0 overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="block h-[15rem] w-[22rem] scale-100 hover:cursor-pointer hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-center mb-2 border-b-[1px] w-[70%] m-auto py-2 gap-4 pt-2">
                {item.calanderIcon}
                <span>{item.date}</span>
                {item.adminIcon}
                <span>{item.name}</span>
              </div>

              <h2 className="text-lg font-semibold mb-2 text-left px-6">
                {item.title}
              </h2>
            </div>
          ))}

          {/* Duplicate First Three Slides */}
          {content.slice(0, 3).map((item, index) => (
            <>
              <div
                key={`duplicate-first-${index}`}
                className="w-1/3 flex-shrink-0 overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt="Duplicate First"
                    className="block h-[15rem] w-[22rem] scale-100 hover:cursor-pointer hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-center mb-2 border-b-[1px] w-[70%] m-auto py-2 gap-4 pt-2">
                  {item.calanderIcon}
                  <span>{item.date}</span>
                  {item.adminIcon}
                  <span>{item.name}</span>
                </div>
                <h2 className="text-lg font-semibold mb-2 text-left px-6">
                  {item.title}
                </h2>
              </div>
            </>
          ))}
        </div>
        {/* Next Button */}
        <button
          onClick={() => dispatch(nextSlide())}
          className="absolute right-[2px] z-10 p-2 bg-gray-200 rounded-full hover:bg-gray-300 top-[40%] transform -translate-y-1/2 shadow-md shadow-primary"
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

export default Carousel;
