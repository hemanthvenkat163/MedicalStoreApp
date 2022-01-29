import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import StockService from "../services/StockService";
import { useNavigate, useParams, Link } from "react-router-dom";

const Update = () => {
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
    SetPrice(e.target.value);
  };

  const saveStock = (e) => {
    e.preventDefault();
    if (stockName && units) {
      const stock = {
        stockId: stockId,
        stockName: stockName,
        units: units,
      };

      if (stockName) {
        StockService.update(stock)
          .then((response) => {
            console.log("Stock updated successfully", response.data);
            navigate("/stocks");
          })
          .catch((error) => {
            console.log("Something went wrong", error);
          });
      }
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

  useEffect(() => {
    if (stockName) {
      StockService.get(stockName)
        .then((stock) => {
          SetStockName(stock.data.stockName);
          SetUnits(stock.data.units);
          SetPrice(stock.data.price);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

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
            <h1>Update Stock</h1>
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
                    id="validationCustom02"
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

export default Update;
