import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
	fetchAsyncMovies,
	fetchAsyncShows,
} from '../../features/movies/movieSlice';
import MovieListing from '../MovieListings/MovieListing';

const Home = () => {
	const dispatch = useDispatch();
	const movieText = 'harry';
	const seriesText = 'Friends';

	useEffect(() => {
		dispatch(fetchAsyncMovies(movieText));
		dispatch(fetchAsyncShows(seriesText));
	}, [dispatch]);

	return (
		<>
			<div className="banner-img"></div>
			<MovieListing />
		</>
	);
};

export default Home;
