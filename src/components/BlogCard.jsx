/* eslint-disable no-unused-vars */
import Link from "./Link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { useStores } from "../contexts/storeContext";

/* eslint-disable react/prop-types */
const BlogCard = () => {
  const { content } = useStores();
  console.log(content);

  return (
    <div className="grid phone:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-y-[50px] px-4">
      {content.map((item, i) => (
        <>
          <div
            key="i"
            className=" group z-10 max-w-sm m-auto rounded-t-lg rounded-b-lg overflow-hidden transition-all px-4"
          >
            <div className="rounded-lg rounded-b-lg overflow-hidden h-3/5">
              <img
                src={item.img}
                className="w-full h-[15rem] scale-100 hover:cursor-pointer hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-center gap-2 border-b-[1px]  mx-6">
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
            <div className="mb-[50px]">
              <Link
                variant="primary"
                size="sm"
                className="bg-btn-bg-main font-bold"
              >
                explore more
              </Link>
            </div>

            <div
              key="i"
              className=" group z-10 max-w-sm m-auto rounded-t-lg rounded-b-lg overflow-hidden transition-all"
            >
              <div className="rounded-lg rounded-b-lg overflow-hidden h-3/5">
                <img
                  src={item.img}
                  className="w-full h-[15rem] scale-100 hover:cursor-pointer hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-center gap-2 border-b-[1px]  mx-6">
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
              <div className="">
                <Link
                  variant="primary"
                  size="sm"
                  className="bg-btn-bg-main font-bold"
                >
                  explore more
                </Link>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default BlogCard;
