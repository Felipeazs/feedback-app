import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext({
	feedbacks: [],
	editedFeedback: {},
	isLoading: Boolean,
	deleteFeedback: (feedbackId) => {},
	addFeedback: (newFeedback) => {},
	updateFeedback: (feedback) => {},
	editFeedback: (feedback) => {},
});

export const FeedbackProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [feedbacks, setFeedbacks] = useState([]);
	const [editedFeedback, setEditedFeedback] = useState({ item: {}, edit: false });

	useEffect(() => {
		fetchFeedbacks();
	}, []);

	const fetchFeedbacks = async () => {
		const response = await fetch('http://localhost:5002/feedback?_sort=id&order=desc');

		if (!response.ok) {
			setIsLoading(false);
			throw new Error('Could not connect to the database');
		}

		const data = await response.json();
		setIsLoading(false);
		setFeedbacks(data);
	};

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
				isLoading,
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
