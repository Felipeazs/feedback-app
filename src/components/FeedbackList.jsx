import React from 'react';
import PropTypes from 'prop-types';

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

FeedbackList.propTypes = {
	feedbacks: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			rating: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
		}),
	).isRequired,
};

export default FeedbackList;
