import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
	fetchAsyncMovies,
	fetchAsyncShows,
} from '../../features/movies/movieSlice';
import MovieListing from '../MovieListings/MovieListing';

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAsyncMovies());
		dispatch(fetchAsyncShows());
	}, [dispatch]);

	return (
		<>
			<div className="banner-img"></div>
			<MovieListing />
		</>
	);
};

export default Home;
