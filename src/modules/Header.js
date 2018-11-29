import React from "react";
import { NavLink } from 'react-router-dom'

// http://www.consultsarath.com/public-utilities/high-quality-online-favicon-generator.aspx

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg fixed-top navbar-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          {/* <img src="../static/images/ken-huang-logo.png" alt="" className="logo-img"/> */}
          <h1 className="logo-text">KEN T. HUANG</h1>
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarTogglerDemo01">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://medium.com/@bluetch" target="_blank" rel="noopener noreferrer">Medium</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/bluetch" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);


export default Header;