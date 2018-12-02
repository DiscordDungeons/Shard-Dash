import React from 'react'
import PropTypes from 'prop-types'

const Stat = ({ title, value }) => (
	<div className="stats-row">
		<div className="col s6 label">
			<h5>{ title }</h5>
		</div>
		<code className="col s6">{ value }</code>
	</div>
)

Stat.propTypes = {
	title: PropTypes.string.isRequired,
	value: PropTypes.any.isRequired, // eslint-disable-line
}

export default Stat
