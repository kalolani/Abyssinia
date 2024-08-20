/* eslint-disable no-unused-vars */
import Navbar from "../components/Navbar";
import PageNav from "../components/PageNav";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import ProjectCard from "../components/ProjectCard";
import AboutCard from "../components/AboutCard";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
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
              our team
            </motion.h1>
            <motion.p
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-center text-[22px] phone:text-[18px] mdphone:text-[18px] ptab:text-[19px] mtab:text-[20px] tablet:[22px] text-tertiary leading-[1.36] mt-4  px-4"
            >
              A great team is the backbone of a successful software company.
              <br />
              turning code into innovation and challenges into achievements.
            </motion.p>
          </div>
        </div>
      </div>
      <div className="py-24">
        {" "}
        <motion.h1
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="font-colasta capitalize text-center text-6xl phone:text-4xl mtab:text-4xl tablet:text-4xl btablet:text-5xl laptop:text-3xl font-bold text-primary mt-4"
        >
          the expert team
        </motion.h1>
        <motion.p
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center text-[22px] phone:text-[18px] mdphone:text-[18px] ptab:text-[19px] mtab:text-[20px] tablet:[15px] tablet:text-[18px] text-secondary leading-[1.36] mt-4  px-4"
        >
          A great team is the backbone of a successful software company.
          <br />
          turning code into innovation and challenges into achievements.
        </motion.p>
        <div className="m-auto max-w-[1060px] grid grid-cols-4 gap-8 items-center justify-items-center mt-14">
          <AboutCard
            image="kaleab.jpg"
            title="kaleab gemechu"
            description="frontend developer"
          />
          <AboutCard
            image="kaleab.jpg"
            title="kaleab gemechu"
            description="frontend developer"
          />
          <AboutCard
            image="kaleab.jpg"
            title="kaleab gemechu"
            description="frontend developer"
          />
          <AboutCard
            image="kaleab.jpg"
            title="kaleab gemechu"
            description="frontend developer"
          />
          <AboutCard
            image="kaleab.jpg"
            title="kaleab gemechu"
            description="frontend developer"
          />
          <AboutCard
            image="kaleab.jpg"
            title="kaleab gemechu"
            description="frontend developer"
          />
          <AboutCard
            image="kaleab.jpg"
            title="kaleab gemechu"
            description="frontend developer"
          />
          <AboutCard
            image="kaleab.jpg"
            title="kaleab gemechu"
            description="frontend developer"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
