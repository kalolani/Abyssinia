/* eslint-disable no-unused-vars */
import Button from "./Button";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { useStores } from "../contexts/storeContext";

/* eslint-disable react/prop-types */
const BlogCarousel = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  const isMediumScreen = useMediaQuery({ minWidth: 641, maxWidth: 1024 });
  const isLargeScreen = useMediaQuery({ minWidth: 1025 });
  const [slidesToShow, setSlidesToShow] = useState(3);
  const { content } = useStores();
  console.log(content);

  useEffect(() => {
    if (isSmallScreen) {
      setSlidesToShow(1);
    } else if (isMediumScreen) {
      setSlidesToShow(2);
    } else if (isLargeScreen) {
      setSlidesToShow(3);
    }
  }, [isSmallScreen, isMediumScreen, isLargeScreen]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    customPaging: (i) => <button className="custom-dot px-64">{i + 1}</button>,
  };

  return (
    <Slider {...settings}>
      {content.map((item, i) => (
        <div
          key="i"
          className="group z-10 max-w-sm m-auto rounded-t-lg rounded-b-lg overflow-hidden transition-all px-4"
        >
          <div className="rounded-lg rounded-b-lg overflow-hidden h-3/5">
            <img
              src={item.img}
              className="w-full h-full scale-100 hover:cursor-pointer hover:scale-105"
            />
          </div>
          <div className="flex items-center justify-center gap-2 border-b-[1px] mx-6">
            {item.calanderIcon}
            <p className="text-secondary text-center p-4 transition-apacity delay-100 hover:cursor-pointer hover:text-btn-bg-main transition-all duration-[300ms]">
              {item.date}
            </p>
            {item.adminIcon}
            <p className="hover:cursor-pointer hover:text-btn-bg-main transition-all duration-[300ms]">
              {item.name}
            </p>
          </div>

          <h2 className="px-[2px] py-4 capitalize text-primary font-colasta text-primary text-[17px] text-left align-middle break-normal font-semibold hover:cursor-pointer hover:text-btn-main hover:text-btn-bg-main transition-all duration-[300ms]">
            {item.title}
          </h2>
        </div>
      ))}
    </Slider>
  );
};

export default BlogCarousel;
