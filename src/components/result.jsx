import clsx from "clsx";
import React, { useState, useEffect } from "react";
import "./copy.css";

const Result = ({ result }) => {
  const [isCopy, setCopy] = useState(false);

  useEffect(() => {
    let timer;
    if (isCopy) {
      timer = setTimeout(() => {
        setCopy(false);
      }, 1000); // 1000 milliseconds = 1 second
    }
    return () => clearTimeout(timer);
  }, [isCopy]);

  const handleCopyClick = () => {
    // Copy result to clipboard
    navigator.clipboard.writeText(result)
      .then(() => {
        // Set state to indicate copy success
        setCopy(true);
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
      });
  };

  return (
    <>
      <div className="flex justify-between border border-gray-700 bg-black rounded text-left p-2">
        Result : {result}
        <div className="w-5 flex">
          <button className="butt" onClick={handleCopyClick}>
            <img className="h-6" src="copy.png" alt="copy" />
          </button>
          <img
            className={clsx(isCopy ? "" : "hidden")}
            src="tick.png"
            alt="tick"
          />
        </div>
      </div>
    </>
  );
};

export default Result;
