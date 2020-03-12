import axios from 'axios';

async function REQUEST(config) {
	try {
		const { data, status } = await axios(config.url, {
			method: config.method,
			headers: {
				'content-type': 'application/json'
			},
			data: config.data
		});
		return { status, data };
	} catch (e) {
		console.log(e);
	}
}

export default REQUEST;

// post rating for movie using movie id
// async function postRating(movie_id, rating) {
// 	try {
// 		const guest_session = await fetch(
// 			`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${CONFIG.API_KEY}`
// 		);
// 		const tokenData = await guest_session.json();
// 		const response = await fetch(
// 			`https://api.themoviedb.org/3/movie/${movie_id}/rating?api_key=${CONFIG.API_KEY}&guest_session_id=${tokenData.guest_session_id}`,
// 			{
// 				method: 'POST',
// 				body: JSON.stringify(rating),
// 				headers: {
// 					'Content-Type': 'application/json;charset=utf-8'
// 				}
// 			}
// 		);
// 		const data = await response.json();
// 		return data;
// 	} catch (e) {
// 		return { error: 'Something went wrong.', e };
// 	}
// }

// postRating('133792', { value: 8.5 }).then(data => console.log(data));
