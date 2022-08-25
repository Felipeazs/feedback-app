import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ text, bgColor, textColor }) => {
	const headerStyles = {
		backgroundColor: bgColor,
		color: textColor,
	};
	return (
		<header style={headerStyles}>
			<div className='container'>
				<h2>{text}</h2>
			</div>
		</header>
	);
};

//In case no props is passed, set default props:
Header.defaultProps = {
	text: 'Feedback Ui',
	bgColor: 'rgba(0, 0, 0, 0.4)',
	textColor: '#ff6a95',
};

//Not very used defining strict types
Header.propTypes = {
	text: PropTypes.string,
	bgColor: PropTypes.string,
	textColor: PropTypes.string,
};

export default Header;
