import "./cart-dropdown.style.css";
import CustomButton from "../button/custom-buttom.component";
import React from "react";

const Cart = () => (
	<div className="cart-dropdown">
		<div className="cart-items">
			<CustomButton> GO TO CHECKOUT</CustomButton>
		</div>
	</div>
);

export default Cart;
