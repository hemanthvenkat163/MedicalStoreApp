import React, { useState, useEffect } from "react";
import ReportService from "../services/ReportService";
import { Route, useNavigate, useParams, useRoutes } from "react-router-dom";
import GetReportDetailsById from "./GetReportDetailsById";
import Report from "./Report.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import ReactPaginate from "react-paginate";

const ReportComponent = () => {
  const [reports, setReport] = useState([]);

  const navigate = useNavigate();

  //pagination code
  const [pageNumber, setPageNumber] = useState(0);
  const stocksPerPage = 5;
  const pagesVisited = pageNumber * stocksPerPage;
  const pageCount = Math.ceil(reports.length / stocksPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    getAllReport();
  }, []);

  const addReport = () => {
    navigate("/addReport");
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

  const getAllReport = () => {
    ReportService.getAllReport()
      .then((response) => {
        setReport(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getReportById = () => {
    navigate("/getReportById");
  };

  const getReportByType = () => {
    navigate("/getReportByReportType");
  };

  const getReportByPeriod = () => {
    navigate("/getReportByPeriod");
  };

  return (
    <div
      className="main-container"
      style={{ backgroundColor: "oldlace", height: "100vh" }}
    >
      <div className="head-container">
        <h1 className="text-center title"> REPORT DETAILS </h1>

        <button
          className="btn btn-primary add-btn"
          style={{ backgroundColor: "#00802b" }}
          onClick={addReport}
        >
          Add Report
        </button>
      </div>

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
                {reports
                  .slice(pagesVisited, pagesVisited + stocksPerPage)
                  .map((report) => (
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
            <br />

            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        </div>
      </div>

      <div className="button-container1">
        <button
          className="btn btn-primary add-btn"
          style={{ backgroundColor: "#00802b" }}
          onClick={getReportById}
        >
          Get Report Details By Id
        </button>
      </div>

      <div className="button-container2">
        <button
          className="btn btn-primary add-btn"
          style={{ backgroundColor: "#00802b" }}
          onClick={getReportByType}
        >
          Get Report Details By Report Type
        </button>
      </div>

      <div className="button-container3">
        <button
          className="btn btn-primary add-btn"
          style={{ backgroundColor: "#00802b" }}
          onClick={getReportByPeriod}
        >
          Get Report Details By Period
        </button>
      </div>
    </div>
  );
};

export default ReportComponent;
