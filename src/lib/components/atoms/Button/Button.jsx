import React from 'react';
import PropTypes from 'prop-types';

function Button({ text, link}) {
	return (
		<a 
			className="btn"
			href={ link }
		> 
			{ text }
		</a>
	);
}

Button.propTypes = {
	text: PropTypes.string,
	link: PropTypes.string
};

export default Button;