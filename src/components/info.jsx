import React from 'react';

const Instructions = () => {
  return (
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
  );
};

export default Instructions;
