import React, { Fragment } from 'react';
import Header from './components/Header';

const App = ({ name }) => {
	const title = name;

	return (
		<Fragment>
			<Header />
			<div className='container'>
				<h1>{title}</h1>
			</div>
		</Fragment>
	);
};

export default App;
