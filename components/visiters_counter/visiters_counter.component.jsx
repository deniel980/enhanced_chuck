import React, { useState, useEffect } from "react";

const VisiterCounter = () => {
  const [visitors, setVisitors] = useState(0);

  //trigger handler function from hello.js file in api folder if the user is a new visitor
  useEffect(() => {
    if (!localStorage.getItem("visited")) {
      localStorage.setItem("visited", 1);
      const hello = async () => {
        const res = await fetch("api/hello");
        const data = await res.json();
        console.log(data);
        setVisitors(10);
      };
      hello();
    } else console.log("not a new visitor");
  }, []);

  return (
    <div>
      <p className=" font font-monospace text-xl font-bold"></p>
      <span id="visitors-count">
        Visitors:
        <span className="bg-white px-2 text-black">{visitors}</span>
      </span>
    </div>
  );
};

export default VisiterCounter;
