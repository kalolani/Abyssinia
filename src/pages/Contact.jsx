/* eslint-disable no-unused-vars */
import Navbar from "../components/Navbar";
import PageNav from "../components/PageNav";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Footer from "../components/Footer";
import Map from "../components/Map";

function Contact() {
  return (
    <div>
      {" "}
      <div className="relative bg-custom-linear h-[92vh] w-full overflow-hidden">
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
              Contac Us
            </motion.h1>
            <motion.p
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-center text-[22px] phone:text-[18px] mdphone:text-[18px] ptab:text-[19px] mtab:text-[20px] tablet:[22px] text-tertiary leading-[1.36] mt-4  px-4"
            >
              Why I say old chap that is spiffing off his nut arse pear shaped
              plastered <br /> Jeffrey bodge barney some dodgy.!!
            </motion.p>
          </div>
        </div>
      </div>
      <div
        className="max-w-[1000px] m-auto py-[40px] grid phone:grid-cols-1 mtab:grid-cols-2 items-center justify-items-center px-4"
        id="contact"
      >
        <div className="w-full phone:flex phone:justify-center ptab:flex-none ptab:flex-none">
          <form onSubmit="" className="w-full w-3/6 phone:w-full">
            <div className="">
              <label
                htmlFor="name"
                className="block text-primary mb-[10px] text-[20px]"
              >
                name
              </label>

              <input
                name="name"
                type="text"
                id="name"
                placeholder="Your Name"
                required
                className="inline-block w-3/4 h-[30px] py-[20px] px-[30px] text-[15px] mb-[15px] border focus:outline-btn-bg-main rounded-md"
              />
            </div>
            <div className="email-container">
              <label
                htmlFor="email"
                className="block text-primary mb-[10px] text-[20px]"
              >
                email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your E-mail Address"
                required
                className="inline-block w-3/4 h-[30px] py-[20px] px-[30px] text-[15px] mb-[15px] border focus:outline-btn-bg-main rounded-md"
              />
            </div>
            <div className="textarea-container">
              <label
                htmlFor="message"
                className="block text-primary mb-[10px] text-[20px]"
              >
                Message
              </label>
              <textarea
                placeholder="Your Message"
                id="message"
                required
                className="inline-block h-[100px] w-3/4 mb-[25px] border py-[20px] px-[30px] rounded-md focus:outline-btn-bg-main"
              ></textarea>
            </div>

            <div className="flex ">
              {" "}
              <button
                type="submit"
                className="inline-block bg-btn-bg-main place-self-center text-tertiary hover:bg-transparent hover:text-btn-bg-main font-semibold capitalize border px-4 py-2 rounded-[2px] border-btn-bg-main flex items-center mr-0 "
              >
                subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="">
          <img src="globe.png" />
        </div>
      </div>
      <div className="h-[70vh] w-[92%] m-auto mb-[40px]">
        <Map />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
