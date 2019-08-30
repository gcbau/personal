import React from 'react';
import './about.css';
import Kona from '../assets/images/dog-kona.jpeg';

class About extends React.Component {
	render() {
		return (
			<div className="about">
				<div className="about--section">
					<div className="about--section__title">
						<img className="about--section__img" src={Kona}></img>
						Who am I
					</div>
					<div className="about--section__content">
						Hi! I'm a software engineer that just graduated this year! 
						I studied Computer Science at UC Irvine for my B.S. degree.
						I like my dog Kona very much! She is a good girl and loves to eat literally anything.
					</div>
				</div>
				<div className="about--section">
					<div className="about--section__title">
						Me porfolio!
					</div>
					<div className="about--section__content">
						Haha this is a work in progress :))
					</div>
				</div>
			</div>
		)
	}
}

export default About;
