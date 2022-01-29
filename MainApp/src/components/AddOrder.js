import React from "react";
import { useState } from "react";
import OrderService from "../services/OrderService";
import { Link, useNavigate } from "react-router-dom";

const AddOrder = () => {
  const [stockId, SetStockId] = useState();
  const [units, SetUnits] = useState();

  const navigate = useNavigate();

  const changeStockIdHandler = (e) => {
    if (e.target.value > 0 && e.target.value != null) {
      SetStockId(e.target.value);
    } else {
      alert("Id should be greater than 0");
    }
  };

  const changeUnitsHandler = (e) => {
    if (e.target.value > 0 && e.target.value != null) {
      SetUnits(e.target.value);
    } else {
      alert("Units should be greater than 0");
    }
  };

  const saveOrder = (e) => {
    e.preventDefault();
    if (stockId && units) {
      const order = {
        stockId: stockId,
        units: units,
      };
      OrderService.addOrder(order)
        .then((res) => {
          console.log(res);
          navigate("/orders");
        })
        .catch((err) => {
          console.log(err);
        });
      SetStockId("");
      SetUnits("");
    } else {
      alert("All fields are required");
    }
  };

  const cancel = () => {
    SetStockId("");
    SetUnits("");
  };

  return (
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
            <h1 style={{ textAlign: "center" }}>Create Order</h1>
            <div className="card-body" style={{ fontWeight: "bold" }}>
              <form>
                <div className="form-group">
                  <label>StockId: </label>
                  <input
                    type={"number"}
                    placeholder=" Add stock Id"
                    name="stockId"
                    className="form-control"
                    value={stockId}
                    onChange={changeStockIdHandler}
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>Units: </label>
                  <input
                    type={"number"}
                    placeholder="Add No of Units"
                    name="units"
                    className="form-control"
                    value={units}
                    onChange={changeUnitsHandler}
                    required
                  />
                </div>
                <br />
                <button className="btn btn-success" onClick={saveOrder}>
                  {" "}
                  Save{" "}
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
              <Link to={"/orders"}>Go to orders page</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrder;
