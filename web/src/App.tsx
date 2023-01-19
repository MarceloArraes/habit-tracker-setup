import { useState } from "react";
import "./styles/global.css";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Habit } from "./components/Habit";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Habit completed={10} />
      <Habit completed={3} />
      <Habit />
      <Habit />
      <Habit />
      <Habit />
      <Habit />
    </div>
  );
}

export default App;
