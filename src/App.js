import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './components/context/feedback-context';

const App = ({ appName }) => {
	const appTitle = appName;

	return (
		<FeedbackProvider>
			<Router>
				<Header appTitle={appTitle} />
				<div className='container'>
					<Routes>
						<Route
							path='/'
							element={<HomePage />}
						></Route>
						<Route
							path='/about'
							element={<AboutPage />}
						/>
					</Routes>
					<AboutIconLink />
				</div>
			</Router>
		</FeedbackProvider>
	);
};

export default App;
