import { useStores } from "../contexts/storeContext";

function Navbar() {
  const { isOpen } = useStores();
  return (
    <>
      <div
        className={`fixed top-[5.6rem] right-0 bg-custom-radial z-[1000] rounded-[50%] transition-all duration-[800ms] ${
          isOpen
            ? "opacity-100 scale-150 w-screen h-screen"
            : "opacity-0 scale-0"
        }`}
      >
        &nbsp;
      </div>
      <nav
        className={`fixed top-0 left-0 h-screen z-[2000] ${
          isOpen ? "opacity-100 w-full" : "opacity-0 width-0"
        }`}
      >
        <ul className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <li className="list-none">
            <a
              href="#"
              className="no-underline text-white text-[1.5rem] font-[400] uppercase py-[1.2rem] px-[2.3rem] inline-block bg-custom-gradient bg-230% hover:bg-[100%] hover:translate-x-8 hover:text-btn-bg-main transition-all duration-[500ms]"
            >
              <span className="mr-[2rem]">01</span>about natours
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className="no-underline text-white text-[1.5rem] font-[400] uppercase py-[1.2rem] px-[2.3rem] inline-block bg-custom-gradient bg-230% hover:bg-[100%] hover:translate-x-8 hover:text-btn-bg-main transition-all duration-[500ms]"
            >
              <span className="mr-[2rem]">02</span>your benefits
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className="no-underline text-white text-[1.5rem] font-[400] uppercase py-[1.2rem] px-[2.3rem] inline-block bg-custom-gradient bg-230% hover:bg-[100%] hover:translate-x-8 hover:text-btn-bg-main transition-all duration-[500ms]"
            >
              <span className="mr-[2rem]">03</span>popular tours
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className="no-underline text-white text-[1.5rem] font-[400] uppercase py-[1.2rem] px-[2.3rem] inline-block bg-custom-gradient bg-230% hover:bg-[100%] hover:translate-x-8 hover:text-btn-bg-main transition-all duration-[500ms]"
            >
              <span className="mr-[2rem]">04</span>stories
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className="no-underline text-white text-[1.5rem] font-[400] uppercase py-[1.2rem] px-[2.3rem] inline-block bg-custom-gradient bg-230% hover:bg-[100%] hover:translate-x-8 hover:text-btn-bg-main transition-all duration-[500ms]"
            >
              <span className="mr-[2rem]">05</span>book now
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
