import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const Navbar = () => {
  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              Smartail
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/add" className="nav-link">
                    Add
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/view" className="nav-link">
                    View
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/view_individual" className="nav-link">
                    View Individual
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/update" className="nav-link">
                    Update
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/delete" className="nav-link">
                    Delete
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  );
};

export default Navbar;