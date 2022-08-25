import React, { Fragment } from 'react';

import FeedbackList from '../components/FeedbackList';
import FeedbackStats from '../components/FeedbackStats';
import FeedbackForm from '../components/FeedbackForm';

const HomePage = () => {
	return (
		<Fragment>
			<FeedbackForm />
			<FeedbackStats />
			<FeedbackList />
		</Fragment>
	);
};

export default HomePage;
