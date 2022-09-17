import React from "react";
import Logo from "../assets/images/Logo.png";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand ms-5" href="#">
            <img src={Logo} alt="Le Diamonds" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ms-5">
                <a className="nav-link active" aria-current="page" href="#">
                  Collections
                </a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link" href="#">
                  Blogs
                </a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link" href="#">
                  Our Story
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
