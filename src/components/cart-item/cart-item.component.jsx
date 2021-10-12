import React from "react";

import "./cart-item.style.css";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	<div className="cart-item">
		<img src={imageUrl} alt="item" />
		<div className="item-details">
			<span className="name">{name}</span>
			<div className="details-wrapper">
				<span className="price">
					{quantity} x ${price}
				</span>
			</div>
		</div>
	</div>
);

export default CartItem;
