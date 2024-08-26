/* eslint-disable no-unused-vars */
import Navbar from "../components/Navbar";
import PageNav from "../components/PageNav";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import AboutCard from "../components/AboutCard";
import Footer from "../components/Footer";
import BlogCarousel from "../components/BlogCarousel";
import BlogCard from "../components/BlogCard";
import ProjectCard from "../components/ProjectCard";
import ServiceCard from "../components/ServiceCard";
import Button from "../components/Button";

function EprSystem() {
  return (
    <div className="overflow-hidden">
      {" "}
      <div className="relative bg-custom-linear h-[92vh] w-full">
        <PageNav />
        <Navbar />
        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="">
            <motion.h1
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="font-colasta capitalize text-center text-6xl phone:text-4xl mtab:text-4xl tablet:text-4xl btablet:text-5xl laptop:text-6xl font-bold text-tertiary mt-4"
            >
              building system
            </motion.h1>
            <motion.p
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-center text-[22px] w-3/4 m-auto phone:text-[18px] mdphone:text-[18px] ptab:text-[19px] mtab:text-[20px] tablet:[22px] text-tertiary leading-[1.36] mt-4  px-4"
            >
              Comprehensive Management Solution with SAS Benefits
            </motion.p>
          </div>
        </div>
      </div>
      {/* <div className="relative z-10 py-[2rem] text-center">
        <div>
          <img
            src="dot.png"
            className="block absolute z-11 top-[35px] left-10 my-16"
          />
        </div>
      </div> */}
      <div className="max-w-[1000px] m-auto grid phone:grid-cols-1 mtab:grid-cols-2 items-center gap-4 py-20">
        <div className="justify-self-center flex flex-col gap-6">
          <div>
            <img src="star.png" className="block h-[50px] w-[50px]" />
          </div>
          <div>
            <h2 className="text-primary text-3xl font-bold">
              Subscription Plan:
            </h2>
          </div>
          <div>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start justify-items-center gap-[2px]">
                <img src="right.png" className="block h-[25px] w-[50px]" />
                <p>For One Month: 2500 Birr</p>
              </li>
              <li className="flex items-start justify-items-center gap-2">
                <img src="right.png" className="block h-[25px] w-[50px]" />
                <p>For Three Months: 7000 Birr</p>
              </li>
              <li className="flex items-start justify-items-center gap-2">
                <img src="right.png" className="block h-[25px] w-[50px]" />
                <p>For One Year: 13000 Birr</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="subscribe.png"
            className="block w-full h-full phone:w-3/4 phone:w-3/4"
          />
        </div>
      </div>
      <div className="max-w-[1000px] m-auto grid phone:grid-cols-1 mtab:grid-cols-2 items-center gap-6 my-10">
        <div className="flex justify-center">
          <img src="service.png" className="block phone:w-3/4 phone:h-3/4" />
        </div>
        <div className="w-3/4 justify-self-center flex flex-col gap-4 my-6">
          <div className="ml-4">
            <img src="star.png" className="block h-[35px] w-[35px]" />
          </div>
          <div>
            <h2 className="text-primary text-2xl font-bold ml-4">
              Free Services:
            </h2>
          </div>
          <div className="">
            <ul className="flex flex-col gap-4">
              <li className="flex items-start justify-items-center gap-[2px]">
                <img src="right.png" className="block h-[25px] w-[50px]" />
                <p>
                  Additional Android Application for Sales, Storekeeper, and
                  Managers
                </p>
              </li>
              <li className="flex items-start justify-items-center gap-2">
                <img src="right.png" className="block h-[25px] w-[50px]" />
                <p>Compatibility with iPhone, Android, and Computers</p>
              </li>
              <li className="flex items-start justify-items-center gap-2">
                <img src="right.png" className="block h-[25px] w-[50px]" />
                <p>Works Online or Offline</p>
              </li>
              <li className="flex items-start justify-items-center gap-2">
                <img src="right.png" className="block h-[25px] w-[50px]" />
                <p>
                  Complete Documentation: User Manual and Technician Document
                </p>
              </li>
              <li className="flex items-start justify-items-center gap-2">
                <img src="right.png" className="block h-[25px] w-[50px]" />
                <p>
                  Free Customization, Training, Support, Deployment,
                  Maintenance, and Server Monitoring
                </p>
              </li>
              <li className="flex items-start justify-items-center gap-2">
                <img src="right.png" className="block h-[25px] w-[50px]" />
                <p>Free Trial Access</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[1000px] m-auto grid phone:grid-cols-1 mtab:grid-cols-2 items-center gap-4">
        <div className="justify-self-center flex flex-col gap-6 mt-4">
          <div className="ml-4">
            <img src="star.png" className="block h-[35px] w-[35px]" />
          </div>
          <div>
            <h2 className="text-primary text-3xl font-bold ml-4">
              System Includes:
            </h2>
          </div>
          <div className="">
            <ul className="flex flex-col gap-4">
              <li className="flex items-start justify-items-center gap-[2px]">
                <img src="right.png" className="block h-[25px] w-[50px]" />
                <p>Finance and Accounting System</p>
              </li>
              <li className="flex items-start justify-items-center gap-2">
                <img src="right.png" className="block h-[25px] w-[50px]" />
                <p>Inventory and Warehouse Management System</p>
              </li>
              <li className="flex items-start justify-items-center gap-2">
                <img src="right.png" className="block h-[25px] w-[50px]" />
                <p>Human Resource Management System</p>
              </li>
              <li className="flex items-start justify-items-center gap-2">
                <img src="right.png" className="block h-[25px] w-[50px]" />
                <p>Customer Relationship Management (CRM) System</p>
              </li>
              <li className="flex items-start justify-items-center gap-2">
                <img src="right.png" className="block h-[25px] w-[50px]" />
                <p>Point of Sale (POS) System</p>
              </li>
              <li className="flex items-start justify-items-center gap-2">
                <img src="right.png" className="block h-[25px] w-[50px]" />
                <p>Supply Chain Management System</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center my-6">
          <img src="system.png" className="block phone:w-3/4 phone:h-3/4" />
        </div>
      </div>
      <div className="max-w-[1000px] m-auto grid phone:grid-cols-1 mtab:grid-cols-2 items-center gap-4 my-10">
        <div className="items-center flex flex-col gap-6 mt-16">
          <img src="free.png" className="block phone:w-3/4 phone:w-3/4" />
        </div>
        <div className="justify-self-center flex flex-col gap-6">
          <div className="">
            <ServiceCard
              image="software.png"
              title="free space"
              description="BG building"
              buttonText="Learn More"
            />
          </div>
          <Button
            variant="primary"
            size="lg"
            className="bg-btn-bg-main font-bold"
          >
            learn more
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EprSystem;
