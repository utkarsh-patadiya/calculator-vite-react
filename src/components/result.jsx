import React from 'react';

const Result = ({ result }) => {
  return (
    <div className="flex justify-between border border-gray-700 bg-black rounded text-left p-2">
      Result : {result}
    </div>
  );
};

export default Result;
