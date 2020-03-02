import React from 'react';
import PropTypes from 'prop-types';


function Content({ children }) {
	return (
		<div className='content'>
			{ children }
		</div>
	);
}

Content.propTypes = {
	children: PropTypes.func
};

export default Content;