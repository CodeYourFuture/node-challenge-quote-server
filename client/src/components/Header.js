import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({ setRanCount, ranCount }) => {
	return (
		<header>
			<Link to='/' style={{ textDecoration: 'none' }}>
				<h3 className='app-name'>Quote App</h3>
			</Link>

			<div className='quote-action-container'>
				<Link to='/quotes' style={{ textDecoration: 'none' }}>
					<button className='btn btn-info m-5 p-2 random-button'>Get All Quotes</button>
				</Link>
				<Link to='/quotes/random' style={{ textDecoration: 'none' }} onClick={() => setRanCount(ranCount + 1)}>
					<button className='btn btn-info m-5 p-2 random-button' >Get random quote</button>
				</Link>
			</div>
		</header >
	)
}

export default Header;