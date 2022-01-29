import React from "react";
import { useState } from "react";
import axios from "axios";
import ReportService from "../services/ReportService";
import { Link, useNavigate } from "react-router-dom";
import GetReportDetailsByReportType from "./GetReportDetailsByReportType";
import Moment from "moment";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const GetReportDetailsByPeriod = () => {
  const [reports, setReport] = useState([]);
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

    let startDate = Moment(startPeriod.toString()).format("DD-MM-YYYY");
    let endDate = Moment(endPeriod.toString()).format("DD-MM-YYYY");

    console.log(startDate);
    console.log(endDate);

    ReportService.getReportByPeriod(startDate, endDate)
      .then((res) => {
        setReport((prev) => {
          return [res.data];
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cancel = () => {
    navigate("/reports");
  };

  const Delete = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to do this?",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteReport(id),
        },
        {
          label: "No",
          onClick: () => navigate("/reports"),
        },
      ],
    });
  };

  const deleteReport = (id) => {
    ReportService.deleteReport(id);
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
              <h1>Display Report Details By Period</h1>
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
                <Link to="/reports"> Go to Report details</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-9">
            <div className="table-content1">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr style={{ backgroundColor: "#66adff" }}>
                    <th style={{ color: "#ffffff" }}>Report Id</th>
                    <th style={{ color: "#ffffff" }}>Start Period </th>
                    <th style={{ color: "#ffffff" }}>End Period</th>
                    <th style={{ color: "#ffffff" }}>Created Date </th>
                    <th style={{ color: "#ffffff" }}>Report Type </th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((report) => (
                    <tr key={report.reportId}>
                      <td>{report.reportId}</td>
                      <td>{report.startPeriod}</td>
                      <td>{report.endPeriod}</td>
                      <td>{report.createdDate}</td>
                      <td>{report.reportType}</td>
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

export default GetReportDetailsByPeriod;
