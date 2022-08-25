import React, { useContext } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import FeedbackContext from './context/feedback-context';
import FeedbackItem from './FeedbackItem';

const FeedbackList = () => {
	const { feedbacks } = useContext(FeedbackContext);

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
			/>
		</motion.div>
	));
	return (
		<div className='feedback-list'>
			<AnimatePresence>{feedbackList}</AnimatePresence>
		</div>
	);
};

export default FeedbackList;
