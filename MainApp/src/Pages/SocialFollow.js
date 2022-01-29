import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Social.css";

function SocialFollow() {
  return (
    <div class="social-container">
      <h4 id="h4" align={"right"}>
        Contact Us
      </h4>

      <p align={"right"}>Email Id : medicalstoreapp@gmail.com</p>
      <p align={"right"}>Phone : +91 9295678910</p>
      <p align={"right"}>Telephone : 08643 219087</p>
      <h4 id="h4" align={"left"}>
        Follow Us
      </h4>
      <h4 id="h4" align={"left"}>
        Social Media Handles
      </h4>

      <a href="https://www.youtube.com/" className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/" className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/" className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}
export default SocialFollow;
