import React from "react";

export const Content = () => (
  <article id="portfolio">
    <div className="hero" style={{ backgroundImage: "url('../static/images/portfolio/lost-device-protection-cover.jpg')", height: "100vh" }}>
    </div>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h1>Lost Device Protection</h1>
            <p>Trend Micro</p>
          </div>
          <div className="col-md-7">
            <p>There was a project called Lost Device Protection when I worked atTrend Micro in 2011. The product team asked me to develop the next version for new UI and responsive web design. I used a bootstrap framework, I also assisted with the HTML & CSS for the mobile version of the site, and wrote a separate stylesheet specifically for the site when being viewed on an iPad.</p>
            <p>My Rule: Front End Developer</p>
            <a href="https://mobilesecurity.trendmicro.com/" className="">View Website</a>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h3>Building a Fast and Responsive Front-End</h3>
          </div>
          <div className="col-md-7">
            <p>The PM was very happy with the designs and with the back-end already in place we were able to quickly move onto the build of the front-end.</p>
            <p>I built the front-end “mobile-up”, meaning it was first created for mobile layouts, then using media queries and progressive enhancement additional styles and functionality were added for tablet and desktop.</p>
            <p>To keep performance optimal, I used hardware acceleration for smooth animations across all devices, minimized and concatenated scripts, and used sprite sheets to keep the number of browser requests at a minimum.</p>
            <p>Where possible, I relied on third-party libraries such as:</p>
            <ul>
              <li>
                <p><a href="https://jquery.com/" className="text-link">JQuery</a> for general behaviours</p>
              </li>
              <li>
                <p><a href="https://modernizr.com/" className="text-link">Modernizr</a> for testing browser features</p>
              </li>
              <li>
                <p><a href="https://getbootstrap.com/" className="text-link">Bootstrap</a> for basic UI framework</p>
              </li>
              <li>
                <p><a href="https://analytics.google.com/analytics/web/#/" className="text-link">Google Analytics</a> for tracking performance</p>
              </li>
              <li>
                <p><a href="https://cloud.google.com/maps-platform/" className="text-link">Google Map API</a> to connect our service</p>
              </li>
              <li>
                <p>JSON format to support L10n</p>
              </li>
            </ul>
            <p>The front end build process included the use of <a href="https://gruntjs.com/" className="text-link">Grunt</a> for automated tasks to speed up development and <a href="https://git-scm.com/" className="text-link">Git</a> for version control.</p>
          </div>
        </div>
      </div>
    </section>

  </article >
);