import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import FeedbackData from '../../data/FeedbackData';

const FeedbackContext = createContext({
	feedbacks: [],
	deleteFeedback: (feedbackId) => {},
	addFeedback: (newFeedback) => {},
});

export const FeedbackProvider = ({ children }) => {
	const [feedbacks, setFeedbacks] = useState(FeedbackData);

	const deleteFeedback = (feedbackId) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedbacks(feedbacks.filter((el) => el.id !== feedbackId));
		}
	};

	const addFeedback = (newFeedback) => {
		newFeedback = { ...newFeedback, id: uuidv4() };
		setFeedbacks((prevState) => [newFeedback, ...prevState]);
	};

	return (
		<FeedbackContext.Provider value={{ feedbacks, deleteFeedback, addFeedback }}>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
