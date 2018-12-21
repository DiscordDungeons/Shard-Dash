import React from 'react'

import PropTypes from 'prop-types'

import './ShardStats.scss'

import Stat from './Stat'

const formatNumber = number => number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")

const toHumanHHMMSS = secondDuration => {
	let secNum = parseInt(secondDuration, 10) // don't forget the second param
	let hours = Math.floor(secNum / 3600)
	let minutes = Math.floor((secNum - hours * 3600) / 60)
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
	timestamp,

	shardStatus,
	shardUptime,
	shardPing,
	shardUsers,
	shardGuilds,
	shardChannels,

	processMemory,
	processUptime,
}) => (
	<div className="col-md-4">
		<div className="shard-item">
			<h4 className="shard-title">
				{name}
			</h4>
			<div className="row stats-container">
				{/* Shard Stuff */}
				<Stat
					title={'Last Update'}
					value={timestamp.toString()}
				/>
				<Stat
					title={'Shard Uptime'}
					value={toHumanHHMMSS(Math.floor(shardUptime / 1000))}
				/>
				<Stat
					title={'Shard Ping'}
					value={shardPing}
				/>
				<Stat
					title={'Shard Status'}
					value={shardStatus}
				/>
				<Stat
					title={'Servers'}
					value={formatNumber(shardGuilds)}
				/>
				<Stat
					title={'Users'}
					value={formatNumber(shardUsers)}
				/>
				<Stat
					title={'Channels'}
					value={formatNumber(shardChannels)}
				/>
				{/* Process Stuff */}
				<Stat
					title={'Process Uptime'}
					value={toHumanHHMMSS(Math.floor(processUptime))}
				/>
				<Stat
					title={'Heap Used'}
					value={getMB(processMemory.heapUsed)}
				/>
				<Stat
					title={'Heap Total'}
					value={getMB(processMemory.heapTotal)}
				/>
				<Stat
					title={'RSS Memory'}
					value={getMB(processMemory.rss)}
				/>
				<Stat
					title={'External Memory'}
					value={getMB(processMemory.external)}
				/>
			</div>
		</div>
	</div>
)

ShardStats.propTypes = {
	name: PropTypes.string,
	timestamp: PropTypes.string,

	shardStatus: PropTypes.number,
	shardUptime: PropTypes.string,
	shardPing: PropTypes.string,
	shardUsers: PropTypes.string,
	shardGuilds: PropTypes.string,
	shardChannels: PropTypes.string,

	processMemory: PropTypes.object,
	processUptime: PropTypes.string,
}

ShardStats.defaultProps = {
	name: 'Shard 0',
	timestamp: new Date().toUTCString(),
	shardStatus: -1,
	shardUptime: '0',
	shardPing: '0',
	shardUsers: '0',
	shardGuilds: '0',
	shardChannels: '0',

	processMemory: {
		heapUsed: 0,
		heapTotal: 0,
		rss: 0,
		external: 0,
	},
	processUptime: '0',
}

export default ShardStats
