import BlogCard from "./BlogCard";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Blogs() {
  return (
    <div className="relative py-[64px]">
      <div className="flex justify-center">
        <motion.p
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="tracking-widest capitalize text-center text-secondary text-[14px] font-medium py-2 px-[20px] tracking-wider rounded-[5px] bg-gradient-to-r from-[#FEE7C4] to-[#BEE5E4]"
        >
          our blogs
        </motion.p>
      </div>

      <motion.h1
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="text-primary font-bold text-center capitalize text-4xl my-6 mt-8"
      >
        Latest Articles & News from the Blogs
      </motion.h1>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="relative z-[1] mt-[70px] max-w-[1100px] m-auto gap-8"
      >
        <BlogCard />
      </motion.div>
    </div>
  );
}

export default Blogs;
