/* eslint-disable no-unused-vars */
import Button from "./Button";

/* eslint-disable react/prop-types */
const ProjectCard = ({ title, description, buttonText, image }) => {
  return (
    <div className="relative group z-10 max-w-sm bg-white shadow-md rounded-lg overflow-hidden transition-all">
      <div className="relative z-10 group-hover:cursor-pointer">
        <div className="relative z-[10] flex justify-center mb-4">
          <img
            src={image}
            alt={title}
            className="block relative -z-[1000] h-[18rem] w-[100%]"
          />
          <div className="absolute top-[5%] left-[5%] h-[100%] w-[90%] bg-white opacity-0 shadow-lg rounded-t-lg rounded-b-lg scale-50 group-hover:scale-100 group-hover:backface-hidden group-hover:opacity-100 transition-all duration-300 will-change-transform">
            {" "}
            <div className="flex flex-col items-center">
              <h2 className="text-primary font-bold capitalize text-center opacity-0 group-hover:opacity-100 p-4">
                {title}
              </h2>
              <p className="text-secondary text-center opacity-0 group-hover:opacity-100 p-4 transition-apacity delay-100">
                {description}
              </p>
              <div className="flex justify-center">
                <Button
                  type="primary"
                  className="opacity-0 group-hover:opacity-100 p-4 transition-opacity delay-200"
                >
                  learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2">
          <h2 className="capitalize text-primary font-colasta text-primary text-lg font-semibold text-center">
            {title}
          </h2>
          {/* <p className="text-secondary text-[13px] mb-4 text-center py-2">
            {description}
          </p> */}
        </div>
        {/* <div className="flex justify-center">
          <Button
            variant="primary"
            size="md"
            className="bg-btn-bg-main font-bold"
          >
            {buttonText}
          </Button>
        </div> */}
      </div>
      <div className="absolute z-0 top-0 left-0 h-full w-full cursor-pointer">
        {/* <div className="absolute -z-[9] top-[0] right-0 h-full w-[0%] group-hover:cursor-pointer group-hover:w-full group-hover:h-full group-hover:bg-indigo-950 transform translate-x-105 transition-all duration-[720ms]">
          <h2 className="absolute z-[100] top-[10%] left-[0] capitalize font-colasta text-white text-lg font-semibold text-center">
            {title} kaleab
          </h2>
        </div> */}
        {/* <div className="absolute -z-10 top-0 left-0 h-full w-[0%] group-hover:cursor-pointer group-hover:w-full group-hover:bg-[#F5F5F0] transform translate-x-105 transition-all duration-700"></div> */}
      </div>
    </div>
  );
};

export default ProjectCard;
