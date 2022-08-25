import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import Card from './shared/Card';
import Button from './shared/Button';

import FeedbackContext from './context/feedback-context';
import RatingSelect from './RatingSelect';

const FeedbackForm = () => {
	const { addFeedback, editedFeedback } = useContext(FeedbackContext);

	const [text, setText] = useState('');
	const [rating, setRating] = useState(10);
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState('');

	useEffect(() => {
		if (editedFeedback.edit === true) {
			setText(editedFeedback.item.text);
			setRating(editedFeedback.item.rating);
			setBtnDisabled(false);
		}
	}, [editedFeedback]);

	const textChangeHandler = (event) => {
		if (text === '') {
			setBtnDisabled(true);
			setMessage(null);
		} else if (text !== '' && text.trim().length <= 10) {
			setBtnDisabled(true);
			setMessage('Text must be at least 10 characters');
		} else {
			setBtnDisabled(false);
			setMessage(null);
		}

		setText(event.target.value);
	};

	const selectRatingHandler = (selectedRatings) => {
		setRating(selectedRatings);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		if (text.trim().length > 10) {
			const newFeedback = {
				text,
				rating,
			};

			addFeedback(newFeedback);
			setText('');
			setBtnDisabled(true);
		}
	};

	return (
		<Card>
			<form onSubmit={submitHandler}>
				<h2>How would you rate your service with us?</h2>
				<RatingSelect selectRating={selectRatingHandler} />
				<div className='input-group'>
					<input
						type='text'
						placeholder='Write a review'
						onChange={textChangeHandler}
						value={text}
					/>
					<Button
						type='submit'
						isDisabled={btnDisabled}
					>
						Send
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	);
};

FeedbackForm.propType = {
	addFeedback: PropTypes.func.isRequired,
};

export default FeedbackForm;
