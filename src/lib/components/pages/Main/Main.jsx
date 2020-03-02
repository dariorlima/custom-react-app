import React from 'react';

import Page from '@templates/Page';
import Container from '@organisms/Container';
import Button from '@atoms/Button';
import Text from '@atoms/Text';


function Main() {
	return (
		<Page>
			<div className='main'>
				<Container>
					<Text>
						Example Code 
					</Text>
					<Button 
						text='Github'
						link='https://github.com/dariorlima/custom-react-app.git'
					/>
				</Container>
			</div>
		</Page>

	);
}

export default Main;
