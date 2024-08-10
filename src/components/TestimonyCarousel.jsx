import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";
import { HiMiniArrowLongLeft, HiMiniArrowLongRight } from "react-icons/hi2";

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    // infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    nextArrow: <HiMiniArrowLongRight className="cursor-pointer" />,
    prevArrow: <HiMiniArrowLongLeft className="cursor-pointer" />,
    customPaging: (i) => <button className="custom-dot px-64">{i + 1}</button>,
    // appendDots: (dots) => (
    //   <div style={{ padding: "10px" }}>
    //     <ul
    //       style={{
    //         display: "flex",
    //         justifyContent: "center",
    //         listStyle: "none",
    //       }}
    //     >
    //       {dots}
    //     </ul>
    //   </div>
    // ),
  };

  const testimony = [
    {
      qoute: <FaQuoteLeft size={50} color="rgb(217 119 6)" />,
      text: "Amazing support! Totally all over my issues and we were changing it completely from being a place directory! Loving the theme on top of your task lists stay in touch with what's happening.",
      img: "yoro.png",
      name: "kaleab gemechu",
      title: "front-end developer",
    },
    {
      qoute: <FaQuoteLeft size={50} color="rgb(217 119 6)" />,
      text: "Amazing support! Totally all over my issues and we were changing it completely from being a place directory! Loving the theme on top of your task lists stay in touch with what's happening.",
      img: "zirkzee.png",
      name: "kaleab gemechu",
      title: "front-end developer",
    },
    {
      qoute: <FaQuoteLeft size={50} color="rgb(217 119 6)" />,
      text: "Amazing support! Totally all over my issues and we were changing it completely from being a place directory! Loving the theme on top of your task lists stay in touch with what's happening.",
      img: "ronaldo.png",
      name: "kaleab gemechu",
      title: "front-end developer",
    },
    {
      qoute: <FaQuoteLeft size={50} color="rgb(217 119 6)" />,
      text: "Amazing support! Totally all over my issues and we were changing it completely from being a place directory! Loving the theme on top of your task lists stay in touch with what's happening.",
      img: "sancho.png",
      name: "kaleab gemechu",
      title: "front-end developer",
    },
    {
      qoute: <FaQuoteLeft size={50} color="rgb(217 119 6)" />,
      text: "Amazing support! Totally all over my issues and we were changing it completely from being a place directory! Loving the theme on top of your task lists stay in touch with what's happening.",
      img: "kobe.png",
      name: "kaleab gemechu",
      title: "front-end developer",
    },
    {
      qoute: <FaQuoteLeft size={50} color="rgb(217 119 6)" />,
      text: "Amazing support! Totally all over my issues and we were changing it completely from being a place directory! Loving the theme on top of your task lists stay in touch with what's happening.",
      img: "messi.png",
      name: "kaleab gemechu",
      title: "front-end developer",
    },
  ];

  return (
    <div className="relative">
      <div className="max-w-[700px] m-auto">
        <Slider {...settings}>
          {testimony.map((item, index) => (
            <div key={index} className="">
              <div className="max-w-[800px] m-auto flex flex-col gap-6 items-center justify-center">
                <div>{item.qoute}</div>
                <div>
                  <p className="text-primary text-[17px] text-center capitalize">
                    {item.text}
                  </p>
                </div>
                <div>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="block w-[60px] h-[60px]"
                  />
                </div>
                <div>
                  <p className="capitalize text-primary text-center text-[15px]">
                    {item.name}
                  </p>
                  <p className="capitalize text-primary text-center text-[15px]">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
