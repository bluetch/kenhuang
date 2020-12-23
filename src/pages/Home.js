import { useState, useEffect } from 'react';
import Particles from 'react-particles-js';
import axios from 'axios';
import { portfolioData, instagramData } from '../json/constants';

const Home = (props) => {
  const [photos, setPhotos] = useState(instagramData);

  useEffect(() => {
    axios.get('https://www.instagram.com/kenbluerr/?__a=1')
      .then(res => {
        setPhotos(res.data.graphql.user.edge_owner_to_timeline_media.edges);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  return (
    <div className="home-page">
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
              <div className="col-md-8 offset-md-2" style={{textAlign:"center"}}>
                <h2>Hi, I'm Ken Huang, a passionate product designer / UX engineer from Taipei, Taiwan now living in Singapore</h2>
              </div>
            </div>
          </div>
        </section>
      <div className="container">
      <a className="link-more" href="/portfolio">more</a>
        <h2>Portfolio</h2>
        
        <div className="grid">
          {
            portfolioData.map((item, key) => {
              if (key < 3) {
                return (
                  <a href={item.url} className="card" key={key}>
                    <img src={`/images/portfolio/` + item.image} alt="" />
                    <p className="name">{item.name} <span className="date">({item.date})</span></p>
                    <p className="desc">{item.desc}</p>
                  </a>
                )
              } else {
                return false;
              }
            })
          }
        </div>
        <a className="link-more" href="/illustrations">more</a>
        <h2>Illustrations</h2>
        
        <div className="grid">
          {
            photos.map((item, key) => {
              if (key < 3) {
                return (
                  <a href={"https://www.instagram.com/p/" + item.node.shortcode} key={key} className="card" rel="noopener noreferrer" target="_blank">
                    <img src={item.node.thumbnail_resources[3].src} alt={item.node.accessibility_caption} />
                  </a>
                )
              }else{
                return false;
              }
            })
          }
        </div>
      </div>
    </div>

  )
}

export default Home;