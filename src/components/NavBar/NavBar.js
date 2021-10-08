import React from 'react';
import './NavBar.style.css';
import Counter from './Counter';
export default function NavBar({ count }) {
	return (
		<div className='nav'>
			<h2>React Keep</h2>
			<Counter count={count}/>
		</div>
	);
}
