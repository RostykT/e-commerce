import React from "react";
import { connect } from "react-redux";

import CustomButton from "../button/custom-buttom.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { ToggleCartHidden } from "../../redux/cart/cart.action";

import "./cart-dropdown.style.css";

const CartDropdown = ({ cartItems, history, dispatch }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.length ? (
				cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			) : (
				<span className="empy-cart">Your cart is empty</span>
			)}
		</div>

		<CustomButton
			onClick={() => {
				history.push("/checkout");
				dispatch(ToggleCartHidden());
			}}
		>
			GO TO CHECKOUT
		</CustomButton>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});
const mapDispatchToProps = (dispatch) => ({
	ToggleCartHidden: () => dispatch(ToggleCartHidden()),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
