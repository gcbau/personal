import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const linkedInUrl = "https://www.linkedin.com/in/gael-bau-97a2b6bb/";
const messengerUrl = "https://www.facebook.com/GaelCalmaBau";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { socialUrl: "" };
    this.onHoverHandlerSocial = this.onHoverHandlerSocial.bind(this);
  }

  onHoverHandlerSocial(url) {
		this.setState({
      socialUrl: url
    });
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer--item">
          <Link to="/contact">Contact Me</Link>
        </div>
        <div className="footer--item">
          <a  className="footer--item--social" 
              href={messengerUrl}
              onMouseEnter={() => this.onHoverHandlerSocial(messengerUrl)}>
            <i className="fab fa-facebook-square"></i>
          </a>
          <a  className="footer--item--social" 
              href={linkedInUrl}
              onMouseEnter={() => this.onHoverHandlerSocial(linkedInUrl)}>
            <i className="fab fa-linkedin-in"></i>
          </a>
          <div className="footer--item--social__display">{this.state.socialUrl}</div>
        </div>
        <div className="footer--item">
          <small>&copy; Copyright 2019</small>
        </div>
      </footer> 
    );
  }
}

export default Footer;
