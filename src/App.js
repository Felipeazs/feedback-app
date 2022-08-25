import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';

const App = ({ name }) => {
	const appTitle = name;
	return (
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
	);
};

export default App;
