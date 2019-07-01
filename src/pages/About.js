import React from "react";

class About extends React.Component {
  componentDidMount() {
    document.title = "About - Ken Huang";
  }
  render() {
    return (
      <article id="about">
        {/* <div className="hero" style={{ backgroundImage: "url('../static/images/portfolio/shopee-workshop-01.jpg')", height: "90vh" }}>
    </div> */}
        <section className="profile">
          <div className="container">
            <div className="row">
              <div className="col-md-4 offset-md-1 my-auto">
                <img src="../static/images/about/ken-huang.jpg" alt="Ken Huang" className="my-portrait" />
              </div>
              <div className="col-md-7 my-auto">
                <h1>Ken Huang</h1>
                <h4 className="title">Full-stack UX Designer</h4>
                <p>I'm a big picture thinker, I listen stories, and I solve problems that affect billions of people. I do this by designing and creating products that matter.</p>
                <p>Currently I have been working at Shopee in Singapore, design for south east area users. I enjoy turning complex problems into simple, beautiful and intuitive designs. When I'm not coding, tweeting or pushing pixels, you'll find me making coffee, jogging or working out in the park.</p>
                <a href="https://drive.google.com/open?id=1IAZQVlsNZ_sZZ7sNEMbtChJhzEZoLe-H" className="btn btn-light">Resume</a>
              </div>
            </div>
          </div>
        </section>
        <section className="experience">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h3>Experience</h3>
                <img src="../static/images/about/logo-shopee.png" alt="" className="job-logo" />
                <h5 className="job-title">Sr. UI/UX Designer / Engineer</h5>
                <p>Shopee (Sep 2017 - Present, Singapore)</p>
                <p>Owner of design language system for Shopee projects: design library, CMS for operations and components with developers.</p>
                <p>Executing design at all stages from early concept to end to end experience including UX, interaction, user research, and visual design.</p>
                <p>Collaborate with the product, business, and engineering team to define the product direction. </p>
                <hr />
                <img src="../static/images/about/logo-yulon.png" alt="" className="job-logo" />
                <h5 className="job-title">Project Manager (UI/UX)</h5>
                <p>Yulon Group (Jul 2016 - Apr 2017, Taiwan)</p>
                <p>Managed projects from idea, research, design, to launch for travel website, car management system, Roadside Assistance App, airport pick-up service and e-commerce App.</p>
                <hr />
                <img src="../static/images/about/logo-uitox.jpg" alt="" className="job-logo" />
                <h5 className="job-title">Front-end Design Lead</h5>
                <p>Uitox E-commerce Group (Aug 2013 - Jul 2016)</p>
                <p>Led UX/UI for e-commerce system: web and App store, payment, shipping features and dashboard for buyers and sellers from research, concepting and validation, through documentation, implementation and launch.</p>
                <p>Led a team of designers & front-end developers, hiring and mentor, responsible for direct reports, and designed brand e-commerce for ASUS, LINE, Feiniu.</p>
                <hr />
                <img src="../static/images/about/logo-trendmicro.jpg" alt="" className="job-logo" />
                <h5 className="job-title">Front End Developer</h5>
                <p>Trend Micro (Aug 2010 - Feb 2013)</p>
                <p>Developed Lost Device Protection, Site Safety Center, Jewelry Box, and internal database query system by HTML, CSS, Javascript,  PHP, MySQL, JAVA, and Git for site development.</p>
                <hr />
                <img src="../static/images/ken-huang-logo.png" alt="" className="job-logo" />
                <h5 className="job-title">Freelancer</h5>
                <p>KenHuang.tw (Aug 2005 - Current)</p>
                <p>I collaborated with developer teams & managed a wide variety of cross-media projects involving branding, illustrations & UI design for startups & academic institutions.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="skill">
          <div className="container">
            <h3>Skill</h3>
            <div className="row">
              <div className="col-md-4">
                <h5>Designer</h5>
                <p>Strategy & vision presentations</p>
                <p>UX Design</p>
                <p>UI Design</p>
              </div>
              <div className="col-md-4">
                <h5>Programmer</h5>
                <p>Rapid prototyping using Invision</p>
                <p>Interactive flow with HTML/ CSS/ JS</p>
                <p>Frameworks (React, Bootstrap) & APIs</p>
              </div>
              <div className="col-md-4">
                <h5>Research</h5>
                <p>Data analysis</p>
                <p>User Interview & persona hypothesis</p>
                <p>A/B Testing & Experiment</p>
              </div>
            </div>
          </div>
        </section>
        {/* <section>
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <h3>Clients</h3>
              </div>
              <div className="col-md-7">
                <p>I have had the great pleasure to work with many amazing organisations, from global corporations like Google, to very small businesses. </p>
                <p>It's easy to say yes to a job, but success for me is intrinsically linked with delivery. I work very hard to ensure that my products and designs are technically feasible and that they add value to customers lives, as well as to business revenue.</p>
                <p>The products we make should matter enough to be launched, or we shouldn't make them.</p>
                <ul>
                  <li>
                    <strong>E-commerce: </strong>LINE, Feiniu, Shopee, ASAP
              </li>
                  <li>
                    <strong>Manufacturing: </strong>ASUS, Chao Hsin
              </li>
                  <li>
                    <strong>Medical: </strong>GSK, MSTCL
              </li>
                  <li>
                    <strong>Publisher: </strong>De Agostini, Molife, iPeen
              </li>
                  <li>
                    <strong>Vehicle: </strong>Yulon motor
              </li>
                  <li>
                    <strong>Education: </strong>NCUE, DYU, NTUT, Dongren
              </li>
                  <li>
                    <strong>Restaurant: </strong>ChinaPa
              </li>
                </ul>
              </div>
            </div>
          </div>
        </section> */}
        <section className="travel">
          <div className="container">
            <h3>Travel</h3>
            <p style={{ marginBottom: "60px" }}>I love to plant, taking the photo, and learn something new. Also, love to explore new places for breakfast. I'm proactively learning and seeking challenges to make myself forward. If you’d like to get in touch, feel free to say hello through any of the social links below. </p>
            <div className="row">
              <div className="col-md-3 col-6">
                <img src="../static/images/about/travel-amsterdam-cover.jpg" alt="" className="img-fluid" />
                <p className="desc">Giethoorn in Amsterdam</p>
              </div>
              <div className="col-md-3 col-6">
                <img src="../static/images/about/travel-belgium-cover.jpg" alt="" className="img-fluid" />
                <p className="desc">Waffle in Belgium</p>
              </div>
              <div className="col-md-3 col-6">
                <img src="../static/images/about/travel-tokyo-cover.jpg" alt="" className="img-fluid" />
                <p className="desc">Skiing in Japan</p>
              </div>
              <div className="col-md-3 col-6">
                <img src="../static/images/about/travel-australia-cover.jpg" alt="" className="img-fluid" />
                <p className="desc">Surfing in Australia</p>
              </div>
              <div className="col-md-3 col-6">
                <img src="../static/images/about/travel-england-cover.jpg" alt="" className="img-fluid" />
                <p className="desc">Hogwarts in England</p>
              </div>
              <div className="col-md-3 col-6">
                <img src="../static/images/about/travel-iceland-cover.jpg" alt="" className="img-fluid" />
                <p className="desc">Iceberg in Iceland</p>
              </div>
              <div className="col-md-3 col-6">
                <img src="../static/images/about/travel-japan-cover.jpg" alt="" className="img-fluid" />
                <p className="desc">Tea in Japan</p>
              </div>
              <div className="col-md-3 col-6">
                <img src="../static/images/about/travel-indonesia-cover.jpg" alt="" className="img-fluid" />
                <p className="desc">Volcano in Indonesia</p>
              </div>
              <div className="col-md-3 col-6">
                <img src="../static/images/about/travel-thailand-cover.jpg" alt="" className="img-fluid" />
                <p className="desc">History in Thailand</p>
              </div>
              <div className="col-md-3 col-6">
                <img src="../static/images/about/travel-taiwan-cover.jpg" alt="" className="img-fluid" />
                <p className="desc">Hiking in Taiwan</p>
              </div>
            </div>
          </div>
        </section >
        <section style={{textAlign: "center"}}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <h3>Contact</h3>
                <p>You can contact me via
              <a href="mailto:bluetch@gmail.com" className="primary-link">email</a>,
              <a href="https://www.linkedin.com/in/bluetch/" className="primary-link">linkedin</a>,
              <a href="https://www.facebook.com/bluetch" className="primary-link">facebook</a> or
              <a href="https://www.instagram.com/kenbluer/" className="primary-link">instagram</a>.
            </p>
              </div>
            </div>
          </div>
        </section>
      </article >
    );
  }
}

export default About;