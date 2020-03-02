import React from 'react';
import PropTypes from 'prop-types';

import Content from '@molecules/Content';


function Container({ children }) {
	return (
		<div className='container'>
			<Content>
				{ children }
			</Content>
		</div>
	);
}

Container.propTypes = {
	children: PropTypes.func
};

export default Container;