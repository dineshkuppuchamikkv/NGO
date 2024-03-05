import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="./logo.png" width="50px" height="50px" alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-evenly text-white" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item ms-lg-5 ">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item ms-lg-5">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item ms-lg-5">
                <Link className="nav-link" to="/JoinUs">Join-Us</Link>
              </li>
              <li className="nav-item ms-lg-5">
                <Link className="nav-link" to="/Gallery">Gallery</Link>
              </li>
              <li className="nav-item ms-lg-5">
                <Link className="nav-link" to="/Donate">Donate</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar