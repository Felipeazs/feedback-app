import React from 'react';
import PropTypes from 'prop-types';

const FeedbackStats = ({ feedbacks }) => {
	let average =
		feedbacks.reduce((acc, curr) => {
			return acc + curr.rating;
		}, 0) / feedbacks.length;

	average = average.toFixed(1).replace(/[,.]0$/, ''); // fixed to 1 decimal or nothing if its a 0

	return (
		<div className='feedback-stats'>
			<h4>{feedbacks.length} Reviews</h4>
			<h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
		</div>
	);
};

FeedbackStats.propTypes = {
	feedbacks: PropTypes.array.isRequired,
};

export default FeedbackStats;