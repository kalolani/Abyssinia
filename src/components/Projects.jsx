import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Projects() {
  return (
    <div className="bg-[#EDF4F3] py-[56px]">
      <div className="flex justify-center">
        <p className="capitalize text-center text-secondary text-[14px] font-medium py-2 px-[20px] tracking-wider rounded-[5px] bg-gradient-to-r from-[#FEE7C4] to-[#BEE5E4]">
          our projects
        </p>
      </div>
      <h1 className="text-primary font-bold text-center capitalize text-4xl my-6 mt-8">
        Explore Our Latest Projects
      </h1>
      <div className="relative z-[1]">
        <img
          src="shape-06.webp"
          alt="shape image"
          loading="lazy"
          width="1920"
          height="709"
          decoding="async"
          data-nimg="1"
          className="absolute left-[50%] -top-[70px] -z-[1] -translate-x-2/4 transform rotate-y-[180deg] -translate-x-2/4"
        />
      </div>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.5 }}
        className="relative z-[1] mt-[70px] grid grid-cols-3 max-w-[1150px] m-auto gap-8"
      >
        <ProjectCard
          image="mall.jpg"
          title="mall building information management system"
          description="we provide a complete mall building information management system with web application and mobile application"
        />
        <ProjectCard
          image="school.png"
          title="school information system"
          description="we provide a complete information system to manage all school activities.It has web app mobile app and  desktop app for school manager,for students and for parents"
        />
        <ProjectCard
          image="epr.png"
          title="EPR system"
          description="A complete EPR system for factories and trading companies"
        />
      </motion.div>
    </div>
  );
}

export default Projects;
