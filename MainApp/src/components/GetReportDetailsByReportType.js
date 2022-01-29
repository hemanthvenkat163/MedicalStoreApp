import React from "react";
import { useState } from "react";
import axios from "axios";
import ReportService from "../services/ReportService";
import { Link, useNavigate } from "react-router-dom";
import ReportComponent from "./ReportComponent";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const GetReportDetailsByReportType = () => {
  const [reports, setReport] = useState([]);
  const [reportType, SetReportType] = useState([]);
  //const [reporttype, SetType] = useState();

  //SetType("REPORT TYPE")

  //let reporttype="SDFGH"

  const navigate = useNavigate();

  const selectHandler = (e) => {
    //reporttype=e
    SetReportType(e);
  };

  const saveReport = (e) => {
    e.preventDefault();

    ReportService.getReportByReportType(reportType)
      .then((res) => {
        setReport(res.data);
        console.log(reports);
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
              <h1>GET REPORT DETAILS BY REPORT TYPE</h1>
              <div className="card-body" style={{ fontWeight: "bold" }}>
                <form>
                  <div className="form-group">
                    <label>Report Type </label>
                    <DropdownButton
                      alignRight
                      title="REPORT TYPE"
                      id="dropdown-menu-align-right"
                      onSelect={selectHandler}
                    >
                      <Dropdown.Item eventKey="MONTHLY">MONTHLY</Dropdown.Item>
                      <Dropdown.Item eventKey="QUARTERLY">
                        QUARTERLY
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="HALFYEARLY">
                        HALF YEARLY
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="YEARLY">YEARLY</Dropdown.Item>
                    </DropdownButton>
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
    </div>
  );
};

export default GetReportDetailsByReportType;
