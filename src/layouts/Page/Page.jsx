import React from 'react'

import Header from './Header'
import Footer from './Footer'

import PageInfo from './components/PageInfo'

const Page = ({ children }) => (
	<div>
		<Header />
		<PageInfo />
		{ children }
		<Footer />
	</div>
)

export default Page
