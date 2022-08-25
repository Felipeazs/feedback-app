import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import FeedbackData from '../../data/FeedbackData';

const FeedbackContext = createContext({
	feedbacks: [],
	editedFeedback: {},
	deleteFeedback: (feedbackId) => {},
	addFeedback: (newFeedback) => {},
	updateFeedback: (feedback) => {},
	editFeedback: (feedback) => {},
});

export const FeedbackProvider = ({ children }) => {
	const [feedbacks, setFeedbacks] = useState(FeedbackData);
	const [editedFeedback, setEditedFeedback] = useState({ item: {}, edit: false });

	const deleteFeedback = (feedbackId) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedbacks(feedbacks.filter((el) => el.id !== feedbackId));
		}
	};

	const addFeedback = (newFeedback) => {
		newFeedback = { ...newFeedback, id: uuidv4() };
		setFeedbacks((prevState) => [newFeedback, ...prevState]);
	};

	const editFeedback = (feedback) => {
		setEditedFeedback({
			item: feedback,
			edit: true,
		});
	};

	const updateFeedback = (updatedFeedback) => {
		setFeedbacks(
			feedbacks.map((item) =>
				item.id === updatedFeedback.id ? { ...item, ...updatedFeedback } : item,
			),
		);
	};

	return (
		<FeedbackContext.Provider
			value={{
				feedbacks,
				editedFeedback,
				deleteFeedback,
				addFeedback,
				editFeedback,
				updateFeedback,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
