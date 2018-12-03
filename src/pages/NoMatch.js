import React from "react";

const NoMatch = () => (
  <div id="nomatch">
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2 text-center">
        <img src="../static/images/404.svg" alt="Page not found" />
          <h2>Page not found</h2>
          <p>The page you are looking for was moved, removed, renamed or might never existed. If you interested more about me, please check my <a href="https://www.instagram.com/kenbluer/" className="text-link">instagram</a>.</p>
        </div>
      </div>
    </div>
  </div>
);

export default NoMatch;