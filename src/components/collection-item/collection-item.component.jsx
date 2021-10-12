import "./collection-item.style.css";
import React from "react";
import CustomButton from "../button/custom-buttom.component";
import { connect } from "react-redux";
import { AddItem } from "../../redux/cart/cart.action";

const CollectioItem = ({ item, AddItem }) => {
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
			<CustomButton onClick={() => AddItem(item)} inverted>
				Add to Cart
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	AddItem: (item) => dispatch(AddItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectioItem);
