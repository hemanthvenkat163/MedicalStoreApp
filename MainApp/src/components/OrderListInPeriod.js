import React from "react";
import { useState } from "react";
import OrderService from "../services/OrderService";
import { Link, useNavigate } from "react-router-dom";
import Moment from "moment";
import "react-confirm-alert/src/react-confirm-alert.css";

const OrderListInPeriod = () => {
  const [order, setOrder] = useState([]);
  const [orderId, SetOrderId] = useState();
  const [startPeriod, SetStartPeriod] = useState();
  const [endPeriod, SetEndPeriod] = useState();

  const navigate = useNavigate();

  const changeOrderIdHandler = (e) => {
    SetOrderId(e.target.value);
  };

  const changeStartPeriodHandler = (e) => {
    SetStartPeriod(e.target.value);
  };

  const changeEndPeriodHandler = (e) => {
    SetEndPeriod(e.target.value);
  };

  const saveOrder = (e) => {
    e.preventDefault();

    let startDate = Moment(startPeriod.toString()).format("DD-MM-YYYY");
    let endDate = Moment(endPeriod.toString()).format("DD-MM-YYYY");

    console.log(startDate);
    console.log(endDate);

    OrderService.viewOrders(startDate, endDate)
      .then((res) => {
        console.log(res.data);
        setOrder(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cancel = () => {
    navigate("/orders");
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "oldlace",
          height: "100vh",
          paddingTop: "20px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <br></br>
              <h1>Display Orders in a Period</h1>
              <div className="card-body" style={{ fontWeight: "bold" }}>
                <form>
                  <div className="form-group">
                    <label>Start Period: </label>
                    <input
                      required="true"
                      type={"date"}
                      placeholder="Enter Start Period"
                      name="startPeriod"
                      className="form-control"
                      value={startPeriod}
                      onChange={changeStartPeriodHandler}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label>End Period: </label>
                    <input
                      required="true"
                      type={"date"}
                      defaultValue={"yyyy-MM-dd"}
                      placeholder="Enter End Period"
                      name="endPeriod"
                      className="form-control"
                      value={endPeriod}
                      onChange={changeEndPeriodHandler}
                    />
                  </div>
                  <br />
                  <button className="btn btn-success" onClick={saveOrder}>
                    {" "}
                    View{" "}
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={cancel}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
                <hr />
                <Link to="/orders"> Go to Orders details</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-9">
            <div className="table-content1" style={{ marginTop: "-150px" }}>
              <table className="table table-striped table-bordered">
                <thead>
                  <tr style={{ backgroundColor: "#66adff" }}>
                    <th style={{ color: "#ffffff" }}>Order Id</th>
                    <th style={{ color: "#ffffff" }}>Order Date </th>
                    <th style={{ color: "#ffffff" }}>Order Price</th>
                  </tr>
                </thead>
                <tbody>
                  {order.map((order) => (
                    <tr key={order.orderId}>
                      <td>{order.orderId}</td>
                      <td>{order.orderDate}</td>
                      <td>{order.orderPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderListInPeriod;
