import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import movieApi from '../../common/api/movieApi';
import { APIKey } from '../../common/api/movieApiKey';

export const fetchAsyncMovies = createAsyncThunk(
	'movies/fetchAsyncMovies',
	async () => {
		const movieText = 'Harry';
		const response = await movieApi.get(
			`?apikey=${APIKey}&s=${movieText}&type=movie`
		);
		return response.data;
	}
);

export const fetchAsyncShows = createAsyncThunk(
	'movies/fetchAsyncShows',
	async () => {
		const seriesText = 'Friends';
		const response = await movieApi.get(
			`?apikey=${APIKey}&s=${seriesText}&type=series`
		);
		return response.data;
	}
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
	'movies/fetchAsyncMovieOrShowDetail',
	async (id) => {
		const response = await movieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`);
		return response.data;
	}
);

const initialState = {
	movies: {},
	shows: {},
	selectedMovieOrShow: {},
};

const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		removeSelectedMovieOrShow: (state) => {
			state.selectedMovieOrShow = {};
		},
	},
	extraReducers: {
		[fetchAsyncMovies.pending]: () => {
			console.log('Pending');
		},
		[fetchAsyncMovies.fulfilled]: (state, { payload }) => {
			console.log('fetched successfully');
			return { ...state, movies: payload };
		},
		[fetchAsyncMovies.rejected]: () => {
			console.log('Rejected');
		},
		[fetchAsyncShows.fulfilled]: (state, { payload }) => {
			console.log('fetched successfully');
			return { ...state, shows: payload };
		},
		[fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
			console.log('fetched successfully');
			return { ...state, selectedMovieOrShow: payload };
		},
	},
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export default movieSlice.reducer;
