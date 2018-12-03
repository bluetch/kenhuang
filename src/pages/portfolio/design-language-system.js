import React from "react";

export const Content = () => (
  <article id="portfolio">
    <div className="hero" style={{ backgroundImage: "url('../static/images/portfolio/design-language-system-cover.jpg')", height: "100vh"}}>
    </div>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h1>Design Language System</h1>
            <p>Shopee</p>
          </div>
          <div className="col-md-7">
            <p>When projects grow fast, the design resources were rudimentary, outdated and hard-to-find. We lacked a design language to maintain and updates such as logo guideline, brand images, and App guideline. When I just join here, it’s just going to start, then I hand over this project to be an owner.</p>
            <p>My Rule: Interaction Designer, Product manager</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2>Research</h2>
          </div>
          <div className="col-md-7">
            <h4>content</h4>
            <img src="../static/images/portfolio/design-language-system-information-architecture.png" alt="design-language-system-information-architecture" className="img-fluid" />
            <img src="../static/images/portfolio/design-language-system-foundations.png" alt="design-language-system-foundations" className="img-fluid" />
            <img src="../static/images/portfolio/design-language-system-documents.png" alt="design-language-system-documents" className="img-fluid" />
          </div>
          <hr />
          <div className="col-md-5">
            <h2>AutoLayout</h2>
          </div>
          <div className="col-md-7">
            <iframe title="autolayout" width="560" height="315" src="https://www.youtube.com/embed/CwmaUkF94dc" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>

  </article >
);