import React from 'react';
import PropTypes from 'prop-types';

import { motion, AnimatePresence } from 'framer-motion';

import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedbacks, closeHandler }) => {
	if (!feedbacks || feedbacks.length === 0) {
		return <p>No feedbacks yet.</p>;
	}

	const feedbackList = feedbacks.map((feedback) => (
		<motion.div
			key={feedback.id}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<FeedbackItem
				key={feedback.id}
				id={feedback.id}
				rating={feedback.rating}
				text={feedback.text}
				closeHandler={closeHandler}
			/>
		</motion.div>
	));
	return (
		<div className='feedback-list'>
			<AnimatePresence>{feedbackList}</AnimatePresence>
		</div>
	);
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
