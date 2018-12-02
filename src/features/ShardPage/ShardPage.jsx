import React from 'react'

import ShardStats from './components/ShardStats'

const getStats = () => {
	return Array(64).fill().map((_, i) => (
		<ShardStats name={`Shard ${i}`}/>
	))
}

const ShardPage = () => (
	<div>
		<div className="row">
			{ getStats() }
		</div>
	</div>
)

export default ShardPage
