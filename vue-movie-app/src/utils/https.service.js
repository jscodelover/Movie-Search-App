import CONFIG from '@/utils/config.js';

// Get searched movie
async function getMovie(name) {
	try {
		const response = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${CONFIG.API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`
		);
		const data = await response.json();
		return data;
	} catch (e) {
		return { error: 'Something went wrong.', e };
	}
}

// get genre list
async function getGenre() {
	try {
		const response = await fetch(
			`https://api.themoviedb.org/3/genre/movie/list?api_key=${CONFIG.API_KEY}&language=en-US`
		);
		const data = await response.json();
		return data;
	} catch (e) {
		return { error: 'Something went wrong.', e };
	}
}

// post rating for movie using movie id
async function postRating(movie_id, rating) {
	try {
		const guest_session = await fetch(
			`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${CONFIG.API_KEY}`
		);
		const tokenData = await guest_session.json();
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/${movie_id}/rating?api_key=${CONFIG.API_KEY}&guest_session_id=${tokenData.guest_session_id}`,
			{
				method: 'POST',
				body: JSON.stringify(rating),
				headers: {
					'Content-Type': 'application/json;charset=utf-8'
				}
			}
		);
		const data = await response.json();
		return data;
	} catch (e) {
		return { error: 'Something went wrong.', e };
	}
}

// get top rating movie
async function getTopMovies() {
	try {
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=${CONFIG.API_KEY}&language=en-US&page=1`
		);
		const data = await response.json();
		return data;
	} catch (e) {
		return { error: 'Something went wrong.', e };
	}
}

export { getMovie, getGenre, postRating, getTopMovies };
