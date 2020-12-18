import React from "react";
import { useState, createContext, useContext } from "react";

const cartContext = createContext();
const useCartContext = () => useContext(cartContext);

export const AppProvider = ({ children }) => {
  const [games, setGames] = useState([]);

  const addGame = (game, cant) => {
    setGames([...games, { game, cant }]);
  };
  return (
    <cartContext.Provider value={{ games, setGames }}>
      {children}
    </cartContext.Provider>
  );
};

export default useCartContext;
