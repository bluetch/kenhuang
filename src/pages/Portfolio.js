import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const portfolioAPI = {
  tasks: [
    {
      url: "shopee-accelerated-mobile-page",
      name: "Shopee Accelerated Mobile Page",
      desc: "Redesigning Shopee mobile page for AMP",
      image: "static/images/portfolio/shopee-amp-product-detail-page.jpg",
      state: true
    },
    {
      url: "design-language-system",
      name: "Design Language System",
      desc: "A set of rules and guidelines help work efficiency",
      image: "static/images/portfolio/design-language-system-cover.jpg",
      state: true
    },
    {
      url: "google-design-exercise-pet-adoption",
      name: "Pet Adoption",
      desc: "Google design exercise",
      image: "static/images/portfolio/pet-adoption-cover.png",
      state: "hide"
    },
    {
      url: "prescription-helper",
      name: "Prescription Helper",
      desc: "A simple Medical App for get drugs of prescription",
      image: "static/images/portfolio/prescription-helper-cover.jpg",
      state: true
    },
    {
      url: "line-flash-sale",
      name: "LINE Flash Sale",
      desc: "Coming soon",
      image: "static/images/portfolio/line-flash-sale-cover.png",
      state: false
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
      name: "Jewelry Box",
      desc: "Coming soon",
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
                      <p>{task.desc}</p>
                    </div>
                  </Link>
                </div>
              )
            } else if (task.state === false) {
              return (
                <div className="col-md-6" key={task.url}>
                  <div className="card coming">
                    <img src={task.image} className="card-img-top" alt={task.name} />
                    <div className="card-body">
                      <h3 className="card-title">{task.name}</h3>
                      <p>{task.desc}</p>
                    </div>
                  </div>
                </div>
              )
            } else {

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
          <Helmet
            title={item.name}
            meta={[
              { name: "description", content: item.desc },
              { property: "og:title", content: item.title },
              { property: "og:site_name", content: "Ken Huang" },
              { property: "og:url", content: item.url },
              { property: "og:image", content: item.image },
              { property: "og:description", content: item.desc },
            ]}
          />
          <Content />
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