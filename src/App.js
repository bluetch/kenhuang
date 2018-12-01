import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './modules/Header';
import Footer from './modules/Footer';
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
//import NoMatch from './pages/NoMatch'
import './scss/App.scss';
import { Helmet } from "react-helmet";
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-MWXSCRM'
}

TagManager.initialize(tagManagerArgs);

class Application extends React.Component {
  constructor(props){
    super(props);
    this.title = "Ken Huang | Interaction Designer & Front End Developer";
    this.desc = "UI/UX Designer and Front End Developer with a passion for designing beautiful and functional user experiences.";
    this.url = "http://kenhuang.tw";
    this.imageURL = "https://kenhuang.tw/images/cover.png";
  }
  render() {
    return (
      <div className="application">
        <Helmet
          title={this.title}
          titleAttribute={{ itemprop: "name", lang: "en" }}
          meta={[
            { name: "author", content: "Ken Huang" },
            { name: "description", content: this.desc },
            { name: "robots", content: "index, follow" },
            { property: "og:title", content: this.title },
            { property: "og:site_name", content: this.title },
            { property: "og:type", content: "website" },
            { property: "og:url", content: this.url },
            { property: "og:image", content: this.imageURL },
            { property: "og:description", content: this.desc },
          ]}
          link={[
            { rel: "canonical", href: this.url },
          ]}
          script={[{
            type: "application/ld+json",
            innerHTML: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Event",
              "name": this.title,
              "description": this.desc,
              "image": this.imageURL,
              "url": this.url,
            })
          }]}
        />
      </div>
    );
  }
};

const App = () => (
  <div className="app">
    <Application />
    <Header />
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/resume' component={Resume} />
        <Route path='/kenhuang' component={Home} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </main>
    <Footer />
  </div>
)

export default App;