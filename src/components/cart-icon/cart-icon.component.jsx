import React from "react";
import "./cart-icon.styles.css";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { ToggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
const CartIcon = ({ ToggleCartHidden, itemCount }) => {
	return (
		<div className="cart-icon" onClick={ToggleCartHidden}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{itemCount}</span>
		</div>
	);
};

const mapStateToProps = (state) => ({
	itemCount: selectCartItemsCount(state),
});
const mapDispatchToProps = (dispatch) => ({
	ToggleCartHidden: () => dispatch(ToggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
