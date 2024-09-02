import Link from "./Link";
import PageNav from "./PageNav";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Navbar from "./Navbar";
import cube from "../assets/images/cube.png";
import shape5 from "../assets/images/shape-05.webp";
import shape3 from "../assets/images/shape-03.webp";

function Header() {
  return (
    <div className="relative h-screen bg-gradient-to-b from-[#FBF7F4] to-[#fbf7f400] overflow-hidden">
      {" "}
      <PageNav />
      <Navbar />
      <div className="flex justify-center">
        <p className="capitalize text-center text-secondary text-[14px] font-medium py-2 px-[11px] rounded-[5px] bg-gradient-to-r from-[#FEE7C4] to-[#BEE5E4] mt-32 phone:mt-20 mtab:mt-24 tablet:mt-28 laptop:mt-32">
          boost your productivity
        </p>
      </div>
      <motion.h1
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="font-colasta text-center text-6xl phone:text-4xl mtab:text-4xl tablet:text-4xl btablet:text-5xl laptop:text-6xl font-bold text-primary mt-4"
      >
        Drive More Customers
        <br />
        Through Digital
      </motion.h1>
      <motion.p
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center text-[22px] phone:text-[18px] mdphone:text-[18px] ptab:text-[19px] mtab:text-[20px] tablet:[22px] text-secondary leading-[1.36] mt-4  px-4"
      >
        Specializing in custom software, we create innovative <br /> solutions
        to streamline operations and boost productivity.
      </motion.p>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="relative z-[999] flex justify-center items-center mt-10 phone:mt-6 tablet:mt-6 laptop:mt-10"
      >
        <Link variant="primary" size="lg" className="bg-btn-bg-main font-bold">
          Apply now
        </Link>
        <Link variant="secondary" size="lg" className="ml-4">
          Read more
        </Link>
      </motion.div>
      <div className="absolute top-[70%] phone:top-[85%] mtab:top-[80%] tablet:top-[75%] laptop:top-[70%] end-[-24%] z-[-1]">
        <img src={shape3} />
      </div>
      <div className="absolute top-[95%] end-[1%] z-[100] animate-wc-y-anim">
        <img src={shape5} />
      </div>
      <div className="absolute bottom-[calc(80%+13px)] start-[25%] cube z-[1] phone:opacity-0 laptop:opacity-100 bigdesktop:opacity-0">
        <img src={cube} />
      </div>
      <div className="absolute h-[10px] w-[10px] rounded-lg bg-[#00c99c] top-[40%] start-[5%] bubble-one z-[100]"></div>
      <div className="absolute h-[30px] w-[30px] rounded-2xl bg-[#fca249] top-[65%] start-[8%] bubble-two z-[100] phone:opacity-0 tablet:opacity-100"></div>
      <div className="absolute h-[15px] w-[15px] rounded-2xl bg-[#7d95fa] top-[95%] start-[20%] bubble-two z-[100]"></div>
      <div className="absolute h-[30px] w-[30px] rounded-2xl bg-[#ff9398] top-[65%] end-[8%] bubble-two z-[100] phone:opacity-0 tablet:opacity-100"></div>
      <div className="absolute h-[15px] w-[15px] rounded-2xl bg-[#d27dfa] top-[40%] end-[5%] bubble-two z-[100]"></div>
    </div>
  );
}

export default Header;
