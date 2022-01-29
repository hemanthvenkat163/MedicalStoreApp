import React from "react";
import { NavLink } from "react-router-dom";
import store from "../images/store.jpg";
import "./Home.css";
import stock from "../images/stock.jpg";

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "oldlace",

        height: "100vh",
        paddingTop: "20px",
      }}
    >
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 ms-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Welcome to
                    <br />
                    <strong className="brand-name"> Medical-Store</strong>
                  </h1>
                  <h2 className="mt-2">
                    You can get all the medical products
                    <br /> required at a single place.
                  </h2>
                  <div className="mt-3">
                    <NavLink to="/services" className="btn-get-started">
                      Get Started
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={store}
                    className="img-fluid animated"
                    alt="home-img"
                    width={"13000rem"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
