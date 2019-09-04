import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      isNavCollapsed: false,
      active: 'home',
    };
    this.timeOutId = null;
    this.collapseNav = this.collapseNav.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
  }

  collapseNav() {
    this.setState({
      isNavCollapsed: !this.state.isNavCollapsed
    });
  }

  onBlurHandler(active) {
    this.timeOutId = setTimeout(() => {
      this.setState({
        isNavCollapsed: false,
        active: active,
      });
    });
  }

  onFocusHandler() {
    clearTimeout(this.timeOutId);
  }

  render() {
    const navCollapsed = this.state.isNavCollapsed ? 'nav--collapsed' : 'nav';

    return (
      <header className="header" 
              onBlur={this.onBlurHandler}
              onFocus={this.onFocusHandler}>
          
          <button className="nav--toggle" onClick={this.collapseNav}><i className="fas fa-bars"></i></button>
          <nav className={navCollapsed}>
            <Link to="/" 
                  className={"nav__item " + (this.state.active == 'home' ? 'active' : '')} 
                  onClick={() => this.onBlurHandler('home')}>
              Home
            </Link>
            <Link to="/contact"
                  className={"nav__item " + (this.state.active == 'contact' ? 'active' : '')}  
                  onClick={() => this.onBlurHandler('contact')}>
              Contact
            </Link>
          </nav>
      </header>
    );
  }
}

export default Header;
