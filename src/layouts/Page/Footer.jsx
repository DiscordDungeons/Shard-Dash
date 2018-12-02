import React from 'react'

import './Footer.scss'

import Logo from 'assets/logo.png'

const Footer = () => (
	<footer className="footer-section">
		<div className="container">
			<div className="row spad">
				<div className="col-md-6 col-lg-3 footer-widget">
					<img src={Logo} className="mb-4" alt="logo" />
					<p>
						Excepteur sint occaecat cupidatat non proident,
						sunt in culpa qui officia dese mollit anim id est laborum.
					</p>
					<span>
						Copyright &copy; {new Date().getFullYear()}
					</span>
				</div>
				<div className="col-md-6 col-lg-2 offset-lg-1 footer-widget">
					<h5 className="widget-title">Resources</h5>
					<ul>
						<li><a href="https://drpg.xyz/donate">Donations</a></li>
						<li><a href="https://drpg.xyz/wiki">Wiki</a></li>
						<li><a href="https://drpg.xyz/api">API Documents</a></li>
						<li><a href="https://drpg.xyz/guild-perms">Guild Permissions</a></li>
						<li><a href="https://drpg.xyz/blog">Blog</a></li>
					</ul>
				</div>
				<div className="col-md-6 col-lg-2 offset-lg-1 footer-widget">
					<h5 className="widget-title">Quick Links</h5>
					<ul>
						<li><a href="https://drpg.xyz/bot">Bot Invite</a></li>
						<li><a href="https://drpg.xyz/ideas">Ideas</a></li>
						<li><a href="./team">Team</a></li>
						<li><a href="mailto:support@discorddungeons.me">Contact</a></li>
					</ul>
				</div>
				<div className="col-md-6 col-lg-3 footer-widget pl-lg-5 pl-3">
					<h5 className="widget-title">Follow Us</h5>
					<div className="social">
						<a href="https://twitter.com/DiscordDungeons" className="twitter">
							<i className="fab fa-twitter" />
						</a>
						<a href="https://drpg.xyz/discord" className="discord">
							<i className="fab fa-discord" />
						</a>
						<a href="https:/github.com/DiscordDungeons" className="github">
							<i className="fab fa-github" />
						</a>
						<a href="https://reddit.com/r/DiscordDungeons" className="reddit">
							<i className="fab fa-reddit" />
						</a>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="row">
					<div className="col-lg-8 text-center text-lg-right">
						<ul className="footer-nav">
							<li><a href="./terms">Terms of Use</a></li>
							<li><a href="./privacy">Privacy Policy </a></li>
							<li><a href="mailto:support@discorddungeons.me">support@discorddungeons.me</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
)

export default Footer
