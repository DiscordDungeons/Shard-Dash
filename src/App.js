/* eslint-disable react/prefer-stateless-function */
import React from 'react'

import MetaTags from './components/MetaTags'

import 'css/index.scss'

import Page from 'layouts/Page'

import ShardPage from 'features/ShardPage'

class App extends React.Component {
	render () {
		return (
			<div>
				<MetaTags />
				<Page>
					<ShardPage />
				</Page>
			</div>
		)
	}
}

export default App
