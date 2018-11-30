import React from "react";

export const Content = () => (
  <article id="portfolio">
    <div className="hero" style={{ backgroundImage: "url('../static/images/portfolio/jewelry-box-cover.jpg')", }}>
    </div>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h1>Jewelry Box</h1>
            <p>Trend Micro</p>
          </div>
          <div className="col-md-7">
            <p>The Jewelry Box was designed to simplify this cumbersome process with the seamless integration of hardware and software. Users can plug in a camera to the Jewelry Box and it will automatically transfer and upload photos to the cloud. The cloud provides secure storage where users can then view their photos and share them with their family and friends.</p>
            <p>Language / Tool: HTML, CSS, JavaScript, QtWebkit Graphic</p>
            <p>My Rule: Front End Developer</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h3>Lite App</h3>
          </div>
          <div className="col-md-7">
            <img src="../static/images/portfolio/jewelry-box-ui-overall.png" alt="jewelry-box-ui-overall" className="img-fluid" />
            <h2>To be continue</h2>
          </div>
        </div>
      </div>
    </section>

  </article >
);