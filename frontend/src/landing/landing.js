import React from 'react';
import './landing.css';
import { Link } from 'react-router-dom';
import Resume from '../assets/documents/gaelbau_resume.pdf';

class Landing extends React.Component {
	render() {
		return (
			<div className="landing">
				<div className="landing--title">
					Ahoy Matey
				</div>
				<div className="landing--content">
					<div className="landing--content__item"><a href={Resume} target="_blank">Resume</a></div>
					<div className="landing--content__item"><Link to="/contact">Contact</Link></div>
				</div>
			</div>
		)
	}
}

export default Landing;
