import { Link } from "react-router-dom";
import { useStores } from "../contexts/storeContext";

function Navbar() {
  const { isOpen } = useStores();
  return (
    <>
      <div
        className={`fixed top-10 right-10 w-8 h-8 scale-0 bg-[#072032] z-[1000] rounded-[50%] transition-all duration-[800ms] ${
          isOpen ? "scale-[1000]" : "scale-0"
        }`}
      >
        &nbsp;
      </div>
      <nav
        className={`fixed top-1/2 mt-6 phone:left-[15%] mdphone:left-[15%] mtab:left-[25%] tablet:left-[28%] -translate-x-[200%] h-0 w-full z-[2000] text-center transition-all duration-[800ms] ${
          isOpen ? "w-full h-screen translate-x-[0%] " : ""
        }`}
      >
        <ul className="absolute w-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-left">
          <li className="list-none">
            <Link
              href="#"
              className="no-underline text-white phone:text-[1.1rem] mdphone:text-[1.5rem] font-[400] uppercase py-[1.2rem] px-[2.3rem] inline-block bg-custom-gradient bg-230% hover:bg-[100%] hover:translate-x-8 hover:text-btn-bg-main transition-all duration-[500ms]"
            >
              <span className="mr-[2rem] capitalize">01</span>home
            </Link>
          </li>
          <li className="list-none">
            <a
              href="#"
              className="no-underline text-white phone:text-[1.1rem] mdphone:text-[1.5rem] font-[400] uppercase py-[1.2rem] px-[2.3rem] inline-block bg-custom-gradient bg-230% hover:bg-[100%] hover:translate-x-8 hover:text-btn-bg-main transition-all duration-[500ms]"
            >
              <span className="mr-[2rem] capitalize">02</span>pages
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className="no-underline text-white phone:text-[1.1rem] mdphone:text-[1.5rem] font-[400] uppercase py-[1.2rem] px-[2.3rem] inline-block bg-custom-gradient bg-230% hover:bg-[100%] hover:translate-x-8 hover:text-btn-bg-main transition-all duration-[500ms]"
            >
              <span className="mr-[2rem] capitalize">03</span>portifolio
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className="no-underline text-white phone:text-[1.1rem] mdphone:text-[1.5rem] font-[400] uppercase py-[1.2rem] px-[2.3rem] inline-block bg-custom-gradient bg-230% hover:bg-[100%] hover:translate-x-8 hover:text-btn-bg-main transition-all duration-[500ms]"
            >
              <span className="mr-[2rem]">04</span>about
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className="no-underline text-white phone:text-[1.1rem] mdphone:text-[1.5rem] font-[400] uppercase py-[1.2rem] px-[2.3rem] inline-block bg-custom-gradient bg-230% hover:bg-[100%] hover:translate-x-8 hover:text-btn-bg-main transition-all duration-[500ms]"
            >
              <span className="mr-[2rem]">05</span>blog
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className="no-underline text-white phone:text-[1.1rem] mdphone:text-[1.5rem] font-[400] uppercase py-[1.2rem] px-[2.3rem] inline-block bg-custom-gradient bg-230% hover:bg-[100%] hover:translate-x-8 hover:text-btn-bg-main transition-all duration-[500ms]"
            >
              <span className="mr-[2rem]">05</span>contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
