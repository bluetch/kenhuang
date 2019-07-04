import React, { PureComponent } from "react";
import { ShowAll } from "./Portfolio.js"
import Particles from 'react-particles-js';

class Home extends PureComponent {
  componentDidMount() {
    document.title = "Product Designer | Ken Huang";
  }
  render() {
    return (
      <div id="home">
        <section className="hero">
          <Particles
            className="particles-layout"
            style={{
              background: 'white',
              position: 'absolute',
              width: "100%",
              height: "100%",
              top: "0",
              left: "0",
            }}
            params={{
              "particles": {
                "number": {
                  "value": 80,
                  "density": {
                    "enable": true,
                    "value_area": 800
                  }
                },
                "size": {
                  "value": 3
                },
                "line_linked": {
                  "enable": true,
                  "distance": 150,
                  "color": "#bababa",
                  "opacity": 0.4,
                  "width": 1
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#bababa"
                  },
                  "polygon": {
                    "nb_sides": 5
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "grab"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 150,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
            }} />
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2 text-center">
                <h2>Ken Huang</h2>
                <h3>Hi! I'm a Product Designer based in Singapore</h3>

              </div>
              {/* <div className="col-md-3 offset-md-1">
                <div className="flipper">
                  <div className="flipper-content">
                    <div className="flipper-front">
                      <img src="../static/images/about/kenhuang-avatar.png"
                        alt="ken-huang-avatar"
                        className="avatar"
                      />
                    </div>
                    <div className="flipper-back">
                      <img src="../static/images/about/about-ken-huang-designer.png"
                        alt="ken-huang-avatar"
                        className="avatar"
                      />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        <ShowAll />
      </div>
    );
  }
}

export default Home;