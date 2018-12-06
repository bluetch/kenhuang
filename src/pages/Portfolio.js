import React from "react";
import { Switch, Route, Link } from 'react-router-dom'

const portfolioAPI = {
  tasks: [
    {
      url: "shopee-accelerated-mobile-page",
      name: "Shopee Accelerated Mobile Page",
      category: "Redesigning Shopee mobile page for AMP",
      image: "static/images/portfolio/shopee-amp-product-detail-page.jpg",
      state: true
    },
    {
      url: "design-language-system",
      name: "Design Language System",
      category: "A set of rules and guidelines help work efficiency",
      image: "static/images/portfolio/design-language-system-cover.jpg",
      state: true
    },
    {
      url: "google-design-exercise-pet-adoption",
      name: "Pet Adoption",
      category: "Google design exercise",
      image: "static/images/portfolio/pet-adoption-cover.png",
      state: "hide"
    },
    {
      url: "shopee-microsite",
      name: "Shopee microsite",
      category: "A content management system help on E-commerce",
      image: "static/images/portfolio/design-language-system-cover.jpg",
      state: "hide"
    },
    {
      url: "prescription-helper",
      name: "Prescription Helper",
      category: "A simple Medical App for get drugs of prescription",
      image: "static/images/portfolio/prescription-helper-cover.jpg",
      state: true
    },
    {
      url: "line-flash-sale",
      name: "LINE Flash Sale",
      category: "Coming soon",
      image: "static/images/portfolio/line-flash-sale-cover.png",
      state: false
    },
    {
      url: "lost-device-protection",
      name: "Lost Device Protection",
      category: "Trend Micro",
      image: "static/images/portfolio/lost-device-protection-cover.jpg",
      state: true
    },
    {
      url: "jewelry-box",
      name: "Jewelry-box",
      category: "Coming soon",
      image: "static/images/portfolio/jewelry-box-cover.jpg",
      state: false
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
              <Link to="/portfolio" className="btn btn-light float-right">
                See more portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export const ShowAll = () => (
  <section id="portfolio">
    <div className="container">
      <div className="row">
        {
          portfolioAPI.preview().map(task => {
            if (task.state === true) {
              return (
                <div className="col-md-6" key={task.url}>
                  <Link to={`/portfolio/${task.url}`} className="card">
                    <img src={task.image} className="card-img-top" alt={task.name} />
                    <div className="card-body">
                      <h3 className="card-title">{task.name}</h3>
                      <p>{task.category}</p>
                    </div>
                  </Link>
                </div>
              )
            } else if(task.state === false){
              return (
                <div className="col-md-6" key={task.url}>
                  <div className="card coming">
                    <img src={task.image} className="card-img-top" alt={task.name} />
                    <div className="card-body">
                      <h3 className="card-title">{task.name}</h3>
                      <p>{task.category}</p>
                    </div>
                  </div>
                </div>
              )
            }else{
              
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
    document.title = item.name;
  }
  componentWillUnmount() {
    document.title = "Portfolio - Ken Huang";
  }
  render() {
    const item = portfolioAPI.get(this.props.match.params.url);
    //console.log(item);
    if (item) {
      var { Content } = require('./portfolio/' + item.url);
      return (
        <div>
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
    if (!document.title) {
      document.title = "Portfolio - Ken Huang";
    }
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