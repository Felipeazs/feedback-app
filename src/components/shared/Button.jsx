import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, version, type, isDisabled }) => {
	return (
		<button
			className={`btn btn-${version}`}
			disabled={isDisabled}
			type={type}
		>
			{children}
		</button>
	);
};

Button.defaultProps = {
	version: 'primary',
	type: 'button',
	isDisabled: false,
};

Button.propTypes = {
	version: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	isDisabled: PropTypes.bool.isRequired,
};

export default Button;
