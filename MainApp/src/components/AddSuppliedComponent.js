import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuppliedService from "../services/SuppliedService";

const AddSupplyStockComponent = () => {
  const [id, SetId] = useState();
  const [stockId, SetStockId] = useState();
  const [stockName, SetStockName] = useState("");
  const [supplierId, SetSupplierId] = useState();
  const [suppliedDate, SetSuppliedDate] = useState("");
  const [suppliedCost, SetSuppliedCost] = useState();
  const [units, SetUnits] = useState();

  const navigate = useNavigate();

  const changeIdHandler = (e) => {
    SetId(e.target.value);
  };

  const changeStockIdHandler = (e) => {
    if (e.target.value > 0 && e.target.value != null) {
      SetStockId(e.target.value);
    } else {
      alert("Stock Id should be greater than zero");
    }
  };

  const changeStockNameHandler = (e) => {
    if (e.target.value.match("^[a-zA-Z0-9 ]*$") && e.target.value !== null) {
      SetStockName(e.target.value);
    } else {
      alert("Only alphanumeric characters are allowed");
    }
  };

  const changeSupplierIdHandler = (e) => {
    if (e.target.value > 0 && e.target.value != null) {
      SetSupplierId(e.target.value);
    } else {
      alert("SupplierId should be greater than zero");
    }
  };

  const changeSuppliedDateHandler = (e) => {
    SetSuppliedDate(e.target.value);
  };
  const changeSuppliedCostHandler = (e) => {
    if (e.target.value > 0 && e.target.value != null) {
      SetSuppliedCost(e.target.value);
    } else {
      alert("Costs should be greater than zero");
    }
  };

  const changeUnitsHandler = (e) => {
    if (e.target.value > 0 && e.target.value != null) {
      SetUnits(e.target.value);
    } else {
      alert("Units should be greater than 0");
    }
  };

  const saveStock = (e) => {
    e.preventDefault();
    if (stockId && stockName && supplierId && suppliedCost && units) {
      const suppliedstock = {
        id: id,
        stockId: stockId,
        stockName: stockName,
        supplierId: supplierId,
        suppliedDate: suppliedDate,
        suppliedCost: suppliedCost,
        units: units,
      };

      SuppliedService.addStock(suppliedstock)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      SetId("");
      SetStockId("");
      SetStockName("");
      SetSupplierId("");
      SetSuppliedDate("");
      SetSuppliedCost("");
      SetUnits("");
      navigate("/suppliedstocks");
    } else {
      alert("All fields are required");
    }
  };

  const cancel = () => {
    SetId("");
    SetStockId("");
    SetStockName("");
    SetSupplierId("");
    SetSuppliedDate("");
    SetSuppliedCost("");
    SetUnits("");
    navigate("/suppliedstocks");
  };

  return (
    <div
      style={{
        backgroundColor: "oldlace",
        height: "110vh",
        paddingTop: "20px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h1>Add Supplied Stock</h1>
            <div className="card-body" style={{ fontWeight: "bold" }}>
              <form>
                {/* <div className="form-group">
                      <label>Id: </label>
                      <input
                        type={"number"}
                        placeholder=" Add Id"
                        name="Id"
                        className="form-control"
                        value={id}
                        onChange={changeIdHandler}
                      />
                      </div> */}
                <div className="form-group">
                  <label>StockId: </label>
                  <input
                    required="true"
                    type={"number"}
                    placeholder=" Add stock Id"
                    name="stockId"
                    className="form-control"
                    value={stockId}
                    onChange={changeStockIdHandler}
                  />
                </div>
                <br />
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
                  <label>SupplierId: </label>
                  <input
                    required="true"
                    type={"number"}
                    placeholder=" Add supplier Id"
                    name="supplierId"
                    className="form-control"
                    value={supplierId}
                    onChange={changeSupplierIdHandler}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>SuppliedDate: </label>
                  <input
                    required="true"
                    type={"Date"}
                    placeholder=" Add Supplied Date"
                    name="suppliedDate"
                    className="form-control"
                    value={suppliedDate}
                    onChange={changeSuppliedDateHandler}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>SuppliedCost: </label>
                  <input
                    required="true"
                    type={"number"}
                    placeholder=" Add Supplied cost"
                    name="suppliedCost"
                    className="form-control"
                    value={suppliedCost}
                    onChange={changeSuppliedCostHandler}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>units: </label>
                  <input
                    required="true"
                    type={"number"}
                    placeholder=" Add units"
                    name="units"
                    className="form-control"
                    value={units}
                    onChange={changeUnitsHandler}
                  />
                </div>
                <br />
                <button className="btn btn-success" onClick={saveStock}>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSupplyStockComponent;
