import React, { Fragment, useState } from 'react';

import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';

const App = ({ name }) => {
	const [feedbacks, setFeedbacks] = useState(FeedbackData);
	const title = name;

	const deleteItem = (itemId) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedbacks(feedbacks.filter((el) => el.id !== itemId));
		}
	};

	return (
		<Fragment>
			<Header text={title} />
			<div className='container'>
				<FeedbackList
					feedbacks={feedbacks}
					closeHandler={deleteItem}
				/>
			</div>
		</Fragment>
	);
};

export default App;
