import React from 'react'

import PropTypes from 'prop-types'

import './ShardStats.scss'

import Stat from './Stat'

const formatNumber = number => number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")

const toHumanHHMMSS = secondDuration => {
	let secNum = parseInt(secondDuration, 10)
	let hours = Math.floor(secNum / 3600)
	let minutes = Math.floor(secNum - hours * 3600 / 60)
	let seconds = secNum - hours * 3600 - minutes * 60

	if (hours < 10) {
		hours = "0" + hours
	}

	if (minutes < 10) {
		minutes = "0" + minutes
	}

	if (seconds < 10) {
		seconds = "0" + seconds
	}

	let time = `${hours} hours, ${minutes} minutes and ${seconds} seconds`
	return time
}

const getMB = bytes => `${(bytes / (1024 * 1024)).toFixed(2)} MB`

const ShardStats = ({
	name,
	lastUpdate,
	uptime,
	heapUsed,
	heapTotal,
	rss,
	servers,
	users,
	channels,
}) => (
	<div className="col-md-4">
		<div className="shard-item">
			<h4 className="shard-title">
				{name}
			</h4>
			<div className="row stats-container">
				<Stat
					title={'Last Update'}
					value={lastUpdate.toString()}
				/>
				<Stat
					title={'Uptime'}
					value={toHumanHHMMSS(uptime)}
				/>
				<Stat
					title={'Heap Used'}
					value={getMB(heapUsed)}
				/>
				<Stat
					title={'Heap Total'}
					value={getMB(heapTotal)}
				/>
				<Stat
					title={'RSS Memory'}
					value={getMB(rss)}
				/>
				<Stat
					title={'Servers'}
					value={formatNumber(servers)}
				/>
				<Stat
					title={'Users'}
					value={formatNumber(users)}
				/>
				<Stat
					title={'Channels'}
					value={formatNumber(channels)}
				/>
			</div>
		</div>
	</div>
)

ShardStats.propTypes = {
	name: PropTypes.string,
	lastUpdate: PropTypes.instanceOf(Date),
	uptime: PropTypes.number,
	heapUsed: PropTypes.number,
	heapTotal: PropTypes.number,
	rss: PropTypes.number,
	servers: PropTypes.number,
	users: PropTypes.number,
	channels: PropTypes.number,
}

ShardStats.defaultProps = {
	name: 'Shard 0',
	lastUpdate: new Date(),
	uptime: 0,
	heapUsed: 0,
	heapTotal: 0,
	rss: 0,
	servers: 0,
	users: 0,
	channels: 0,
}

export default ShardStats
