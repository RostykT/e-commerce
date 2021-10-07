import "./header.style.css";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import Cart from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden }) => {
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
				{currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className="option" to="/signin">
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
			{hidden ? null : <Cart />}
		</div>
	);
};
// this state is a root reducer, top level root reducer
//user is from combined reducer!!!!
//now we can remove passing currentUser from App.js which pass as props into header
//this mapStateToProps we will use anywhere, where we need props from reducer

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden,
});
export default connect(mapStateToProps)(Header);
