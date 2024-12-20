/* eslint-disable no-unused-vars */
import Link from "./Link";
import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProjectCard = ({
  title,
  description,
  path,
  image,
  icon_1,
  icon_2,
  icon_3,
  icon_4,
}) => {
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
              <h2 className="text-primary font-bold capitalize text-center opacity-0 group-hover:opacity-100 p-4 pb-0">
                {title}
              </h2>
              <p className="text-secondary text-center opacity-0 group-hover:opacity-100 p-4 pb-0 transition-apacity delay-100">
                {description}
              </p>
              <div>
                <ul className="flex justify-center items-center gap-8">
                  <li>{icon_1}</li>
                  <li>{icon_2}</li>
                  <li>{icon_3}</li>
                  <li>{icon_4}</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <NavLink to={`/${path}`}>
                  {" "}
                  <Link
                    variant="primary"
                    // className="opacity-0 group-hover:opacity-100 p-4 transition-opacity delay-200"
                  >
                    learn more
                  </Link>
                </NavLink>
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
