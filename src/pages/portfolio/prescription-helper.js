import React from "react";

export const Content = () => (
  <article className="portfolio">
    
    <section style={{ textAlign: "center" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h1 style={{ fontSize: "46px", fontWeight: "700", margin: "60px 0" }}>Design Prescription Helper App for patient to get pills more efficiently</h1>
            <p>The prescription flow has remained paper work for decades. Its redesign is an opportunity to improve the user flow infrastructure in one of the biggest cities in Taiwan, which could decrease pollution, provide access to better education and employment opportunities, improve the health of millions of citizens and potentially save the economy an enormous amount of money.</p>
            <p>My role: Product Designer, 2014 - 2016</p>
            <img src="../static/images/portfolio/prescription-helper-cover.png"
    alt="Prescription UX design"
    className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h3>Research</h3>
          </div>
          <div className="col-md-7">
            <h4>Continuous prescription for chronic diseases</h4>
            <p>Continuous prescription, usually, people can take drugs for 3 months, maximum receive 4 times. Beside first time,  the second, third and fourth user can go to other clinic or hospital to receive the drugs.</p>
            <h4>Find problems</h4>
            <p>For the prescription issue, there are 3 main problems base on the interview with some pharmacists and users. </p>
            <ol>
              <li>People took drug of prescription average time is <strong>5hr</strong> in process.</li>
              <li><strong>86.5%</strong> of people return to original hospital to take drugs.</li>
              <li>There are <strong>6500</strong> of people lost prescription per month.</li>
            </ol>
            <img src="../static/images/portfolio/prescription-helper-background.png" alt="prescription-helper-background" className="img-fluid" />
            <p>Every time is a long journey, some people don???t know or don???t trust the quality local clinic.</p>
            <h4>Interview with doctors and pharmacists</h4>
            <p>We have interviews with some doctors and pharmacists and get some feedback to design the order flow and upload prescriptions in prescriptions helper.</p>
            <p>Through our research, we found there are not only older people but also lot of children and grandchildren usually help to own prescription to get medicine for their family needs, we try to combine more convenient tool such as e-prescription via QR-code to reduce massive upload time.</p>
            <p>Employee in pharmacy are trying to accomplish the same things: fill prescriptions accurately and efficiently, provide high-quality patient care, and maintain a sustainable business model in which employees have good job satisfaction and customers are happy. In reality, most pharmacies operate under a model where employees spend most of their time addressing insurance issues, physician callbacks, and urgent requests. Adding more patient care services, although important, increases the workload without adding revenue. The tendency for chaos to erupt can be mitigated, however, with an improved work flow.</p>
            <img src="../static/images/portfolio/prescription-helper-template.png" alt="prescription-helper-template" className="img-fluid" />
            <h4>Solution</h4>
            <ol>
              <li>Integrate prescription flow as an order between pharmacies and suppliers.</li>
              <li>Highlight the knowledge and quality of pharmacy.</li>
              <li>Save their prescription on the cloud.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h3>Design</h3>
          </div>
          <div className="col-md-7">
            <p>Optimise the pharmacys workflow, medical shippingment and backend system, save the users time of process, increase traffic for the pharmacy.</p>
            <h4>Wireframe</h4>
            <p>Once the idea and rules of prescription confirmed, I started to draft order flow to make sure all information and access points of each stage for users, platform, suppliers and pharmacies.</p>
          </div>
          <div className="col-12">
            <img src="../static/images/portfolio/prescription-helper-flow.jpg" alt="prescription-helper-flow" className="img-fluid" />
          </div>
          <div className="col-md-7 offset-md-5">
            <p>This is where I do most of my critical thinking about what the user needs, and design a detailed oriented user experience. My goal is to solve all the problems before I start any visual design.</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <img src="../static/images/portfolio/prescription-helper-upload-flow-mobile.png" alt="prescription-helper-upload-flow-pc" className="img-fluid" />
      <p style={{ textAlign: "center" }}>Upload flow</p>
    </section>
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
      <img src="../static/images/portfolio/prescription-helper-mockup-1.jpg" alt="prescription-helper-background" className="img-fluid" />
      <img src="../static/images/portfolio/prescription-helper-mockup-2.jpg" alt="prescription-helper-mockup" className="img-fluid" />
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h3>Validation</h3>
          </div>
          <div className="col-md-7">
            <h4>Result</h4>
            <ol>
              <li>QR-code upload to save time and decrease typo rate.</li>
              <li>Orders increase <strong>300%</strong> in first 3 months.</li>
              <li>People no need take paper prescription to clinics.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  </article >
);