import React, { useState, useEffect } from "react";
import StockService from "../services/StockService";
import { useNavigate, Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./order.css";
import ReactPaginate from "react-paginate";

const StockComponent = ({ adminContent, participantContent }) => {
  const [stocks, setStock] = useState([]);
  const navigate = useNavigate();

  //pagination code
  const [pageNumber, setPageNumber] = useState(0);
  const stocksPerPage = 5;
  const pagesVisited = pageNumber * stocksPerPage;
  const pageCount = Math.ceil(stocks.length / stocksPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    getAllStock();
  }, []);

  const addStock = () => {
    navigate("/addStock");
  };

  const update = () => {
    navigate("/stocks/increaseQuantity");
  };

  const Delete = (id) => {
    confirmAlert({
      title: "Confirm to delete",

      message: "Are you sure to do this.",

      buttons: [
        {
          label: "Yes",

          onClick: () => deleteStock(id),
        },

        {
          label: "No",

          onClick: () => navigate("/stocks"),
        },
      ],
    });
  };

  const deleteStock = (id) => {
    StockService.deleteStock(id);
  };

  const getAllStock = () => {
    StockService.getAllStock()
      .then((response) => {
        setStock(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="main-container"
      style={{ backgroundColor: "oldlace", height: "100vh" }}
    >
      <div className="head-container">
        <h1 className="text-center title"> STOCK DETAILS </h1>
        {adminContent && (
          <button
            className="btn btn-primary add-btn"
            style={{ backgroundColor: "#00802b" }}
            onClick={addStock}
          >
            Add Stock
          </button>
        )}
      </div>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-9">
            <table className="table table-striped table-bordered">
              <thead>
                <tr style={{ backgroundColor: "#66adff" }}>
                  <th style={{ color: "#ffffff" }}>Stock Id</th>
                  <th style={{ color: "#ffffff" }}> Stock Name </th>
                  <th style={{ color: "#ffffff" }}> Units </th>
                  <th style={{ color: "#ffffff" }}> Price </th>
                  {adminContent && (
                    <th style={{ color: "#ffffff" }}> Actions </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {stocks
                  .slice(pagesVisited, pagesVisited + stocksPerPage)
                  .map((stock) => (
                    <tr key={stock.stockId}>
                      <td>{stock.stockId}</td>
                      <td>{stock.stockName}</td>
                      <td>{stock.units}</td>
                      <td>{stock.price}</td>
                      {adminContent && (
                        <td>
                          {/* <Link className="btn btn-info" to={`/stocks/increaseQuantity`}>Update</Link> */}
                          <button
                            className="btn btn-info"
                            onClick={update}
                            style={{ marginRight: "10px" }}
                          >
                            {" "}
                            Update{" "}
                          </button>

                          <button
                            className="btn btn-danger"
                            style={{ backgroundColor: "red" }}
                            onClick={() => {
                              Delete(stock.stockId);
                            }}
                            value={stock.stockId}
                          >
                            Delete
                          </button>
                        </td>
                      )}
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

            {participantContent && <Link to={"/addOrder"}>Order Here</Link>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockComponent;
