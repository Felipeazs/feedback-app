import React from 'react';
import PropTypes from 'prop-types';

import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedbacks, closeHandler }) => {
	if (!feedbacks || feedbacks.length === 0) {
		return <p>No feedbacks yet.</p>;
	}

	const feedbackList = feedbacks.map((feedback) => (
		<FeedbackItem
			key={feedback.id}
			id={feedback.id}
			rating={feedback.rating}
			text={feedback.text}
			closeHandler={closeHandler}
		/>
	));
	return <div className='feedback-list'>{feedbackList}</div>;
};

FeedbackList.propTypes = {
	feedbacks: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			rating: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
		}),
	).isRequired,
};

export default FeedbackList;
