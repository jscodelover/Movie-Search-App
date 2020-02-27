const image_path = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
const api_key = '7a6be3a7d8314d666d431de2a459c893';

// Get searched movie
async function getMovie(name) {
	try {
		const response = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${name}&page=1&include_adult=false`
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
			`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`
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
			`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${api_key}`
		);
		const tokenData = await guest_session.json();
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/${movie_id}/rating?api_key=${api_key}&guest_session_id=${tokenData.guest_session_id}`,
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

async function getTopMovies() {
	try {
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`
		);
		const data = await response.json();
		return data;
	} catch (e) {
		return { error: 'Something went wrong.', e };
	}
}

// get image path
function getImagePath() {
	return image_path;
}

export { getMovie, getGenre, postRating, getImagePath, getTopMovies };
