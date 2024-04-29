import React, { useState, useEffect } from "react";
import "./App.css";
import { calculate } from "./components/calc.js";
import Instructions from "./components/info.jsx";
import Result from "./components/result.jsx";
import EquationInput from "./components/input.jsx";
import clsx from "clsx";

function App() {
  const [result, setResult] = useState("");

  const handleCalculate = (inputValue) => {
    setResult(calculate(inputValue));
  };

  return (
    <>
      <Instructions />
      <div className="App">
        <EquationInput onCalculate={handleCalculate} />

        <button className="m-3" onClick={handleCalculate}>Calculate</button>

        <Result result={result} />
      </div>
    </>
  );
}

export default App;
