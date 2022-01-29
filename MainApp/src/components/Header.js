import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import UserService from "../services/UserService";
import { useNavigate } from "react-router-dom";

function Header({ user }) {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => setClick(!click);

  const handleLogout = () => {
    UserService.logout();
    navigate("/login");
    window.location.reload();
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span style={{ color: "tomato" }}>MEDICAL</span> STORE{" "}
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Us
              </NavLink>
            </li>

            {user ? (
              <li className="nav-item">
                {/* <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/login"
                    >
                      Logout
                    </NavLink> */}
                <button
                  style={{
                    fontSize: "15px",
                    backgroundColor: "black",
                    borderColor: "yellow",
                    color: "white",
                  }}
                  type="button"
                  className="btn btn-primary nav-link"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-links"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            )}
            {user ? (
              <></>
            ) : (
              <li className="nav-item">
                <NavLink
                  exact
                  to="/signup"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  SignUp
                </NavLink>
              </li>
            )}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
