// Vue Component
Vue.component('Card', {
	template: `<div class="card">
							<div class="card__side card__side--front">
								<img 
									class="card__img"
									src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg" 
									alt="poster" 
								/>
								<div class="card__content">
									<h1 class="text-xl text-center text-green-800 tracking-wide">Once Upon a Time… in Hollywood</h1>
									<ProgressBar></ProgressBar>
								</div>
								<button class="card__menu">
									<img 
										src="./images/menu.png" 
										alt="menu" 
									/>
								</button>
								<div class="card__action">
									<a href="#" title="Bookmark">
										<img 
											src="./images/bookmark.png" 
											alt="bookmark" 
										/>
									</a>
									<a href="#" title="Add favourite">	
										<img 
											src="./images/heart.png" 
											alt="heart" 
										/>
									</a>
									<a href="#" title="Rating">	
										<img 
											src="./images/star.png" 
											alt="star" 
										/>
									</a>	
								</div>
							</div>
							<div class="card__side card__side--back"> back </div>
						</div>`
});

Vue.component('Inputbox', {
	template: `<div class="search-container">
							<input type="text" placeholder="Search for a movie" />
							<button class="bg-green-500 w-28 tracking-wider
							 hover:bg-green-700 text-white py-2 px-4 rounded ml-4">Search</button>
						</div>`
});

Vue.component('ProgressBar', {
	template: `<div class="progress-circle" data-progress="40">
							<div class="circle">
									<div class="full progress-circle__slice">
											<div class="progress-circle__fill progress-circle__fill--green"></div>
									</div>
									<div class="progress-circle__slice">
											<div class="progress-circle__fill progress-circle__fill--green"></div>
											<div class="progress-circle__fill progress-circle__fill--green progress-circle__bar"></div>
									</div>
							</div>
							<div class="progress-circle__overlay"><span class="progress font-mono text-base">80%</span></div>
						</div>`
});

// Vue instance
new Vue({
	el: '#root'
});

const image_path = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
const api_key = '7a6be3a7d8314d666d431de2a459c893';

async function getHero(name) {
	try {
		const response = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${name}&page=1&include_adult=false`
		);
		const data = await response.json();
		console.log(data);
	} catch (e) {
		console.log(e);
	}
}

getHero('avenger end');

{
	/* <div class="progress-circle" data-progress="40">
								<div class="circle">
										<div class="full progress-circle__slice">
												<div class="progress-circle__fill"></div>
										</div>
										<div class="progress-circle__slice">
												<div class="progress-circle__fill"></div>
												<div class="progress-circle__fill progress-circle__bar"></div>
										</div>
								</div>
								<div class="progress-circle__overlay"></div>
						</div> */
}
