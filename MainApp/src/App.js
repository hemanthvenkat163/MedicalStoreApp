import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import OrderList from "./components/OrderList";
import AddOrder from "./components/AddOrder";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import OrderListInPeriod from "./components/OrderListInPeriod";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import StockComponent from "./components/StockComponent";
import AddStock from "./components/AddStock";
import Update from "./components/Update";
import AddReport from "./components/AddReport";
import ReportComponent from "./components/ReportComponent";
import GetReportDetailsById from "./components/GetReportDetailsById";
import GetReportDetailsByReportType from "./components/GetReportDetailsByReportType";
import GetReportDetailsByPeriod from "./components/GetReportDetailsByPeriod";
import ListSuppliedStock from "./components/ListSuppliedStock";
import AddSuppliedComponent from "./components/AddSuppliedComponent";
import UserService from "./services/UserService";

const App = () => {
  const [user, setUser] = useState(undefined);

  const [adminContent, setadminContent] = useState(false);
  const [participantContent, setparticipantContent] = useState(false);

  useEffect(() => {
    const currentUser = UserService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
      setadminContent(currentUser.userRole.includes("ROLE_ADMIN"));
      setparticipantContent(currentUser.userRole.includes("ROLE_PARTICIPANT"));
    }
  }, []);

  return (
    <Router>
      <HeaderComponent user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/services"
          element={
            <Services
              adminContent={adminContent}
              participantContent={participantContent}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/orders"
          element={
            <OrderList
              adminContent={adminContent}
              participantContent={participantContent}
            />
          }
        />
        <Route path="/addOrder" element={<AddOrder />} />
        <Route path="/viewOrders" element={<OrderListInPeriod />} />
        <Route
          path="/stocks"
          element={
            <StockComponent
              adminContent={adminContent}
              participantContent={participantContent}
            />
          }
        />
        <Route path="/addStock" element={<AddStock />} />
        <Route path="/stocks/increaseQuantity" element={<Update />} />
        <Route path="/reports" element={<ReportComponent />} />
        <Route path="/addReport" element={<AddReport />} />
        <Route path="/getReportById" element={<GetReportDetailsById />} />
        <Route
          path="/getReportByReportType"
          element={<GetReportDetailsByReportType />}
        />
        <Route
          path="/getReportByPeriod"
          element={<GetReportDetailsByPeriod />}
        />
        <Route exact path="/suppliedstocks" element={<ListSuppliedStock />} />
        <Route path="/addsupplystock" element={<AddSuppliedComponent />} />
      </Routes>
      <FooterComponent />
    </Router>
  );
};

export default App;
