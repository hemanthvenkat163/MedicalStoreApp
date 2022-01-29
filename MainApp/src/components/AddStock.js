import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import StockService from "../services/StockService";
import { useNavigate, useParams, Link } from "react-router-dom";

const AddStock = () => {
  const [stockId, SetStockId] = useState();
  const [stockName, SetStockName] = useState();
  const [units, SetUnits] = useState();
  const [price, SetPrice] = useState();
  const { StockName } = useParams();
  const navigate = useNavigate();

  const changeStockIdHandler = (e) => {
    SetStockId(e.target.value);
  };

  const changeStockNameHandler = (e) => {
    if (e.target.value.match("^[a-zA-Z0-9 ]*$") && e.target.value !== null) {
      SetStockName(e.target.value);
    } else {
      alert("Only alphanumeric characters are allowed");
    }
  };

  const changeUnitsHandler = (e) => {
    if (e.target.value > 0 && e.target.value != null) {
      SetUnits(e.target.value);
    } else {
      alert("Units should be greater than 0");
    }
  };

  const changePriceHandler = (e) => {
    if (e.target.value > 0 && e.target.value != null) SetPrice(e.target.value);
    else alert("Price should be greater than 0");
  };

  const saveStock = (e) => {
    e.preventDefault();
    if (stockName && units && price) {
      const stock = {
        stockId: stockId,
        stockName: stockName,
        units: units,
        price: price,
      };

      StockService.addStock(stock)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      SetStockId("");
      SetStockName("");
      SetUnits("");
      SetPrice("");
      navigate("/stocks");
    } else {
      alert("All fields are required");
    }
  };

  const cancel = () => {
    navigate("/stocks");
    SetStockId("");
    SetStockName("");
    SetUnits("");
    SetPrice("");
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
            <h1>Add Stock</h1>
            <div className="card-body" style={{ fontWeight: "bold" }}>
              <form>
                <div className="form-group">
                  <label>StockName: </label>
                  <input
                    required="true"
                    type={"text"}
                    placeholder=" Add stock Name"
                    name="stockName"
                    className="form-control"
                    value={stockName}
                    onChange={changeStockNameHandler}
                  />
                </div>

                <br />
                <div className="form-group">
                  <label>Units: </label>
                  <input
                    required="true"
                    type={"number"}
                    placeholder="Add No of Units"
                    name="units"
                    className="form-control"
                    value={units}
                    onChange={changeUnitsHandler}
                  />
                </div>

                <br />
                <div className="form-group">
                  <label>Price: </label>
                  <input
                    type={"number"}
                    required="true"
                    placeholder="Add No of Price"
                    name="Price"
                    className="form-control"
                    value={price}
                    onChange={changePriceHandler}
                  />
                </div>

                <br />
                <button className="btn btn-success" onClick={saveStock}>
                  {" "}
                  Save{" "}
                </button>
                {
                  <button
                    className="btn btn-danger"
                    onClick={cancel}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                }
              </form>
              <hr />
              <Link to="/stocks"> Go to Stock details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStock;
