import Home from "./pages/Home";
import { StoreProvider } from "./contexts/storeContext";

function App() {
  return (
    <StoreProvider>
      <div className="">
        <Home />
      </div>
    </StoreProvider>
  );
}

export default App;
