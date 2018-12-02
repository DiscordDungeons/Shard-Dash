import React from 'react'

import './Header.scss'

import Logo from 'assets/logo.png'

const Header = () => (
	<header className="header-section clearfix">
		<div className="container-fluid">
			<a href="index.html" className="site-logo">
				<img src={Logo} alt="Logo" />
				<span>&nbsp;Discord Dungeons Shards</span>
			</a>
		</div>
	</header>
)

export default Header
