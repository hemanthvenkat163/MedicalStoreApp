import React from "react";
import { useState } from "react";
import axios from "axios";
import ReportService from "../services/ReportService";
import { Link, useNavigate } from "react-router-dom";
import ReportComponent from "./ReportComponent";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const GetReportDetailsById = () => {
  const [reports, setReport] = useState([]);
  const [reportId, SetReportId] = useState([]);

  const navigate = useNavigate();

  const changeReportIdHandler = (e) => {
    if (e.target.value > 0) {
      SetReportId(e.target.value);
    } else {
      alert("Id should be positive");
    }
  };

  const saveReport = (e) => {
    e.preventDefault();

    if (reportId) {
      ReportService.getReportById(reportId)
        .then((res) => {
          setReport((prev) => {
            return [res.data];
          });
          console.log(reports);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
              <h1>GET REPORT DETAILS BY ID</h1>
              <div className="card-body" style={{ fontWeight: "bold" }}>
                <form>
                  <div className="form-group">
                    <label>Report Id </label>
                    <input
                      required="true"
                      type={"number"}
                      placeholder="Enter Report Id"
                      name="reportId"
                      className="form-control"
                      value={reportId}
                      onChange={changeReportIdHandler}
                    />
                  </div>
                  <br />
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

        <div className="table-content">
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-9">
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr style={{ backgroundColor: "#66adff" }}>
                      <th style={{ color: "#ffffff" }}>Report Id</th>
                      <th style={{ color: "#ffffff" }}>Start Period </th>
                      <th style={{ color: "#ffffff" }}>End Period</th>
                      <th style={{ color: "#ffffff" }}>Created Date </th>
                      <th style={{ color: "#ffffff" }}>Report Type </th>
                      <th style={{ color: "#ffffff" }}> Actions </th>
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
                        <td>
                          <button
                            className="btn btn-danger"
                            style={{ backgroundColor: "red" }}
                            onClick={() => {
                              Delete(report.reportId);
                            }}
                            value={report.reportId}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetReportDetailsById;
