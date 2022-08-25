import React, { useContext } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import Spinner from './shared/Spinner';
import FeedbackContext from './context/feedback-context';
import FeedbackItem from './FeedbackItem';

const FeedbackList = () => {
	const { feedbacks, isLoading } = useContext(FeedbackContext);

	if (!isLoading && (!feedbacks || feedbacks.length === 0)) {
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
			{isLoading && <Spinner />}
			{!isLoading && <AnimatePresence>{feedbackList}</AnimatePresence>}
		</div>
	);
};

export default FeedbackList;
