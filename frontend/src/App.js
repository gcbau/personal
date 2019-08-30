import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import About from './about/about';
import Contact from './contact/contact';
import Landing from './landing/landing';
import NotFound from './not-found/not-found';

const linkedInUrl = "https://www.linkedin.com/in/gael-bau-97a2b6bb/";
const messengerUrl = "https://m.me/GaelCalmaBau";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavCollapsed: false,
      socialUrl: "",
    }
    this.timeOutId = null;

    this.collapseNav = this.collapseNav.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
    this.onHoverHandlerSocial = this.onHoverHandlerSocial.bind(this);
  }

  collapseNav() {
    this.setState({
      isNavCollapsed: !this.state.isNavCollapsed
    });
  }

  onBlurHandler() {
    this.timeOutId = setTimeout(() => {
      this.setState({
        isNavCollapsed: false
      });
    });
  }

  onFocusHandler() {
    clearTimeout(this.timeOutId);
  }

	onHoverHandlerSocial(url) {
		this.setState({
      socialUrl: url
    });
	}

  render() {
    const navCollapsed = this.state.isNavCollapsed ? "nav--collapsed" : "nav";

    return (
      <Router>
        <div className="app">
          <header className="app-header" 
            onBlur={this.onBlurHandler}
            onFocus={this.onFocusHandler}>
            
            <div className="app-header__name">Welcome to my Website!</div>
            <button className="nav--toggle" onClick={this.collapseNav}>
              <i className="fas fa-bars"></i>
            </button>
            <nav className={navCollapsed}>
              <Link className="nav__item" to="/" onClick={this.onBlurHandler}>Home</Link>
              <Link className="nav__item" to="/about" onClick={this.onBlurHandler}>About</Link>
              <Link className="nav__item" to="/contact" onClick={this.onBlurHandler}>Contact</Link>
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
              <a  className="app-footer-social-item" 
                  href={messengerUrl}
                  onMouseEnter={() => this.onHoverHandlerSocial(messengerUrl)}>
                <i className="fab fa-facebook-messenger"></i>
              </a>
              <a  className="app-footer-social-item" 
                  href={linkedInUrl}
                  onMouseEnter={() => this.onHoverHandlerSocial(linkedInUrl)}>
                <i className="fab fa-linkedin-in"></i>
              </a>
              <div className="app-footer-social-item-display">{this.state.socialUrl}</div>
            </div>
            <div className="app-footer-item">
              <small>&copy; Copyright 2019</small>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
