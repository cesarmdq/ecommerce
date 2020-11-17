import { useState } from "react";

export default function ItemCount({ initial, max, min, onAdd }) {
  const [counter, setCounter] = useState(initial);

  const addToCounter = () => {
    if (counter < max) {
      setCounter(counter + 1);
    }
  };

  const subToCounter = () => {
    if (counter > min) setCounter(counter - 1);
  };

  const handleAddToCart = () => {
    onAdd(counter);
  };

  return (
    <>
      <button onClick={addToCounter}>+</button>
      <div>{counter}</div>
      <button onClick={subToCounter}>-</button>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </>
  );
}
