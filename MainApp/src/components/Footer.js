import React from "react";

import { NavbarText } from "reactstrap";

const Footer = () => {
  return (
    <div style={{ position: "relative" }}>
      <nav
        className="navbar navbar-expand-sm fixed-bottom navbar-dark"
        style={{ height: "3rem" }}
      >
        <div className="container-fluid justify-content-center">
          <NavbarText className="text-light fw-light fs-5">
            All Rights reserved to @Medical Store Team
          </NavbarText>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
