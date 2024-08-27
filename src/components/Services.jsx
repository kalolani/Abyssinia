import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import shape1 from "../assets/images/shape-01.webp";
import mobile_app from "../assets/images/mobile-app.png";
import consult from "../assets/images/consulting.png";
import testing from "../assets/images/testing.png";
import sass from "../assets/images/sass.png";
import pc1 from "../assets/images/pc-1.png";
import pc from "../assets/images/pc.png";

function Services() {
  return (
    <div className="relative bg-[#FBF7F4] mt-16 phone:mt-2 mdphone:mt-4 mtab:mt-6 tablet:mt-8 btablet:mt-10 laptop:mt-0 py-16 phone:py-8 mtab:py-10 tablet:py-12 btablet:py-14 laptop:py-16">
      <div className="flex justify-center">
        <motion.p
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="capitalize text-center text-secondary text-[14px] font-medium py-2 px-[20px] tracking-wider rounded-[5px] bg-gradient-to-r from-[#FEE7C4] to-[#BEE5E4]"
        >
          our services
        </motion.p>
      </div>

      <motion.h1
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="text-primary font-bold text-center capitalize text-4xl phone:text-xl mtab:text-2xl btablet:text-3xl laptop:text-4xl my-6 phone:my-2 tablet:my-4 laptop:my-6 mt-8"
      >
        Offering the Best high quality Services
      </motion.h1>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="relative z-[11] max-w-[1150px] m-auto grid grid-cols-3 phone:grid-cols-1 phone:justify-items-center mtab:grid-cols-2 laptop:grid-cols-3 gap-8 pt-10 phone:pt-0 mtab:pt-2 tablet:pt-4 btablet:pt-6 laptop:pt-10 z-[10] px-4"
      >
        <ServiceCard
          image={pc}
          title="website development"
          description="we develop Web apps, and websites for companies and for individuals with SEO optimization, with Attractive UI/UX design, Responsive design."
          buttonText="Learn More"
        />
        <ServiceCard
          image={mobile_app}
          title="mobile app development"
          description="we develop Web apps, and websites for companies and for individuals with SEO optimization, with Attractive UI/UX design, Responsive design."
          buttonText="Learn More"
        />
        <ServiceCard
          image={consult}
          title="software as service"
          description="we develop Web apps, and websites for companies and for individuals with SEO optimization, with Attractive UI/UX design, Responsive design."
          buttonText="Learn More"
        />
        <ServiceCard
          image={sass}
          title="General technology consulting"
          description="we develop Web apps, and websites for companies and for individuals with SEO optimization, with Attractive UI/UX design, Responsive design."
          buttonText="Learn More"
        />
        <ServiceCard
          image={pc1}
          title="software development training"
          description="we develop Web apps, and websites for companies and for individuals with SEO optimization, with Attractive UI/UX design, Responsive design."
          buttonText="Learn More"
        />
        <ServiceCard
          image={testing}
          title="software security tasting"
          description="we develop Web apps, and websites for companies and for individuals with SEO optimization, with Attractive UI/UX design, Responsive design."
          buttonText="Learn More"
        />
      </motion.div>

      <div className="absolute top-[23%] phone:top-[7%]  phone:-start-[20%] tablet:top-[20%] laptop:top-[23%] -start-[5%] tablet:-start-[8%] laptop:-start-[5%] z-[9]">
        <img src={shape1} />
      </div>
    </div>
  );
}

export default Services;
