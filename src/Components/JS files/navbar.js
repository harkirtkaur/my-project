import React from "react";
import '../CSS files/navbar.css';
import logo from '../Images/logo.PNG';
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          
          <Link class="navbar-brand" to="/">
            <img src={logo} alt="logo" width="35" height="35" />
          </Link>
          <span className="navbar-brand">
            JourneyPro
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/stays">
                  Stays
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/flights">
                  Flights
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"
                  to="/cars">
                  Cars
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"
                  to="/vpacks">
                  Packages
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <Link to={'/login'}>
              <button id="loginbtn" className="btn btn-outline-success me-2" role="Link">
                Login
              </button>
              </Link>
              <Link to={'/register'}>
                <button id="registerbtn"className="btn btn-success" role="Link">
                Register
              </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
