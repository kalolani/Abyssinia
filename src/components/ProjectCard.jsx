/* eslint-disable no-unused-vars */
import Button from "./Button";
import { FaReact } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProjectCard = ({ title, description, path, image }) => {
  return (
    <div className="relative group z-10 max-w-sm bg-white shadow-md rounded-lg overflow-hidden transition-all">
      <div className="relative z-10 group-hover:cursor-pointer">
        <div className="relative z-[10] flex justify-center mb-4">
          <img
            src={image}
            alt={title}
            className="block relative -z-[1000] h-[18rem] w-full"
          />
          <div className="absolute top-[5%] left-[5%] py-4 w-[90%] bg-white opacity-0 shadow-lg rounded-t-lg rounded-b-lg scale-50 group-hover:scale-100 group-hover:backface-hidden group-hover:opacity-100 transition-all duration-300 will-change-transform">
            {" "}
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-primary font-bold capitalize text-center opacity-0 group-hover:opacity-100 p-4">
                {title}
              </h2>
              <p className="text-secondary text-center opacity-0 group-hover:opacity-100 p-4 transition-apacity delay-100">
                {description}
              </p>
              <div>
                <ul className="flex justify-center items-center gap-8">
                  <li>
                    <FaReact size={30} color="rgb(6 182 212)" />
                  </li>
                  <li>
                    <FaLaravel size={30} color="rgb(220 38 38)" />
                  </li>
                  <li>
                    <SiTailwindcss size={30} color="rgb(14 165 233)" />
                  </li>
                  <li>
                    <SiPostgresql size={30} />
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <Link to={`/${path}`}>
                  {" "}
                  <Button
                    variant="primary"
                    // className="opacity-0 group-hover:opacity-100 p-4 transition-opacity delay-200"
                  >
                    learn more
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2">
          <h2 className="capitalize text-primary font-colasta text-primary text-lg font-semibold text-center">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
