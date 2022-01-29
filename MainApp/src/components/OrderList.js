import React, { useState, useEffect } from "react";
import OrderService from "../services/OrderService";
import { useNavigate } from "react-router-dom";
import "./order.css";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import StripeCheckout from "react-stripe-checkout";
import ReactPaginate from "react-paginate";

const OrderList = ({ adminContent, participantContent }) => {
  const [Order, setOrder] = useState([]);
  const navigate = useNavigate();

  //pagination code
  const [pageNumber, setPageNumber] = useState(0);
  const ordersPerPage = 5;
  const pagesVisited = pageNumber * ordersPerPage;
  const pageCount = Math.ceil(Order.length / ordersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    getAllOrder();
  }, [Order]);

  const addOrder = () => {
    navigate("/addOrder");
  };

  const viewOrders = () => {
    navigate("/viewOrders");
  };

  const viewStocks = () => {
    navigate("/stocks");
  };

  const Delete = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteOrder(id),
        },
        {
          label: "No",
          onClick: () => navigate("/orders"),
        },
      ],
    });
  };

  const deleteOrder = (id) => {
    OrderService.deleteOrder(id);
  };

  const getAllOrder = async () => {
    // OrderService.getAllOrder()
    //   .then((response) => {
    //     setOrder(response.data);
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    try {
      const res = await OrderService.getAllOrder();
      console.log(res.data);
      setOrder(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="main-container"
      style={{ backgroundColor: "oldlace", height: "100vh" }}
    >
      <div className="head-container">
        {adminContent && (
          <button
            className="btn btn-primary"
            style={{ marginRight: "2rem" }}
            onClick={viewOrders}
          >
            View Orders In a Certain Period
          </button>
        )}
        <h1 className="text-center title" style={{ marginRight: "7rem" }}>
          {" "}
          ORDER DETAILS{" "}
        </h1>
        {participantContent && (
          <>
            <button
              className="btn btn-primary add-btn"
              style={{ backgroundColor: "#00802b" }}
              onClick={addOrder}
            >
              Add Order
            </button>
            <button
              className="btn btn-primary add-btn"
              style={{ backgroundColor: "cadetblue" }}
              onClick={viewStocks}
            >
              View all stocks available
            </button>
          </>
        )}
      </div>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-9">
            <table className="table table-striped table-bordered">
              <thead>
                <tr style={{ backgroundColor: "#66adff" }}>
                  <th style={{ color: "#ffffff" }}>Order Id</th>
                  <th style={{ color: "#ffffff" }}> Order Date </th>
                  <th style={{ color: "#ffffff" }}> Order Price </th>
                  {participantContent && (
                    <th style={{ color: "#ffffff" }}> Actions </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {Order.slice(pagesVisited, pagesVisited + ordersPerPage).map(
                  (order) => (
                    <tr key={order.orderId}>
                      <td>{order.orderId}</td>
                      <td>{order.orderDate}</td>
                      <td>{order.orderPrice}</td>
                      {participantContent && (
                        <td>
                          <button
                            className="btn btn-danger"
                            style={{ backgroundColor: "tomato" }}
                            onClick={() => {
                              Delete(order.orderId);
                            }}
                            value={order.orderId}
                          >
                            Delete
                          </button>
                        </td>
                      )}
                    </tr>
                  )
                )}
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

export default OrderList;
