import React from 'react'
import loadable from 'react-loadable'

export default loadable({
	loader: () => import('./ShardPage'),
	loading: () => <h1>Loading</h1>,
})
