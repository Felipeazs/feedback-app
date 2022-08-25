import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { FaTimes, FaEdit } from 'react-icons/fa';

import FeedbackContext from './context/feedback-context';
import Card from './shared/Card';

const FeedbackItem = ({ id, rating, text }) => {
	const { deleteFeedback, updateFeedback } = useContext(FeedbackContext);

	const deleteHandler = () => {
		deleteFeedback(id);
	};
	const updateHandler = () => {
		const editedFeedback = {
			id,
			rating,
			text,
		};

		updateFeedback(editedFeedback);
	};
	return (
		<Card>
			<div className='num-display'>{rating}</div>
			<button
				className='close'
				onClick={deleteHandler}
			>
				<FaTimes color='purple' />
			</button>
			<button
				className='edit'
				onClick={updateHandler}
			>
				<FaEdit color='purple' />
			</button>
			<div className='text-display'>{text}</div>
		</Card>
	);
};

FeedbackItem.propTypes = {
	id: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
};

export default FeedbackItem;
