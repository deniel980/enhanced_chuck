import React, { useState, useEffect } from "react";

const VisiterCounter = () => {
  const [visitors, setVisitors] = useState(0);

  const getCount = async () => {
    const res = await fetch("api/get_login_count");
    const data = await res.json();
    const count = data.LOGINCOUNT;
    console.log(count);
    setVisitors(count);
  };

  const update = async () => {
    const res = await fetch("api/update_login_count");
    const data = await res.json();
    const count = data.LOGINCOUNT;
    console.log(count);
  };

  //trigger handler function from update.js file in api folder if the user is a new visitor
  useEffect(() => {
    if (!localStorage.getItem("visited")) {
      console.log("new visitor");
      localStorage.setItem("visited", 1);
      update();
      getCount();
    } else {
      console.log("not a new visitor");
      getCount();
    }
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
