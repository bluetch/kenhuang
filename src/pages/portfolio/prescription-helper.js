import React from "react";

export const Content = () => (
  <article id="portfolio">
    <div className="hero" style={{ backgroundImage: "url('../static/images/portfolio/prescription-helper-cover.jpg')", }}>
    </div>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h1>Prescription Helper</h1>
            <h2>Efficiency and Friendly in Medical industry</h2>
          </div>
          <div className="col-7">
            <p>The project was 3 years ago since I really started being a UX designer. In the beginning, there are only 4 employees to build up an e-commerce platform. Even it is not the perfect design and system, but I still proud of my first full-time design role. And there I will focus on the prescription part of the medical e-commerce platform.</p>
            <p>In Taiwan, while older people hold on the prescription is usually take a long process to get the drug. It is a chance to get more acquisition of orders.</p>
            <p>My role: Product Designer</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h3>Work Process</h3>
          </div>
          <div className="col-7">
            <ol>
              <li>
                <strong>Research</strong>
                <p>Industry study, stackholder interview</p>
              </li>
              <li>
                <strong>Design</strong>
                <p>Information artecture, flow, wireframe</p>
              </li>
              <li>
                <strong>Validation</strong>
                <p>Prototype, Usability test</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h3>Research</h3>
          </div>
          <div className="col-7">
            <h4>Continuous prescription for chronic diseases</h4>
            <p>Continuous prescription, usually, people can take drugs for 3 months, maximum receive 4 times. Beside first time,  the second, third and fourth user can go to other clinic or hospital to receive the drugs.</p>
            <h4>Find problems</h4>
            <p>For the prescription issue, there are 3 main problems base on the interview with some pharmacists and users. </p>
            <ol>
              <li>People took drug of prescription average time is <strong>5hr</strong> in process.</li>
              <li><strong>86.5%</strong> of people return to original hospital to take drugs.</li>
              <li>There are <strong>6500</strong> of people lost prescription per month.</li>
            </ol>
            <img src="..static/images/portfolio/prescription-helper-background.png" alt="prescription-helper-background" className="img-fluid" />
            <p>Every time is a long journey, some people don’t know or don’t trust the quality local clinic.</p>
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
          <div className="col-5">
            <h3>Design</h3>
          </div>
          <div className="col-7">
            <p><strong>Optimise the pharmacys workflow, medical shippingment and backend system, save the users time of process, increase traffic for the pharmacy.</strong></p>
            <h4>Wireframe</h4>
            <p>Once the idea and rules of prescription confirmed, I started to draft order flow to make sure all information and access points of each stage for users, platform, suppliers and pharmacies.</p>
          </div>
          <div className="col-12">
            <img src="../static/images/portfolio/prescription-helper-flow.jpg" alt="prescription-helper-flow" className="img-fluid" />
          </div>
          <div className="col-7 offset-5">
            <p>This is where I do most of my critical thinking about what the user needs, and design a detailed oriented user experience. My goal is to solve all the problems before I start any visual design.</p>
          </div>
          <div className="col-12">
            <img src="../static/images/portfolio/prescription-helper-order-flow.png" alt="prescription-helper-order-flow" className="img-fluid" />
          </div>
          <div className="col-12">
            <img src="../static/images/portfolio/prescription-helper-upload-flow-mobile.png" alt="prescription-helper-upload-flow-mobile" className="img-fluid" />
            <img src="../static/images/portfolio/prescription-helper-upload-flow-pc.png" alt="prescription-helper-upload-flow-pc" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h3>Validation</h3>
          </div>
          <div className="col-7">
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