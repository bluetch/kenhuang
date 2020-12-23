
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Illustrations from './pages/Illustrations';
import Ukulele from './pages/Ukulele';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';
import './scss/app.scss';


function App() {
  document.title = "Ken Huang";
  return (
    <div className="app bootstrap-wrapper">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/illustrations' component={Illustrations} />
          <Route path='/ukulele' component={Ukulele} />
          <Route path='/contact' component={Contact} />
          <Route path="*" component={NoMatch} />
          <Route path="/404" component={NoMatch} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
