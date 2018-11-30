import React, { PureComponent } from "react";
import { ShowAll } from "./Portfolio.js"

class Home extends PureComponent {
  render() {
    return (
      <div id="home">
        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Hi, I'm Ken Huang!</h2>
                <h3>I am a <span className="color-primary">designer</span> and <span className="color-secondary">developer</span> with 10 years experience.</h3>
                <p>Some of my skills include user research, UX/UI design, interaction design, prototyping, user testing and front end developing. I also play tennis.</p>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </section>
        <ShowAll />
      </div>
    );
  }
}

export default Home;