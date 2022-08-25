import React from 'react';

import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedbacks }) => {
	if (!feedbacks || feedbacks.length === 0) {
		return <p>No feedbacks yet.</p>;
	}
	const feedbackList = feedbacks.map((feedback) => (
		<FeedbackItem
			key={feedback.id}
			rating={feedback.rating}
			text={feedback.text}
		/>
	));
	return <div className='feedback-list'>{feedbackList}</div>;
};

export default FeedbackList;
