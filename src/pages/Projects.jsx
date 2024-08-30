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
import { useStores } from "../contexts/storeContext";
import PagesDropdown from "../components/PagesDropdown";
import mall from "../assets/images/mall.jpg";
import school from "../assets/images/school.png";
import epr from "../assets/images/epr.png";
import shape6 from "../assets/images/shape-06.webp";

function Projects() {
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
              our projects
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
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="relative z-[1] mt-[70px] phone:mt-[10px] mdphone:mt-[15px] ptab:mt-[20px] mtab:mt-[35px] tablet:mt-[50px] btablet:mt-[60px] laptop:mt-[70px] grid grid-cols-3 phone:grid-cols-1 phone:justify-items-center mtab:grid-cols-2 mtab:justify-items-stretch laptop:grid-cols-3 max-w-[1150px] m-auto gap-8 px-4"
        >
          <ProjectCard
            image={mall}
            title="mall building information management system"
            description="we provide a complete mall building information management system with web application and mobile application"
            path="building"
          />
          <ProjectCard
            image={school}
            title="school information system"
            description="we provide a complete information system to manage all school activities.It has web app mobile app and  desktop app for school manager,for students and for parents"
            path="school"
          />
          <ProjectCard
            image={epr}
            title="EPR system"
            description="A complete EPR system for factories and trading companies"
            path="epr"
          />
          <ProjectCard
            image={mall}
            title="mall building information management system"
            description="we provide a complete mall building information management system with web application and mobile application"
            path="building"
          />
          <ProjectCard
            image={school}
            title="school information system"
            description="we provide a complete information system to manage all school activities.It has web app mobile app and  desktop app for school manager,for students and for parents"
            path="school"
          />
          <ProjectCard
            image={epr}
            title="EPR system"
            description="A complete EPR system for factories and trading companies"
            path="epr"
          />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
