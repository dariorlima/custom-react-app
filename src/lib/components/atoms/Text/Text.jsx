import React from 'react';
import PropTypes from 'prop-types';

function Text({ children }) {
	return (
		<p className="text">
			{ children }
		</p>
	);
}

Text.propTypes = {
	children: PropTypes.func
};

export default Text;
