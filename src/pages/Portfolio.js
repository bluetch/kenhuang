import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import { portfolioData } from '../json/constants';

const lists = [];

portfolioData.map((item) => {
  lists.push(item.url);
})

const Index = (props) => {
  return (
    <div className="portfolio-page">
      <div className="container">
        <h1>Portfolio</h1>
        <div className="grid">
          {
            portfolioData.map((item, key) => {
              return (
                <a href={`/portfolio/` + item.url} key={key} className="card">
                  <img src={`/images/portfolio/` + item.image} alt="" />
                  <p className="name">{item.name} <span className="date">({item.date})</span></p>
                  <p className="desc">{item.desc}</p>
                </a>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

const Item = (props) => {
  const match = useRouteMatch('/portfolio/:pid');
  if (lists.indexOf(match.params.pid) > -1) {
    var { Content } = require('./portfolio/' + match.params.pid);
    return <Content />;
  } else {
    return <Redirect to="/404" />
  }

}

const Portfolio = (props) => {
  document.title = "Portfolio | Ken Huang";
  return (
    <Switch>
      <Route exact path='/portfolio' component={Index} />
      <Route path='/portfolio/:pid' component={Item} />
    </Switch>
  )
}

export default Portfolio;