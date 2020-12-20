import { useState } from "react";

export default function ItemCount({ initial, max, min, onAdd }) {
  const [counter, setCounter] = useState(0);

  const addToCounter = () => {
    if (counter < max) {
      setCounter(counter + 1);
      onAdd(counter + 1);
    }
  };

  const subToCounter = () => {
    if (counter > min) {
      setCounter(counter - 1);
      onAdd(counter - 1);
    }
  };

  return (
    <>
      <button onClick={addToCounter}>+</button>
      <div>{counter}</div>
      <button onClick={subToCounter}>-</button>
    </>
  );
}