import "./registration.style.css";
import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const Register = () => {
	return (
		<div className="register">
			<SignIn />
			<SignUp />
		</div>
	);
};

export default Register;
