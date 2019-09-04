import React from 'react';
import Gael from '../assets/images/square-gael.png';
import './about.css';

function About() {
	return (
		<div className="about">
			<div className="about--header">
				<h1 className="about--header__title">About Me</h1>
				<img className="about--header__img" src={Gael}></img>
			</div>
			<ul className="about--content">
				<li className="about--content__item">
					My name is Gael Bau and I'm a recent Software Engineer graduate.
				</li>
				<li className="about--content__item">
					I studied Computer Science at UC Irvine for B.S. degree.
				</li>
				<li className="about--content__item">
					I am seeking to expand technical knowledge and meet great people along the way. 
				</li>
				<li className="about--content__item">
					I have front end experience in Angular and some exposure to React.
				</li>
				<li className="about--content__item">
					I have back end experience in SQL (MySQL, PostGreSQL, MS SQL Server), 
					noSQL (MongoDB), and NodeJS/ExpressJs.
				</li>
				<li className="about--content__item">
					I have experience in using third-party APIs (Shopify, Ebay, Stripe)
					to add functionality to an existing application.
				</li>
			</ul>
		</div>
	);
}

export default About;
