import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SuppliedService from "../services/SuppliedService";
import "./order.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import ReactPaginate from "react-paginate";

const ListSuppliedStock = () => {
  const [suppliedStocks, setSuppliedStocks] = useState([]);

  const navigate = useNavigate();

  //pagination code
  const [pageNumber, setPageNumber] = useState(0);
  const stocksPerPage = 5;
  const pagesVisited = pageNumber * stocksPerPage;
  const pageCount = Math.ceil(suppliedStocks.length / stocksPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    getAllStock();
  }, [suppliedStocks]);

  const addStock = () => {
    navigate("/addsupplystock");
  };
  const deleteStock = (Id) => {
    SuppliedService.deleteStock(Id);
  };

  // const findStockBySupplierId = (supplierId) => {
  //   SuppliedService.findStockBySupplierId(supplierId);
  // };
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
          onClick: () => navigate("/suppliedstocks"),
        },
      ],
    });
  };

  const getAllStock = () => {
    SuppliedService.getAllStock()
      .then((response) => {
        setSuppliedStocks(response.data);
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
        <h1 className="text-center title">SUPPLIED STOCK DETAILS </h1>
        <button
          className="btn btn-primary add-btn"
          style={{ backgroundColor: "#00802b" }}
          onClick={addStock}
        >
          Add Stock
        </button>
        {/* <button
              className="btn btn-primary add-btn"
              style={{ backgroundColor: "#00802b" }}
              onClick={findStockBySupplierId}
            >
              View Stock
              </button> */}
      </div>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-9">
            <table className="table table-striped table-bordered">
              <thead>
                <tr style={{ backgroundColor: "#66adff" }}>
                  <th style={{ color: "#ffffff" }}>Id</th>
                  <th style={{ color: "#ffffff" }}> Stock Id </th>
                  <th style={{ color: "#ffffff" }}> Stock Name </th>
                  <th style={{ color: "#ffffff" }}> Supplier Id </th>
                  <th style={{ color: "#ffffff" }}> Supplied Date </th>
                  <th style={{ color: "#ffffff" }}> Supplied Cost </th>
                  <th style={{ color: "#ffffff" }}> Units </th>
                  <th style={{ color: "#ffffff" }}> Actions </th>
                </tr>
              </thead>
              <tbody>
                {suppliedStocks
                  .slice(pagesVisited, pagesVisited + stocksPerPage)
                  .map((suppliedStocks) => (
                    <tr key={suppliedStocks.id}>
                      <td>{suppliedStocks.id}</td>
                      <td>{suppliedStocks.stockId}</td>
                      <td>{suppliedStocks.stockName}</td>
                      <td>{suppliedStocks.supplierId}</td>
                      <td>{suppliedStocks.suppliedDate}</td>
                      <td>{suppliedStocks.suppliedCost}</td>
                      <td>{suppliedStocks.units}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          style={{ backgroundColor: "tomato" }}
                          onClick={() => {
                            Delete(suppliedStocks.id);
                          }}
                          value={suppliedStocks.id}
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
    </div>
  );
};

export default ListSuppliedStock;

{
  /* useEffect(() => {
        SuppliedService.add().then((response) => {
            setSuppliedStocks(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }, [])

    return (
        <div className="container">
            <h2 className="text-center">List Supplied Stock</h2>
            <Link to = "/add-suppliedstock" className="btn btn-primary mb-2">Add Stock</Link>
            <table className="table table-bordered table-stripped">
                <thead>
                    <th>Id</th>
                    <th>stockId</th>
                    <th>stockName</th>
                    <th>supplierId</th>
                    <th>suppliedDate</th>
                    <th>suppliedCost</th>
                    <th>units</th>
                </thead>   
                <body>
                    {
                        suppliedStocks.map(
                            suppliedStock =>
                            <tr key =  {suppliedStock.Id}>
                                <td> {suppliedStock.Id} </td>
                                <td> {suppliedStock.stockId} </td>
                                <td> {suppliedStock.stockName} </td>
                                <td> {suppliedStock.supplierId} </td>
                                <td> {suppliedStock.suppliedDate} </td>
                                <td> {suppliedStock.suppliedCost} </td>
                                <td> {suppliedStock.units} </td>
                            </tr> 
                        )

                    }</body> 
                </table>            
        </div>
    )
} */
}
