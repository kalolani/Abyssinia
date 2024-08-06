/* eslint-disable no-unused-vars */
import Button from "./Button";

/* eslint-disable react/prop-types */
const ServiceCard = ({ title, description, buttonText, image }) => {
  return (
    <div className="relative group z-10 max-w-sm bg-white shadow-md rounded-lg overflow-hidden transition-all">
      <div className="relative z-10 p-6 group-hover:cursor-pointer">
        <div className="flex justify-center mb-4">
          <img src={image} alt={title} className="h-[50px] w-[50px]" />
        </div>
        <h2 className="text-primary group-hover:text-tertiary font-colasta text-primary text-lg font-semibold mb-2 text-center">
          {title}
        </h2>
        <p className="text-secondary group-hover:text-tertiary text-[13px] mb-4 text-center py-2">
          {description}
        </p>
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
        <div className="absolute -z-9 top-0 right-0 h-full w-[0%] group-hover:cursor-pointer group-hover:w-full group-hover:bg-indigo-950 transform translate-x-105 transition-all duration-[720ms]"></div>
        <div className="absolute -z-10 top-0 left-0 h-full w-[0%] group-hover:cursor-pointer group-hover:w-full group-hover:bg-[#F5F5F0] transform translate-x-105 transition-all duration-700"></div>
      </div>
    </div>
  );
};

export default ServiceCard;
