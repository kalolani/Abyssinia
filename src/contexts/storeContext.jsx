/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const StoreContext = createContext();

function StoreProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  function handleIsOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <StoreContext.Provider value={{ isOpen, handleIsOpen }}>
      {children}
    </StoreContext.Provider>
  );
}

function useStores() {
  const context = useContext(StoreContext);
  if (context === undefined) throw new Error("context used outside of scope");
  return context;
}

export { StoreProvider, useStores };
