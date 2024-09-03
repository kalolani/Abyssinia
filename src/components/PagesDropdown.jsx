import { Link } from "react-router-dom";
import { useStores } from "../contexts/storeContext";
// import { useStores } from "../contexts/storeContext";

function PagesDropdown() {
  const { setShowPages, setIsOpen } = useStores();
  function handleClick() {
    setShowPages(!setShowPages);
    setIsOpen(false);
  }

  return (
    <div
      onMouseEnter={() => setShowPages(true)}
      onMouseLeave={() => setShowPages(false)}
      className={`z-[100000] fixed top-[12%] left-[38%] bg-white px-6 py-6 border rounded-md shadow-md transition-all duration-200 `}
    >
      <ul className="flex flex-col gap-4">
        <li className="font-colasta text-primary text-[15px] hover:text-btn-bg-main">
          <Link onClick={() => handleClick()} to="/building">
            Buildign System
          </Link>
        </li>
        <li className="font-colasta text-primary text-[15px] hover:text-btn-bg-main">
          <Link onClick={() => handleClick()} to="/school">
            School System
          </Link>
        </li>
        <li className="font-colasta text-primary text-[15px] hover:text-btn-bg-main">
          <Link onClick={() => handleClick()} to="/epr">
            EPR system
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default PagesDropdown;
