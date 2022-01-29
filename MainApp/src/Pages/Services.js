import React from "react";
import stockImg from "../images/stock.jpg";
import supplyStockImg from "../images/supplystock.jpg";
import orderImg from "../images/order.jpg";
import reportImg from "../images/report.jpeg";

const Services = ({ adminContent, participantContent }) => {
  return (
    <div
      style={{
        backgroundColor: "oldlace",
        height: "100vh",
        paddingTop: "20px",
      }}
    >
      <h2 style={{ textAlign: "center" }}> Our Services</h2>
      <div className="row" style={{ marginTop: "3rem", marginLeft: "4rem" }}>
        {adminContent && (
          <>
            <div
              className="card"
              style={{
                width: "18rem",
                margin: "0.25rem",
                marginBottom: "3rem",
              }}
            >
              <img src={stockImg} className="card-img-top" alt="stock-img" />
              <div class="card-body">
                <h5 class="card-title">Stock</h5>
                <p class="card-text">
                  Here we can add, update, delete the details of the all the
                  stocks(products) present in out store.
                </p>
                <a href="/stocks" class="btn btn-primary">
                  Go to Stock module
                </a>
              </div>
            </div>
            <div
              className="card"
              style={{ width: "18rem", margin: "0.25rem", marginTop: "2rem" }}
            >
              <img
                src={supplyStockImg}
                className="card-img-top"
                alt="stock-img"
              />
              <div class="card-body">
                <h5 class="card-title">SuppliedStock</h5>
                <p class="card-text">
                  Here we can add, update, delete the details of the all the
                  supplied stocks(products) which we have bought from other
                  companies.
                </p>
                <a href="/suppliedstocks" class="btn btn-primary">
                  Go to SuppliedStock Module
                </a>
              </div>
            </div>
            <div
              className="card"
              style={{
                width: "18rem",
                margin: "0.25rem",
                marginBottom: "3rem",
              }}
            >
              <img src={orderImg} className="card-img-top" alt="stock-img" />
              <div class="card-body">
                <h5 class="card-title">Order</h5>
                <p class="card-text">From this we can order the products.</p>
                <a href="/orders" class="btn btn-primary">
                  Go to Order Module
                </a>
              </div>
            </div>
            <div
              className="card"
              style={{ width: "18rem", margin: "0.25rem", marginTop: "2rem" }}
            >
              <img src={reportImg} className="card-img-top" alt="stock-img" />
              <div class="card-body">
                <h5 class="card-title">Report</h5>
                <p class="card-text">
                  In this module, it contains all the details of orders within a
                  certain period.
                </p>
                <a href="/reports" class="btn btn-primary">
                  Go to reports
                </a>
              </div>
            </div>
          </>
        )}
        {participantContent && (
          <div
            className="card"
            style={{
              width: "18rem",
              margin: "0.25rem",
              marginBottom: "3rem",
              marginLeft: "27rem",
            }}
          >
            <img src={orderImg} className="card-img-top" alt="stock-img" />
            <div class="card-body">
              <h5 class="card-title">Order</h5>
              <p class="card-text">From this we can order the products.</p>
              <a href="/orders" class="btn btn-primary">
                Go to Order Module
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
