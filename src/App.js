import React, { Fragment } from 'react';
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';

const App = ({ name }) => {
	const title = name;

	return (
		<Fragment>
			<Header />
			<div className='container'>
				<FeedbackItem />
			</div>
		</Fragment>
	);
};

export default App;
