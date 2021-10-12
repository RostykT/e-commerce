import React from "react";

import "./buttom-register.style.css";

const RegisterButtom = ({
	children,
	isGoogleSignIn,

	...otherProps
}) => (
	<button
		className={` ${isGoogleSignIn ? "google-sign-in" : ""} register-button`}
		{...otherProps}
	>
		{children}
	</button>
);

export default RegisterButtom;
