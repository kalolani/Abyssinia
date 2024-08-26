import { Link } from "react-router-dom";
import { useStores } from "../contexts/storeContext";
// import { useStores } from "../contexts/storeContext";

function PagesDropdown() {
  const { setShowPages } = useStores();
  return (
    <div
      onMouseEnter={() => setShowPages(true)}
      onMouseLeave={() => setShowPages(false)}
      className={`z-[100000] fixed top-[12%] left-[38%]  bg-white px-4 py-4 border`}
    >
      <ul className="flex flex-col gap-4">
        <li className="text-primary hover:text-btn-bg-main">
          <Link to="/building">Buildign System</Link>
        </li>
        <li className="text-primary hover:text-btn-bg-main">
          <Link to="/school">School System</Link>
        </li>
        <li className="text-primary hover:text-btn-bg-main">
          <Link to="/epr">EPR system</Link>
        </li>
      </ul>
    </div>
  );
}

export default PagesDropdown;
