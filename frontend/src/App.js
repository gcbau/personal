import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import About from './about/about';
import Contact from './contact/contact';
import Landing from './landing/landing';
import NotFound from './not-found/not-found';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <nav>
            <Link to="/" component={Landing}>Home</Link>
            <Link to="/about" component={About}>About</Link>
            <Link to="/contact" component={Contact}>Contact</Link>
          </nav>
        </header>
        <main className="app-main">
          <Switch>
            <Route exact path="/" component={Landing}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </main>
        <footer className="app-footer">
          <div className="app-footer-item">
            <a href="/contact">Contact</a>
          </div>
          <div className="app-footer-item">
            <a className="app-footer-social-item" href="https://m.me/GaelCalmaBau"><i class="fab fa-facebook-messenger"></i></a>
            <a className="app-footer-social-item" href="https://www.linkedin.com/in/gael-bau-97a2b6bb/"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <div className="app-footer-item">copyright by me 2019.</div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
