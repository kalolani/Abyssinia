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
import { useStores } from "../contexts/storeContext";
import PagesDropdown from "../components/PagesDropdown";
import star from "../assets/images/star.png";
import subscribe from "../assets/images/subscribe.png";
import service from "../assets/images/service.png";
import system from "../assets/images/system.png";
import right from "../assets/images/right.png";
import free from "../assets/images/free.png";
import software from "../assets/images/software.png";

function SchoolSystem() {
  const { showPages } = useStores();
  return (
    <div className="overflow-hidden">
      {" "}
      <div className="relative bg-custom-linear h-[92vh] w-full">
        <PageNav />
        <Navbar />
        {showPages && <PagesDropdown />}
        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="">
            <motion.h1
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="font-colasta capitalize text-center text-6xl phone:text-4xl mtab:text-4xl tablet:text-4xl btablet:text-5xl laptop:text-6xl font-bold text-tertiary mt-4"
            >
              School System SAS Service
            </motion.h1>
            <motion.p
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-center text-[22px] w-3/4 m-auto phone:text-[18px] mdphone:text-[18px] ptab:text-[19px] mtab:text-[20px] tablet:[22px] text-tertiary leading-[1.36] mt-4  px-4"
            >
              Comprehensive School Management Solution with SAS Benefits
            </motion.p>
          </div>
        </div>
      </div>
      <div className="max-w-[1000px] m-auto grid phone:grid-cols-1 mtab:grid-cols-2 items-center gap-4 py-20">
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col justify-self-center gap-6 px-4"
        >
          <div>
            <img src={star} className="block h-[50px] w-[50px]" />
          </div>
          <div>
            <h2 className="text-primary text-3xl font-bold">
              Subscription Plan:
            </h2>
          </div>
          <div>
            <p className="text-secondary">
              The subscription plan offers a comprehensive package at a cost of
              1 Birr per Month per Student, providing valuable services and
              benefits that cater to your needs, ensuring you receive consistent
              quality and support throughout your subscription period.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex justify-center"
        >
          <img
            src={subscribe}
            className="block w-full h-full phone:w-3/4 hone:h-3/4"
          />
        </motion.div>
      </div>
      <div className="max-w-[1000px] m-auto grid phone:grid-cols-1 mtab:grid-cols-2 items-center gap-6 my-10">
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex justify-center"
        >
          <img src={service} className="block phone:w-3/4 phone:h-3/4" />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="w-3/4 justify-self-center flex flex-col gap-4 my-6"
        >
          <div className="ml-4">
            <img src={star} className="block h-[35px] w-[35px]" />
          </div>
          <div>
            <h2 className="text-primary text-2xl font-bold ml-4">
              Free Services:
            </h2>
          </div>
          <div className="">
            <ul className="flex flex-col gap-4">
              <li className="flex items-start justify-items-center gap-[2px]">
                <img src={right} className="block h-[25px] w-[50px]" />
                <p>
                  Android App for Teachers, Students, Student Parents,
                  Accountant, and School Admin/Director
                </p>
              </li>
              <li className="flex items-start justify-items-center gap-2">
                <img src={right} className="block h-[25px] w-[50px]" />
                <p>Compatibility with iPhone, Android, and Computers</p>
              </li>
              <li className="flex items-start justify-items-center gap-2">
                <img src={right} className="block h-[25px] w-[50px]" />
                <p>Works Online or Offline</p>
              </li>
              <li className="flex items-start justify-items-center gap-2">
                <img src={right} className="block h-[25px] w-[50px]" />
                <p>
                  Complete Documentation: User Manual and Technician Document
                </p>
              </li>
              <li className="flex items-start justify-items-center gap-2">
                <img src={right} className="block h-[25px] w-[50px]" />
                <p>
                  Free Customization, Training, Support, Deployment,
                  Maintenance, and Server Monitoring
                </p>
              </li>
              <li className="flex items-start justify-items-center gap-2">
                <img src={right} className="block h-[25px] w-[50px]" />
                <p>Free Trial Access</p>
              </li>
              <li className="flex items-start justify-items-center gap-2">
                <img src={right} className="block h-[25px] w-[50px]" />
                <p>Additional Android Application Included</p>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
      <div className="max-w-[1000px] m-auto grid phone:grid-cols-1 mtab:grid-cols-2 items-center gap-4">
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col justify-self-center gap-6 mt-4"
        >
          <div className="ml-4">
            <img src={star} className="block h-[35px] w-[35px]" />
          </div>
          <div>
            <h2 className="text-primary text-3xl font-bold ml-4">
              System Includes:
            </h2>
          </div>
          <div className="">
            <ul className="flex flex-col gap-4">
              <li className="flex items-start justify-items-center gap-[2px]">
                <img src={right} className="block h-[25px] w-[50px]" />
                <p>
                  Separate Android App for All Users: Teachers, Accountants,
                  Students, Administrators
                </p>
              </li>
              <li className="flex items-start justify-items-center gap-2">
                <img src={right} className="block h-[25px] w-[50px]" />
                <p>School Website</p>
              </li>
              <li className="flex items-start justify-items-center gap-2">
                <img src={right} className="block h-[25px] w-[50px]" />
                <p>Desktop Computer App</p>
              </li>
              <li className="flex items-start justify-items-center gap-2">
                <img src={right} className="block h-[25px] w-[50px]" />
                <p>Finance System</p>
              </li>
              <li className="flex items-start justify-items-center gap-2">
                <img src={right} className="block h-[25px] w-[50px]" />
                <p>Student Information System</p>
              </li>
              <li className="flex items-start justify-items-center gap-2">
                <img src={right} className="block h-[25px] w-[50px]" />
                <p>Student Grading System</p>
              </li>
              <li className="flex items-start justify-items-center gap-2">
                <img src={right} className="block h-[25px] w-[50px]" />
                <p>Online Learning Management System</p>
              </li>
              <li className="flex items-start justify-items-center gap-2">
                <img src={right} className="block h-[25px] w-[50px]" />
                <p>Library Management System</p>
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex justify-center my-6"
        >
          <img src={system} className="block phone:w-3/4 phone:h-3/4" />
        </motion.div>
      </div>
      <div className="max-w-[1000px] m-auto grid phone:grid-cols-1 mtab:grid-cols-2 items-center gap-4 my-16">
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="items-center flex flex-col gap-8 mt-16"
        >
          <img src={free} className="block phone:w-3/4 phone:h-3/4" />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="justify-self-center flex flex-col gap-6"
        >
          <div className="">
            <ServiceCard
              image={software}
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
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default SchoolSystem;
