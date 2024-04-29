import React, { useState, useEffect } from 'react';

const EquationInput = ({ onCalculate }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputWidth, setInputWidth] = useState("200px");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setInputWidth(`${e.target.scrollWidth}px`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onCalculate(inputValue);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "c" && !event.ctrlKey) {
        event.preventDefault(); // Prevent default action
        document.getElementById("inputField").focus();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <input
      type="text"
      id="inputField"
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      style={{ minWidth: "200px", width: inputWidth }}
      className="m-3 mr-0 p-3 rounded border border-gray-500 hover:border-gray-300"
      placeholder="Enter equation"
    />
  );
};

export default EquationInput;
