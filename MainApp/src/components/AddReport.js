import React from "react";
import { useState } from "react";
import ReportService from "../services/ReportService";
import { Link, useNavigate } from "react-router-dom";

const AddReport = () => {
  const [reportId, SetReportId] = useState();
  const [startPeriod, SetStartPeriod] = useState();
  const [endPeriod, SetEndPeriod] = useState();

  const navigate = useNavigate();

  const changeReportIdHandler = (e) => {
    SetReportId(e.target.value);
  };

  const changeStartPeriodHandler = (e) => {
    SetStartPeriod(e.target.value);
  };

  const changeEndPeriodHandler = (e) => {
    SetEndPeriod(e.target.value);
  };

  const saveReport = (e) => {
    e.preventDefault();
    console.log(startPeriod);
    if (startPeriod && endPeriod) {
      const report = {
        reportId: reportId,
        startPeriod: startPeriod,
        endPeriod: endPeriod,
      };
      ReportService.addReport(report)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      SetReportId("");
      SetStartPeriod("");
      SetEndPeriod("");
      navigate("/reports");
    }
  };
  const cancel = () => {
    navigate("/reports");
    SetReportId("");
    SetStartPeriod("");
    SetEndPeriod("");
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
            <h1>Add Report</h1>
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
                <button className="btn btn-success" onClick={saveReport}>
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
              <Link to="/reports"> Go to Report details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReport;
