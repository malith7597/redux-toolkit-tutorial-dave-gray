import React, { useState } from "react";
// import following hooks from react-redux
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  const addAmount = Number(incrementAmount) || 0;
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <p>{value}</p>
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
        <input
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        <button onClick={() => dispatch(incrementByAmount(addAmount))}>
          Add Amount
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
