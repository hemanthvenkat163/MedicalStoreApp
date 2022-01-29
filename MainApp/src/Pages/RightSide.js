import React from "react";
import About from "../images/about.jpg";

const RightSide = () => {
  return (
    <div>
      <img
        src={About}
        thumbnail
        style={{ border: "none", width: 500, height: 300 }}
      />
    </div>
  );
};

export default RightSide;
