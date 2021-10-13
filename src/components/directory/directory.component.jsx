import "./directory.style.css";
import React from "react";
import MenuItem from "../menu-items/menu-items.component";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectDirectorySection } from "../../redux/directory/directory.select";

const Directory = ({ sections }) => {
	return (
		<div>
			<div className="directory-menu">
				{sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
