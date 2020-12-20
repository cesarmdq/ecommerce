import React from "react";
import { useState, createContext, useContext } from "react";

const cartContext = createContext();
const useCartContext = () => useContext(cartContext);

export const AppProvider = ({ children }) => {
  const [cant, setCant] = useState([]);
  const [games, setGames] = useState([]);

  const addGame = (game, cant) => {
    setGames([...games, { game, cant }]);
  };
  return (
    <cartContext.Provider value={{ games, addGame, cant }}>
      {children}
    </cartContext.Provider>
  );
};

export default useCartContext;