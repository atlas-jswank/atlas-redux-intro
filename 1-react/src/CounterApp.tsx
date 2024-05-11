import React from "react";

function Counter() {
  return (
    <div>
      <h1>Count: 0</h1>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  );
}

export function CounterApp() {
  return <Counter />;
}
