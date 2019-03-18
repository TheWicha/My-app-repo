import React from 'react';
import { NavLink } from "react-router-dom";
import '../../images/logo-mark.svg'
import links from './links'


class Footer extends React.Component {

	constructor() {
		super();
		this.state = {
			links: links
		}
	}

	render() {
		const { links } = this.state

		return (
			<div className="footer-container">
				<div className='footer'>
					<NavLink exact to="/">
						<div className='footer-logo'>
							<div className='footer-logo-img'>
								<img src="/images/logo-mark.svg"></img>
							</div>
						</div>
					</NavLink>
					<div className="footer-info">
						<div className="footer-site-name">
							<span className="footer-company">©2003-2019 My-app Recipes</span>
							<span>, by </span>
							<a href="#">Daniel Wisniewski Media</a>
						</div>
					</div>
					<div className="footer-links">
						{links.map(link => <NavLink exact to={link.href}>{link.name}</NavLink>)}
					</div>
				</div>
			</div>
		)
	}
}

export default Footer;
