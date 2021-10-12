import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.style.css";
import RegisterButtom from "../button/buttom-register";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
export class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}
	handleSubmit = async (event) => {
		event.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: "", password: "" });
		} catch (error) {
			console.error("something went wrong");
		}
	};
	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};
	render() {
		return (
			<div className="sign-in">
				<h2> I alreade have an account</h2>
				<span> Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={this.state.email}
						handleChange={this.handleChange}
						label="email"
						required
					/>

					<FormInput
						name="password"
						type="password"
						value={this.state.password}
						label="password"
						handleChange={this.handleChange}
						required
					/>
					<div className="buttons">
						<RegisterButtom type="submit"> SIGN IN</RegisterButtom>
						<RegisterButtom
							type="button"
							onClick={signInWithGoogle}
							isGoogleSignIn
						>
							Sign in with Google
						</RegisterButtom>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
