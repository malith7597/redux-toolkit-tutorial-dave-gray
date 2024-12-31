import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./feature/Counter/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="App">
      <Counter />
    </main>
  );
}

export default App;
