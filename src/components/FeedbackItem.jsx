import React from 'react';

const FeedbackItem = ({ rating, text }) => {
	return (
		<div className='card'>
			<div className='num-display'>{rating}</div>
			<div className='text-display'>{text}</div>
		</div>
	);
};

export default FeedbackItem;