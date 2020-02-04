// Vue Component
Vue.component('Card', {
	props: {
		flipCard: {
			type: Boolean,
			required: true
		},
		id: {
			type: Number
		}
	},
	template: `<div class="card" :class="flipCard? 'flip-card' : '' ">
							<div class="card__side card__side--front">
								<img 
									class="card__img"
									src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" 
									alt="poster" 
								/>
								<div class="card__content--front">
									<h1 class="text-xl text-center text-green-800 tracking-wide">Once Upon a Time… in Hollywood</h1>
									<ProgressBar></ProgressBar>
								</div>
								<button class="card__menu" v-on:click="handleMenu(id)">
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
							<div class="card__side card__side--back">
								<div class="card__content--back">
									<h2 class="text-center">Overview</h2>
									<div class="overview"><p>During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure. During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure. During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.</p></div>
									<div class="back-btn-action">	
										<button>Read More</button>
										<button v-on:click="handleMenu(null)">Back</button>
									</div>
								</div>
							</div>
						</div>`,
	data() {
		return {};
	},
	methods: {
		handleMenu(id) {
			this.$emit('clicked', id);
		}
	}
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

Vue.component('MovieHeader', {
	template: `<div class="movie__header">
							<img class="movie__header--poster" src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" alt="poster" />	
							<div class="movie__header--content">
								<h1>
									<span class="text-3xl font-bold">Hello name of the movie can be: this!! long? yes</span>
									<span class="text-2xl tracking-wider text-gray-400"> (2018)</span>
								</h1>
								<div class="movie__action">
									<div class="movie__action--score">
										<ProgressBar></ProgressBar>
										<span>User Score</span>
									</div>
									<a href="#" title="Bookmark" class="movie__action--link">
										<img 
											src="./images/bookmark.png" 
											alt="bookmark" 
										/>
									</a>
									<a href="#" title="Add favourite" class="movie__action--link">	
										<img 
											src="./images/heart.png" 
											alt="heart" 
										/>
									</a>
									<a href="#" title="Rating" class="movie__action--link">	
										<img 
											src="./images/star.png" 
											alt="star" 
										/>
									</a>
								</div>
								<div>
									<h2 class="font-semibold">Overview</h2>
									<p class="text-base mt-2 text-justify">The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.</p>
								</div>
								<h2 class="mt-8 mb-2 font-semibold">Featured Crew</h2>
								<div class="crew-container">
									<div class="crew">
										<h3>James Gray James Gray James Gray</h3>
										<span>Director, Screenplay</span>
									</div>
									<div class="crew">
										<h3>James Gray</h3>
										<span>Director, Screenplay</span>
									</div>
									<div class="crew">
										<h3>James Gray James Gray</h3>
										<span>Director, Screenplay</span>
									</div>
									<div class="crew">
										<h3>James Gray</h3>
										<span>Director, Screenplay</span>
									</div>
									<div class="crew">
										<h3>James Gray</h3>
										<span>Director, Screenplay</span>
									</div>
								</div>
							</div>
						</div>`
});

Vue.component('MovieSidebar', {
	template: `<div class="movie__content--side movie__sidebar">
							<div class="movie__sidebar--items">
								<h3>Status</h3>
								<span>Released</span>
							</div>
							<div class="movie__sidebar--items ">
								<h3>Original Language</h3>
								<span>English</span>
							</div>
							<div class="movie__sidebar--items ">
								<h3>Run time</h3>
								<span>2h 20m</span>
							</div>
							<div class="movie__sidebar--items">
								<h3>Genres</h3>
								<div class="genres">
								<span>Action</span>
								<span>Adventure</span>
								<span>Science Fiction</span>
								</div>
							</div>
							<div class="movie__sidebar--items ">
								<h3>Budget</h3>
								<span>2,89,343</span>
							</div>
							<div class="movie__sidebar--items ">
								<h3>Revenue</h3>
								<span>2,89,343</span>
							</div>
							<div class="movie__sidebar--items ">
								<h3>Production Campany</h3>
								<span>xyz</span>
							</div>
						</div>`
});

Vue.component('MovieContent', {
	template: `<div class="movie__content">
							<MovieSidebar></MovieSidebar>
							<h1>2</h1>
						</div>
	`
});

// vue router
const Home = Vue.component('Home', {
	template: `<div class="content">
							<Inputbox></Inputbox>
							<div class="card-container">
								<Card v-for="(card, index) in cards" :key="card" :id="index" :flipCard="flipCard === index" @clicked="handleClick"></Card> 
							</div>
						</div>`,
	data() {
		return {
			flipCard: null,
			cards: [1, 2, 3, 4]
		};
	},
	methods: {
		handleClick(id) {
			this.flipCard = id;
		}
	}
});
const Movie = Vue.component('Movie', {
	template: `<div>
							<MovieHeader></MovieHeader>
							<MovieContent></MovieContent>
						</div>`
});

const routes = [
	{ path: '/', component: Home },
	{ path: '/movie/:id', component: Movie }
];

const router = new VueRouter({
	routes
});

// Vue instance
new Vue({
	el: '#root',
	router,
	template: `<div>	
							<router-link to="/">Home</router-link>
							<router-link to="/movie/:id">Movie</router-link>
							<router-view></router-view>
						</div>`
});

getMovie('joker').then(data => console.log(data));
getGenre().then(data => console.log(data));
postRating('133792', { value: 8.5 }).then(data => console.log(data));
