import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import FeedbackContext from './context/feedback-context';

const RatingSelect = ({ selectRating }) => {
	const { editedFeedback } = useContext(FeedbackContext);
	
	const [selected, setSelected] = useState(10);

	useEffect(() => {
		if (editedFeedback.edit === true) {
			setSelected(editedFeedback.item.rating);
		}
	}, [editedFeedback]);

	const handleChange = (event) => {
		setSelected(+event.target.value); // + sign converts string to number
		selectRating(+event.target.value);
	};

	// NOTE: simplified with iteration
	return (
		<ul className='rating'>
			{Array.from({ length: 10 }, (_, i) => (
				<li key={`rating-${i + 1}`}>
					<input
						type='radio'
						id={`num${i + 1}`}
						name='rating'
						value={i + 1}
						onChange={handleChange}
						checked={selected === i + 1}
					/>
					<label htmlFor={`num${i + 1}`}>{i + 1}</label>
				</li>
			))}
		</ul>
	);
};

RatingSelect.propTypes = {
	selectRating: PropTypes.func.isRequired,
};

export default RatingSelect;
