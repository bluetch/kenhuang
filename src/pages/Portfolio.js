import React from "react";
import { Switch, Route, Link, NavLink } from 'react-router-dom';
import { Helmet } from "react-helmet";

const portfolioAPI = {
  tasks: [
    {
      url: "shopee-accelerated-mobile-page",
      name: "Shopee Accelerated Mobile Page",
      desc: "To improve performance and get more acquisition for e-commerce",
      image: "static/images/portfolio/shopee-amp-product-detail-page.jpg",
      state: true
    },
    {
      url: "design-language-system",
      name: "Shopee Design Language System",
      desc: "A set of rules and guidelines help work efficiency",
      image: "static/images/portfolio/design-language-system-cover.jpg",
      state: true
    },
    {
      url: "design-exercise-pet-adoption",
      name: "Pet Adoption",
      desc: "Design exercise",
      image: "static/images/portfolio/pet-adoption-cover.png",
      state: true
    },
    {
      url: "shopee-microsite",
      name: "Shopee microsite",
      desc: "A content management system help on E-commerce",
      image: "static/images/portfolio/design-language-system-cover.jpg",
      state: "hide"
    },
    {
      url: "shopee-recruitment",
      name: "Shopee Graphic Recruitment",
      desc: "Social network recruitment strategy",
      image: "static/images/portfolio/shopee-recruitment-frog-cover.png",
      state: true
    },
    {
      url: "prescription-helper",
      name: "Prescription Helper",
      desc: "A simple Medical App for get drugs of prescription",
      image: "static/images/portfolio/prescription-helper-cover.png",
      state: true
    },
    {
      url: "line-flash-sale",
      name: "LINE Flash Sale",
      desc: "Deliver UX/UI design for Web App for LINE",
      image: "static/images/portfolio/line-flash-sale-cover.png",
      state: true
    },
    {
      url: "lost-device-protection",
      name: "Lost Device Protection",
      desc: "Trend Micro",
      image: "static/images/portfolio/lost-device-protection-cover.jpg",
      state: true
    },
    {
      url: "jewelry-box",
      name: "Jewelry-box",
      desc: "Trend Micro",
      image: "static/images/portfolio/jewelry-box-cover.jpg",
      state: true
    },
    {
      url: "climber",
      name: "Climber",
      desc: "Shopee",
      image: "static/images/portfolio/jewelry-box-cover.jpg",
      state: "hide"
    },
  ],
  preview() { return this.tasks },
  get: function (id) {
    const isPortfolio = p => p.url === id
    return this.tasks.find(isPortfolio)
  }
}


export class SeeMorePortfolio extends React.Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <NavLink to="/portfolio" className="portfolio-footer-link">All</NavLink>
              {
                portfolioAPI.preview().map(task => {
                  if (task.state === true) {
                    return (
                      <NavLink to={`/portfolio/${task.url}`} className="portfolio-footer-link">
                        {task.name}
                      </NavLink>
                    )
                  }
                })
              }
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export const ShowAll = () => (
  <section className="portfolio">
    <div className="container">
      <div className="row">
        {
          portfolioAPI.preview().map(task => {
            if (task.state === true) {
              return (
                <div className="col-6" key={task.url}>
                  <Link to={`/portfolio/${task.url}`} className="card">
                    <img src={task.image} className="card-img-top" alt={task.name} />
                    <div className="card-body">
                      <h3 className="card-title">{task.name}</h3>
                      <p className="desc">{task.desc}</p>
                    </div>
                  </Link>
                </div>
              )
            } else if (task.state === false) {
              return (
                <div className="col-6" key={task.url}>
                  <div className="card coming">
                    <img src={task.image} className="card-img-top" alt={task.name} />
                    <div className="card-body">
                      <h3 className="card-title">{task.name}</h3>
                      <p className="desc">{task.desc}</p>
                    </div>
                  </div>
                </div>
              )
            } else {
              return false;
            }
          })
        }
      </div>
    </div>
  </section>
)

class Article extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  componentDidMount() {
    const item = portfolioAPI.get(this.props.match.params.url);
    document.title = item.name + " | Ken Huang";
  }
  render() {
    const item = portfolioAPI.get(this.props.match.params.url);
    //console.log(item);
    if (item) {
      var { Content } = require('./portfolio/' + item.url);
      return (
        <div>
          <Helmet
            title={item.name}
            meta={[
              { name: "description", content: item.desc },
              { property: "og:title", content: item.title },
              { property: "og:site_name", content: "Product Designer | Ken Huang" },
              { property: "og:url", content: item.url },
              { property: "og:image", content: item.image },
              { property: "og:description", content: item.desc },
            ]}
          />
          <Content />
          <SeeMorePortfolio />
        </div>
      )
    } else {
      return <div>Sorry, but the task was not found</div>
    }
  }
}

class Portfolio extends React.Component {
  componentDidMount() {
    document.title = "Portfolio - Ken Huang";
  }
  render() {
    return (
      <Switch>
        <Route exact path='/portfolio' component={ShowAll} />
        <Route path='/portfolio/:url' component={Article} />
      </Switch>
    );
  }
}

export default Portfolio;