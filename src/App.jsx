import Home from "./pages/Home";
import { StoreProvider } from "./contexts/storeContext";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import BuildingSystem from "./pages/BuildingSystem";
import SchoolSystem from "./pages/SchoolSystem";
import EprSystem from "./pages/EprSystem";

function App() {
  return (
    <StoreProvider>
      <div className="relative">
        <Routes>
          {" "}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/building" element={<BuildingSystem />} />
          <Route path="/school" element={<SchoolSystem />} />
          <Route path="/epr" element={<EprSystem />} />
        </Routes>
      </div>
    </StoreProvider>
  );
}

export default App;
