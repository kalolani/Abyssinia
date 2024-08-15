import Button from "./Button";
import PageNav from "./PageNav";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Header() {
  return (
    <div className="relative h-screen bg-gradient-to-b from-[#FBF7F4] to-[#fbf7f400] ">
      <PageNav />

      <div className="flex justify-center">
        <p className="capitalize text-center text-secondary text-[14px] font-medium py-2 px-[11px] rounded-[5px] bg-gradient-to-r from-[#FEE7C4] to-[#BEE5E4] mt-32">
          boost your productivity
        </p>
      </div>
      <motion.h1
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="font-colasta text-center text-6xl font-bold text-primary mt-4"
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
        className="text-center text-[22px] text-secondary leading-[1.36] mt-4"
      >
        Specializing in custom software, we create innovative
        <br /> solutions to streamline operations and boost productivity.
      </motion.p>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center items-center mt-10"
      >
        <Button
          variant="primary"
          size="lg"
          className="bg-btn-bg-main font-bold"
        >
          Apply now
        </Button>
        <Button variant="secondary" size="lg" className="ml-4">
          Read more
        </Button>
      </motion.div>
      <div className="absolute top-[70%] end-[-24%] z-[-1]">
        <img src="shape-03.webp" />
      </div>
      <div className="absolute top-[95%] end-[1%] z-[100] animate-wc-y-anim">
        <img src="shape-05.webp" />
      </div>
      <div className="absolute bottom-[calc(80%+13px)] start-[25%] cube z-[1]">
        <img src="cube.png" />
      </div>
      <div className="absolute h-[10px] w-[10px] rounded-lg bg-[#00c99c] top-[40%] start-[5%] bubble-one z-[100]"></div>
      <div className="absolute h-[30px] w-[30px] rounded-2xl bg-[#fca249] top-[65%] start-[8%] bubble-two z-[100]"></div>
      <div className="absolute h-[15px] w-[15px] rounded-2xl bg-[#7d95fa] top-[95%] start-[20%] bubble-two z-[100]"></div>
      <div className="absolute h-[30px] w-[30px] rounded-2xl bg-[#ff9398] top-[65%] end-[8%] bubble-two z-[100]"></div>
      <div className="absolute h-[15px] w-[15px] rounded-2xl bg-[#d27dfa] top-[40%] end-[5%] bubble-two z-[100]"></div>
    </div>
  );
}

export default Header;
