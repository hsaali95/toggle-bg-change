import React from "react";
import { useState } from "react";
import "./header.css";

const DarkLightMode = () => {
  const [isLit, setLit] = useState(true);
  const brightness = isLit ? "lit" : "dark";
  return (
    <>
      {/* in parent div there are 3 className room,lit,dark */}
      <div className={`room ${brightness}`}>
        this room is :{isLit ? "White" : "dark"}
        <br />
        {/* setLit is a call back function by which we are setting isLit value flase */}
        {/* <button onClick={() => setLit(!isLit)}>Flip</button> */}
        {/* change bg color using toggle button  */}
        <label className="switch">
          <input type="checkbox" onClick={() => setLit(!isLit)} />
          <span className="slider round"></span>
        </label>
      </div>
    </>
  );
};

export default DarkLightMode;
