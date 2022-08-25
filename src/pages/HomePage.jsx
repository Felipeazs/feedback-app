import React, { Fragment, useState } from 'react';

import FeedbackList from '../components/FeedbackList';
import FeedbackData from '../data/FeedbackData';
import FeedbackStats from '../components/FeedbackStats';
import FeedbackForm from '../components/FeedbackForm';

const HomePage = () => {
	const [feedbacks, setFeedbacks] = useState(FeedbackData);

	const deleteItem = (itemId) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedbacks(feedbacks.filter((el) => el.id !== itemId));
		}
	};

	const addItem = (newFeedback) => {
		console.log(newFeedback);
		setFeedbacks((prevState) => [newFeedback, ...prevState]);
	};
	return (
		<Fragment>
			<FeedbackForm addFeedback={addItem} />
			<FeedbackStats feedbacks={feedbacks} />
			<FeedbackList
				feedbacks={feedbacks}
				closeHandler={deleteItem}
			/>
		</Fragment>
	);
};

export default HomePage;
