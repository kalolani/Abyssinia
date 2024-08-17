/* eslint-disable no-unused-vars */
import Button from "./Button";
import { VscCalendar } from "react-icons/vsc";
import { GrUserAdmin } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const BlogCard = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  const isMediumScreen = useMediaQuery({ minWidth: 641, maxWidth: 1024 });
  const isLargeScreen = useMediaQuery({ minWidth: 1025 });
  const [slidesToShow, setSlidesToShow] = useState(3);

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
  const content = [
    {
      // text: "Amazing support! Totally all over my issues and we were changing it completely from being a place directory! Loving the theme on top of your task lists stay in touch with what's happening.",
      img: "software.jpg",
      calanderIcon: (
        <VscCalendar className="hover:cursor-pointer hover:fill-btn-bg-main transition-all duration-[300ms]" />
      ),
      adminIcon: (
        <GrUserAdmin className="hover:cursor-pointer hover:text-btn-bg-main transition-all duration-[300ms]" />
      ),
      date: "8 11 2024",
      name: "admin",
      title: "Abyssinia Software Solutions Launches New Innovative Software",
    },
    {
      // text: "Amazing support! Totally all over my issues and we were changing it completely from being a place directory! Loving the theme on top of your task lists stay in touch with what's happening.",
      img: "school management.jpg",
      calanderIcon: (
        <VscCalendar className="hover:cursor-pointer hover:fill-btn-bg-main transition-all duration-[300ms]" />
      ),
      adminIcon: (
        <GrUserAdmin className="hover:cursor-pointer hover:text-btn-bg-main transition-all duration-[300ms]" />
      ),
      date: "8 11 2024",
      name: "admin",
      title: "Special Discount on School Management System Subscriptions",
    },
    {
      // text: "Amazing support! Totally all over my issues and we were changing it completely from being a place directory! Loving the theme on top of your task lists stay in touch with what's happening.",
      img: "EPR.jpg",
      calanderIcon: (
        <VscCalendar className="hover:cursor-pointer hover:fill-btn-bg-main transition-all duration-[300ms]" />
      ),
      adminIcon: (
        <GrUserAdmin className="hover:cursor-pointer hover:text-btn-bg-main transition-all duration-[300ms]" />
      ),
      date: "8 11 2024",
      name: "admin",
      title: "Get 50% Off on ERP System Subscriptions for One Month!",
    },
    {
      // text: "Amazing support! Totally all over my issues and we were changing it completely from being a place directory! Loving the theme on top of your task lists stay in touch with what's happening.",
      img: "software.jpg",
      calanderIcon: (
        <VscCalendar className="hover:cursor-pointer hover:fill-btn-bg-main transition-all duration-[300ms]" />
      ),
      adminIcon: (
        <GrUserAdmin className="hover:cursor-pointer hover:text-btn-bg-main transition-all duration-[300ms]" />
      ),
      date: "8 11 2024",
      name: "admin",
      title: "Abyssinia Software Solutions Launches New Innovative Software",
    },
    {
      // text: "Amazing support! Totally all over my issues and we were changing it completely from being a place directory! Loving the theme on top of your task lists stay in touch with what's happening.",
      img: "school management.jpg",
      calanderIcon: (
        <VscCalendar className="hover:cursor-pointer hover:fill-btn-bg-main transition-all duration-[300ms]" />
      ),
      adminIcon: (
        <GrUserAdmin className="hover:cursor-pointer hover:text-btn-bg-main transition-all duration-[300ms]" />
      ),
      date: "8 11 2024",
      name: "admin",
      title: "Special Discount on School Management System Subscriptions",
    },
  ];
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

export default BlogCard;
