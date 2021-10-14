import React from "react";
import { connect } from "react-redux";

import "./collection-overview.style.css";
import PreviewCollection from "../preview-collection/preview-collection.component";

import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selector";

const CollectionOverview = ({ collections }) => {
	return (
		<div className="collection-overwiew">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<PreviewCollection key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectShopCollections,
});
export default connect(mapStateToProps)(CollectionOverview);
