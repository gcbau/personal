import React from 'react';
import './landing.css';
import { Link } from 'react-router-dom';
import Resume from '../assets/documents/gaelbau_resume.pdf';
import About from '../about/about';

function Landing() {
	window.scrollTo(0,0);

	const aboutRef = React.useRef();
	const scrollToSection = (ref) => {
		ref.current.scrollIntoView();
	}

	return (
		<div className="landing">

			<div className="landing--section">
				<h1 className="landing--section__title">
					Hi! <br/>I'm a recent Software Engineer grad.
				</h1>
				<div className="landing--section--container">
					<a	className="landing--section--container__item" 
							href={Resume} 
							target="_blank" 
							rel="noopener noreferrer">
						View my Resume
					</a>
					{/* <Link	className="landing--section--container__item"
								to="/contact">
						Contact
					</Link> */}
				</div>
				<button className="next-section__btn" onClick={() => scrollToSection(aboutRef)}>
					<i className="fas fa-angle-double-down"></i>
				</button>
			</div>
			<div ref={aboutRef} className="landing--section">
				<About />
			</div>
		</div>
	);
}

export default Landing;
