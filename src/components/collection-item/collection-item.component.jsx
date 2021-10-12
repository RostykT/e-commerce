import "./collection-item.style.css";
import React from "react";
import CustomButton from "../button/custom-buttom.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";

const CollectioItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>

			<div className="collection-footer">
				<p className="name">{name}</p>
				<p className="price">{price}$</p>
			</div>
			<CustomButton onClick={() => addItem(item)} inverted>
				Add to Cart
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectioItem);
