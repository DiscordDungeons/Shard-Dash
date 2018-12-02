import React from 'react'
import PropTypes from 'prop-types'

import './Button.scss'

const Button = ({ children, onClick, type, ...props }) => (
	<button
		{...props}
		type={type}
		onClick={onClick}
		className="site-btn btn-square btn-blue"
	>
		{children}
	</button>
)

Button.propTypes = {
	onClick: PropTypes.func,
    children: PropTypes.any.isRequired, // eslint-disable-line
	type: PropTypes.string,
}

Button.defaultProps = {
	type: 'button',
	variant: 'button',
	onClick: null,
}


export default Button
