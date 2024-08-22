import Home from "./pages/Home";
import { StoreProvider } from "./contexts/storeContext";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

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
        </Routes>
      </div>
    </StoreProvider>
  );
}

export default App;
