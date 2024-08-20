import Home from "./pages/Home";
import { StoreProvider } from "./contexts/storeContext";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <StoreProvider>
      <div className="relative">
        <Routes>
          {" "}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </StoreProvider>
  );
}

export default App;
