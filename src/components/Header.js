import React from "react";
const Header = props => {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo">
          <img src="/images/k-logo.png" alt="Ken Huang" />
        </a>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/illustrations">Illustrations</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
