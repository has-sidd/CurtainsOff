import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import user from '../../assets/user.png';
import {
	fetchAsyncMovies,
	fetchAsyncShows,
} from '../../features/movies/movieSlice';
import './Header.scss';

const Header = () => {
	const dispatch = useDispatch();
	const [term, setTerm] = useState('');
	const submitHandler = (e) => {
		e.preventDefault();
		console.log('sfds');
		dispatch(fetchAsyncMovies(term));
		dispatch(fetchAsyncShows(term));
		setTerm('');
	};
	return (
		<div className="header">
			<div className="logo">
				<Link to="/">Movie App</Link>
			</div>
			<div className="search-bar">
				<form onSubmit={submitHandler}>
					<input
						type="text"
						placeholder="Search movies or shows"
						onChange={(e) => setTerm(e.target.value)}
						value={term}
					/>
					<button type="submit">
						<i className="fa fa-search"></i>
					</button>
				</form>
			</div>

			<div className="user-image">
				<img src={user} alt="user" />
			</div>
		</div>
	);
};

export default Header;
