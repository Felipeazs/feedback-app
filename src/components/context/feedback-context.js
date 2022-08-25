import { createContext, useEffect, useState } from 'react';

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
		const response = await fetch('/feedback?_sort=id&_order=desc');

		if (!response.ok) {
			setIsLoading(false);
			throw new Error('Could not connect to the database');
		}

		const data = await response.json();
		setIsLoading(false);
		setFeedbacks(data);
	};

	const deleteFeedback = async (feedbackId) => {
		if (window.confirm('Are you sure you want to delete?')) {
			const response = await fetch(`/feedback/${feedbackId}`, {
				method: 'DELETE',
			});

			if (!response.ok) {
				throw new Error('Could not connect to database');
			}

			fetchFeedbacks();
		}
	};

	const addFeedback = async (newFeedback) => {
		const response = await fetch('/feedback', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newFeedback),
		});

		if (!response.ok) {
			throw new Error('Could not connect to data base');
		}

		const data = await response.json();
		setFeedbacks((prevState) => [data, ...prevState]);
	};

	const editFeedback = (feedback) => {
		setEditedFeedback({
			item: feedback,
			edit: true,
		});
	};

	const updateFeedback = async (updatedFeedback) => {
		const response = await fetch(`/feedback/${updatedFeedback.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedFeedback),
		});

		if (!response.ok) {
			throw new Error('Could not connect to database');
		}

		const data = await response.json();

		setFeedbacks(
			feedbacks.map((feedback) =>
				feedback.id === data.id ? { ...feedback, ...data } : feedback,
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
