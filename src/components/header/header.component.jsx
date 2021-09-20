import "./header.style.css";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/crown.svg";

const Header = () => {
	return (
		<div className="header">
			<Link className="logo-containe" to="/">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/contact">
					CONTACT
				</Link>
				<Link className="option" to="/register">
					SIGN IN
				</Link>
			</div>
		</div>
	);
};

export default Header;
