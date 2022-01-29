import React from "react";
import { Form, Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { useState } from "react";

const LeftSide = () => {
  const [alignment, setAlignment] = useState(" ");
  return (
    <div className="LeftSide" style={{ marginLeft: "15px" }}>
      <h1 id="h1" align={"center"}>
        About Us
      </h1>
      <br />
      <p align={"left"}>
        . We Developed an application which will be helpful to maintain the
        stock details which have been supplied to a particular Supplier.
      </p>
      <p>
        . Apart from this User can also order any kind of product he needs from
        the available stock.
      </p>
      <p></p>
    </div>
  );
};

export default LeftSide;
