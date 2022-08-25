import React, { Fragment, useState } from 'react';

import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';

const App = ({ name }) => {
	const [feedbacks, setfeedbacks] = useState(FeedbackData);
	const title = name;

	return (
		<Fragment>
			<Header text={title} />
			<div className='container'>
				<FeedbackList feedbacks={feedbacks} />
			</div>
		</Fragment>
	);
};

export default App;
