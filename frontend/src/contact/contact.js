import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './contact.css';
import Axios from 'axios';

const api = Axios.create({
	baseURL: 'http://localhost:3001/',
	responseType: 'json'
});

// const reCaptchaRef = React.createRef();

class Contact extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			subject: '',
			body: '',
			isDisabled: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		window.scrollTo(0,0);
	}

	handleChange(event, inputType) {
		this.setState({
			[inputType]: event.target.value
		});
	}

	handleSubmit(token) {
		if (!this.state.name || this.state.name.trim() === '') return;
		if (!this.state.email || this.state.email.trim() === '') return;
		if (!this.state.subject || this.state.subject.trim() === '') return;
		if (!this.state.body || this.state.body.trim() === '') return;

		this.setState({
			isDisabled: !this.state.isDisabled
		})
		
		api.post('/mail', this.state).then((data) => {
			alert('Your message has been sent!');
			this.captcha.reset();
			this.setState({
				name: '',
				email: '',
				subject: '',
				body: '',
				isDisabled: !this.state.isDisabled
			})
		}).catch((err) => {
			console.log(err);
			this.captcha.reset();
			this.setState({
				isDisabled: !this.state.isDisabled
			})
		});
	}

	render() {
		return (
			<div className="contact">
				<h1 className="contact__title">Contact Me</h1>
				<p className="contact__description">
					You can send me a message and I will email you back as soon as I see it.
				</p>
				<form	className="contact--form" 
							onSubmit={(e) => e.preventDefault()}>
					<ReCAPTCHA
						ref={el => this.captcha = el}
						size="invisible"
						sitekey="6Ld-6bUUAAAAAJCpJfWtHjAxVgXe3PcxbfTuvSxo"
						onChange={(token) => this.handleSubmit(token)}
					/>
					<label>
						Name:
						<input	className="contact--form__name"
										type="text" 
										name="name"
										value={this.state.name}
										onChange={(e) => this.handleChange(e, 'name')}
										required/>
					</label>

					<label>
						Email:
						<input	className="contact--form__email" 
										type="email" 
										name="email"
										value={this.state.email} 
										onChange={(e) => this.handleChange(e, 'email')} 
										required/>
					</label>

					<label>
						Subject:
						<input	className="contact--form__subject" 
										type="text" 
										name="subject"
										value={this.state.subject} 
										onChange={(e) => this.handleChange(e, 'subject')} 
										required/>
					</label>

					<label>
						Message Body:
						<textarea	className="contact--form__body" 
											name="body"
											value={this.state.body} 
											placeholder="type your message here"
											onChange={(e) => this.handleChange(e, 'body')} 
											required/>
					</label>

					<button	className="contact--form__submit" 
									onClick={() => this.captcha.execute()}
									disabled={this.state.isDisabled}>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default Contact;
