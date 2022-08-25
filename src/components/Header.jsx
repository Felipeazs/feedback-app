import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ text }) => {
	return (
		<header>
			<div className='container'>
				<h2>{text}</h2>
			</div>
		</header>
	);
};

//In case no props is passed, set default props:
Header.defaultProps = {
	text: 'Feedback Ui',
};

//Not very used defining strict types
Header.propTypes = {
	text: PropTypes.string,
};

export default Header;
