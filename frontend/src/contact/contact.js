import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './contact.css';

// const reCaptchaRef = React.createRef();

class Contact extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			body: '',
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
		alert(this.state.email + ' // ' + this.state.body);
		this.captcha.reset();
	}

	render() {
		return (
			<div className="contact">
				<h1 className="contact__title">Contact Me</h1>
				<p className="contact__description">
					You can send me a message and I will email you back as soon as I see it.
				</p>
				<form className="contact--form" onSubmit={(e) => e.preventDefault()}>
					<ReCAPTCHA
						ref={el => this.captcha = el}
						size="invisible"
						sitekey="6Ld-6bUUAAAAAJCpJfWtHjAxVgXe3PcxbfTuvSxo"
						onChange={(token) => this.handleSubmit(token)}
					/>
					<label>
						Email:
						<input	className="contact--form__email" 
										type="text" value={this.state.email} 
										onChange={(e) => this.handleChange(e, 'email')} 
										placeholder="user@mail.com" />
					</label>

					<label>
						Message Body:
						<textarea	className="contact--form__body" 
											value={this.state.body} 
											placeholder="type your message here"
											onChange={(e) => this.handleChange(e, 'body')} />
					</label>

					<button className="contact--form__submit" onClick={() => this.captcha.execute()}>Submit</button>
				</form>
			</div>
		);
	}
}

export default Contact;
