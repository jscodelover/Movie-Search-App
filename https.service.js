const accessToken = '2542171216051084';

async function getHero(name) {
	try {
		const response = fetch(
			`https://superheroapi.com/api/${accessToken}/search/${name}`
		);
		console.log(response);
	} catch (e) {
		console.log(e);
	}
}
