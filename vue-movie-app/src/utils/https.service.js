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
