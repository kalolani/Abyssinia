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

function SchoolSystem() {
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
              School System SAS Service
            </motion.h1>
            <motion.p
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-center text-[22px] w-3/4 m-auto phone:text-[18px] mdphone:text-[18px] ptab:text-[19px] mtab:text-[20px] tablet:[22px] text-tertiary leading-[1.36] mt-4  px-4"
            >
              Explore our diverse range of projects, where creativity meets
              innovation. Each project is a testament to our commitment to
              excellence, showcasing our ability to bring ideas to life through
              cutting-edge technology and thoughtful design.
            </motion.p>
          </div>
        </div>
      </div>
      <div className="py-24">
        {" "}
        <motion.h1
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="text-primary font-bold text-center capitalize text-4xl phone:text-2xl tablet:text-3xl laptop:text-4xl my-6 mt-8"
        >
          Latest Articles & News from the Blogs
        </motion.h1>
        <motion.p
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center text-[22px] phone:text-[18px] mdphone:text-[18px] ptab:text-[19px] mtab:text-[20px] tablet:[15px] tablet:text-[18px] text-secondary leading-[1.36] mt-4  px-4"
        >
          Welcome to our blog, where we explore the latest trends, tips,
          <br /> and insights in web development, design, and technology.
        </motion.p>
      </div>
      <div className="text-center">building system</div>
      <Footer />
    </div>
  );
}

export default SchoolSystem;
