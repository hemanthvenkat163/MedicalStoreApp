import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import SocialFollow from "./SocialFollow";
import { Row, Col } from "reactstrap";
const About = () => {
  return (
    <div
      style={{
        backgroundColor: "oldlace",
        height: "100vh",
        paddingTop: "20px",
      }}
    >
      <Row className="landing">
        <Col>
          <LeftSide />
        </Col>
        <Col>
          <RightSide />
        </Col>
      </Row>
      <br />
      <SocialFollow />
    </div>
  );
};

export default About;
