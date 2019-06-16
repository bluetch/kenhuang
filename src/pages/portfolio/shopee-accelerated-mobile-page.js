import React from "react";

export const Content = () => (
  <article className="portfolio">
    <div className="hero" style={{ backgroundImage: "url('../static/images/portfolio/shopee-workshop-01.jpg')", }}>
    </div>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h1>Accelerated Mobile Page (AMP)</h1>
            <p>Shopee</p>
          </div>
          <div className="col-md-7">
            <p>In order to help our users browsing service in south east area, especially in Indonesia, there are not enough internet infrastructure to support friendly web service, we have to make it better.</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2>So why did we do this?</h2>
          </div>
          <div className="col-md-7">
            <p>There were many reasons that drove this project.</p>
            <ol>
              <li>
                <p><strong>Business:</strong> We wanted to reduce the drop-off rate of web pages, and increase discoverability from Google search.</p>
              </li>
              <li>
                <p><strong>Technology:</strong> The previous app design and architecture was difficult to fit low-bandwidth internet environment like Indonesia. It need to load a page around 11 seconds.</p>
              </li>
              <li>
                <p><strong>User’s pain points:</strong> There is too much information for many South-east-Asians use the older smartphone with small screen size. A lot of our users in Indonesia are hard to filter the more meaningful thing they care. </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2>Design Process</h2>
          </div>
          <div className="col-md-7">
            <ol>
              <li>
                <strong>Research</strong>
                <p>Data analytics, User survey.</p>
              </li>
              <li>
                <strong>Design sprint</strong>
                <p>User discovery, Solution Discovery.</p>
              </li>
              <li>
                <strong>Execution</strong>
                <p>UI/UX design, Prototype, Project management</p>
              </li>
              <li>
                <strong>Validation</strong>
                <p>Google analytics, Business intelligence</p>
              </li>
            </ol>
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
            <h3>Data Analytics</h3>
            <p>Via Google analytics, we pick some statistics up and figure out what might be helpful to measure success and pain point.</p>
            <p>There are some data we might track or enhance.</p>
            <ul>
              <li>Page traffic</li>
              <li>Bounce rate</li>
              <li>Page load time</li>
              <li>New users sessions</li>
              <li>Average view time</li>
            </ul>
            <img src="../static/images/portfolio/shopee-overall-sessions.png" alt="shopee-overall-sessions" className="img-fluid" />
            <p>Base on the above data, we found the product page which has too long load time, high bounce rate for lots of new users than other pages. In E-commerce, the product page is the one of the most important pages for conversion rate. So we decide to improve this page for higher priority, and also make a product roadmap to summarize that maps out the vision and direction.</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2>Design Sprint</h2>
          </div>
          <div className="col-md-7">
            <p>A design sprint is a five-step framework that helps teams arrive at clearly defined goals, deliverables and uncover key learnings quickly through:</p>
            <ol>
              <li>Ideation</li>
              <li>Rapid prototyping</li>
              <li>User testing</li>
            </ol>
            <h3>Affinity Mapping</h3>
            <p>Each participant watched user interview videos from 1 of 6 different user segments and came prepared with their observations written on post-it notes.</p>
            <p>
              <a href="https://www.interaction-design.org/literature/article/affinity-diagrams-learn-how-to-cluster-and-bundle-ideas-and-facts" className="text-link">Affinity maps</a>
              were then used to organize and categorize these many different data points, from which common themes and relationships surrounding the observations emerged — even uncovering previously hidden ones.</p>
            <img src="../static/images/portfolio/shopee-affinity-map.jpg" alt="shopee-affinity-map" className="img-fluid" />
            <h4>Solution Discovery</h4>
            <p>The second half of the day focused on devising a design that met different user groups’ needs. To do this, participants were regrouped so each group had a mix of user personas.</p>
            <h3>Card Sorting</h3>
            <p>
              Teams were given cards with components of Shopee’s digital interface and tasked to first classify, then sort according to importance. The open card sort method allowed participants to explore each others’ conceptions of user mental models. From this, teams were able to organically determine their design guidelines for the next phase of the sprint.
            </p>
            <img src="../static/images/portfolio/shopee-workshop-card-sorting.jpg" alt="shopee-workshop-card-sorting" className="img-fluid" />
            <p>And here is the output:</p>
            <ol>
              <li>Product image</li>
              <li>Basic product information (e.g product name, price)</li>
              <li>Product details</li>
              <li>Comments sections</li>
              <li>Rating section</li>
              <li>Shipping details</li>
              <li>Promotion information (e.g voucher)</li>
              <li>Seller info</li>
              <li>Wholesale details</li>
              <li>Recommendation</li>
            </ol>
            <h3>Sketch Storming</h3>
            <p>
              Participants first put pen to paper and individually sketched their ideal product, then sketched a single mock-up as a group. The insights that emerged from the diverse set of participants will no doubt be invaluable to future product development and innovations.</p>
            <img src="../static/images/portfolio/shopee-workshop-sketch-vote.jpg" alt="shopee-workshop-sketch-vote" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2>Execution</h2>
          </div>
          <div className="col-md-7">
          <h3>Wireframe</h3>
            <p>Base on the sketch storming of design sprint, we could start from product detail page. My goal is to solve all the problems and implement the idea of design.</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <img src="../static/images/portfolio/shopee-amp-pdp-wireframe-overall.png" alt="shopee-amp-pdp-wireframe-overall" className="img-fluid" />
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-7 offset-md-5">
            <h4>First Screen</h4>
            <p>According to the card sorting and user survey, beyond the images, product page needs to give high-level information of the product right off the bat.</p>
            <p>That information includes</p>
            <ul>
              <li>Product title</li>
              <li>Price</li>
              <li>Features and components</li>
              <li>CTA</li>
              <li>Customization options</li>
            </ul>
            <p>Ideally, all of this information lives above the fold. That isn’t always possible (in fact, it is rarely possible). The solution here is to extraction the most meaningful wording of each service. Like voucher, via interview survey, there are few people need it, but which they actually need. We make it as a small block, only display the discount percentage, if they really like to know in detail (expire date, min speed, capped), they can click to see more in detail.</p>
            <img src="../static/images/portfolio/shopee-amp-pdp-wireframe-voucher.png" alt="shopee-amp-pdp-wireframe-voucher" className="img-fluid" />
            <h4>Fourth Screen: Recommendation</h4>
            <ul>
              <li>From the same shop</li>
              <li>Similar products</li>
              <li>You may also like</li>
            </ul>
            <p>There are 3 recommendation sections, We put these under the product information, it can help users find out more ideal, similiar, cheaper products. For You May Also Like section, it relate the users browse history and current product, make people more choice.</p>
            <div className="row">
              <div className="col-md-6">
                <img src="../static/images/portfolio/shopee-amp-pdp-wireframe-recommendation.png" alt="shopee-amp-pdp-wireframe-recommendation" className="img-fluid" />
              </div>
            </div>
            <h4>Error Page</h4>
            <p>Error message text is a unique situation in the world of error messages, but definitely not rare. The default message provided by a user’s browser can often be unhelpful and generic.</p>
            <p>To create the best error messages for a internet issue, it’s important to know what type of website error this is. The cause could be:</p>
            <ul>
              <li>No internet connection</li>
              <li>The network is busy</li>
              <li>Something went wrong</li>
            </ul>
            <p>Base on different scenario, we have to design suitable wording and visual to help users process.</p>
          </div>
        </div>
      </div>
    </section >
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2>Visual Design</h2>
          </div>
          <div className="col-md-7">
            <p>Instead of using heavy text for an overview (this is *not* the description), we use colors, fonts, and icons. And we could only fetch some representative signal for that information.</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <img src="../static/images/portfolio/shopee-amp-pdp-mockup-01.png" alt="shopee-amp-pdp-mockup-01" className="img-fluid" />
      <img src="../static/images/portfolio/shopee-amp-pdp-mockup-02.png" alt="shopee-amp-pdp-mockup-02" className="img-fluid" />
      <img src="../static/images/portfolio/shopee-amp-pdp-mockup-error.png" alt="shopee-amp-pdp-mockup-error" className="img-fluid" />
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2>Technical Solution</h2>
          </div>
          <div className="col-md-7">
            <h3>Improve Loading Speed on Mobile Devices</h3>
            <p>We launch the <a href="https://www.ampproject.org/" className="text-link">AMP project</a> for this version which is an open-source initiative aiming to make the web better for all. The project enables the creation of websites and ads that are consistently fast, beautiful and high-performing across devices and distribution platforms.</p>
            <p>In a highly competitive e-commerce market, it’s critical to provide the best user experience (UX) for customers, including for those using low-end smartphones on 3G or 2G connections. As Shopee mobile traffic grew, the company saw an opportunity to acquire new users and improve mobile conversions through this valuable channel.</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2>Product Management</h2>
          </div>
          <div className="col-md-7">
            <p>Due to this project was new and start up with designers and developers for the beginning, I raise myself to be a product manager in this project to work with each team:</p>
            <ul>
              <li>Design team</li>
              <li>Product team</li>
              <li>Front end developer team</li>
              <li>Backend developer team</li>
              <li>SEO team</li>
              <li>QA(Quality assurance) team</li>
              <li>Local country team (7 countries)</li>
            </ul>
            <h4>Documentation</h4>
            <p>I created and maintaind some documents like PRD (Product Requirements Document) containing all the requirements to a certain product. It is written to allow people to understand what a product should do.</p>
            <ul>
              <li>Product Requirements Document (PRD)</li>
              <li>Tracking point requirement</li>
              <li>Design spec</li>
              <li>Test case</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2>Validation</h2>
          </div>
          <div className="col-md-7">
            <p>We use Google Analytics to track the performance with internal data to validate the result.</p>
            {/* <ul>
              <li><strong>3X</strong> faster load time</li>
              <li><strong>150%</strong> more user browse time on pages</li>
              <li>Increase to <strong>39%</strong> new users reach the page from Google search</li>
            </ul> */}
            <img src="../static/images/portfolio/shopee-amp-pdp-performance-simple.png" alt="shopee-amp-pdp-performance-simple" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2>Next Step</h2>
          </div>
          <div className="col-md-7">
            <p>According to these good result, as a designer, I have to plan the overall product roadmap. We are planning to do next for <strong>Category page</strong></p>
          </div>
        </div>
      </div>
    </section>
  </article >
);