import { useState } from 'react'

import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const [inputWidth, setInputWidth] = useState("200px");
  
  const handleInputChange = (e) => {
  };

  const handleCalculate = () => {
  };

  const handleKeyDown = (e) => {
  };

  return (
    <>
      <p className="text-gray-400 text-left">
        --&gt; Pressing c focuses input field.
        <br />
        --&gt; Supports :
        <ul className="m-0 pl-1 list-disc ml-12">
          <li>operations : -+*/^</li>
          <li>rounded brackets ( )</li>
          <li>mutltiple brackets &nbsp;&nbsp;// ( ( (1+2)+3)+4)+(+5)</li>
          <li>double signs &nbsp;&nbsp;// --5 , +-5 , 1*-1</li>
          <li>
            random white spaces in between &nbsp;&nbsp;// 1+&nbsp;&nbsp; 2 --3
          </li>
        </ul>
      </p>

      <div className="App">
        <input
          type="text"
          id="inputField"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          style={{ minWidth: "200px", width: inputWidth }}
          className="p-3 rounded border border-gray-500 hover:border-gray-300"
          placeholder="Enter equation"
        />
        <button onClick={handleCalculate}>Calculate</button>
        <div className="flex justify-between border border-gray-700 bg-black rounded text-left p-2 ">
          Result : {result}
          <script>
          </script>
        </div>
      </div>
    </>
  );
}

export default App
