import React from 'react'

import ShardStats from './components/ShardStats'

import './ShardPage.scss'

import Button from 'layouts/Page/components/Button'

const config = require('@marcopeg/utils/lib/config')


class ShardPage extends React.PureComponent {
	constructor (props) {
		super(props)
		this.state = {
			shardData: null,
			isLoading: false,
		}
	}

	componentDidMount () {
		this.getShardData()
	}

	getShardData = async () => {
		this.setState({ isLoading: true })

		let shardData
		let fakeLoadTimer = 0
		try {
			shardData = await fetch(`${config.get('REACT_APP_API_URL')}/v3/shards`).then(r => r.json())
		} catch (e) {
			shardData = null
		}

		if (!shardData) {
			fakeLoadTimer = 1000
		}

		setTimeout(() => {
			this.setState({
				shardData,
				isLoading: false,
			})
		}, fakeLoadTimer)
	}

	renderStats = (shards = null) => {
		return shards ? Array(64).fill().map((_, i) => (
			<ShardStats name={`Shard ${i}`}/>
		)) : this.renderError()
	}

	renderError = () => {
		if (!this.state.isLoading) {
			return (
				<span className="shard-error">
					<h1>Failed to get shard data.</h1>
					<Button onClick ={() => this.getShardData()} >Try Again</Button>
				</span>
			)
		} else {
			return null
		}
	}

	renderLoader = () => {
		if (this.state.isLoading && !this.state.shardData) {
			return <h1 className="shard-error">Loading Shard Data</h1>
		} else {
			return null
		}
	}

	render () {
		return (
			<div className="row" style={{ width: '100%', margin: 'auto' }}>
				{ this.renderLoader() }
				{ this.renderStats(this.state.shardData) }
			</div>
		)
	}
}

export default ShardPage
