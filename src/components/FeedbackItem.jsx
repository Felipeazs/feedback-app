import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

import Card from './shared/Card';

const FeedbackItem = ({ id, rating, text, closeHandler }) => {
	return (
		<Card>
			<div className='num-display'>{rating}</div>
			<button
				className='close'
				onClick={() => closeHandler(id)}
			>
				<FaTimes color='purple' />
			</button>
			<div className='text-display'>{text}</div>
		</Card>
	);
};

FeedbackItem.propTypes = {
	rating: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
};

export default FeedbackItem;
