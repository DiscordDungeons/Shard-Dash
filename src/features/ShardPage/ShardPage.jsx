import React from 'react'

import ShardStats from './components/ShardStats'

const getStats = () => {
	return Array(64).fill().map((_, i) => (
		<ShardStats name={`Shard ${i}`}/>
	))
}

const ShardPage = () => (
	<div className="row" style={{ width: '100%', margin: 'auto' }}>
		{ getStats() }
	</div>
)

export default ShardPage
