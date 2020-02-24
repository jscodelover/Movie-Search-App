const IMAGE_SM = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';
const IMAGE_LG = 'https://image.tmdb.org/t/p/w1400_and_h450_face/';
const IMAGE_MD = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';

// Vue Component
Vue.component('Card', {
	props: {
		flipCard: {
			type: Boolean,
			required: true
		},
		card: {
			type: Object,
			required: true
		},
		id: {
			type: Number
		}
	},
	template: `<div class="card" :class="flipCard? 'flip-card' : '' ">
							<div class="card__side card__side--front">
								<div class="card__img" :style="getPoster"></div>
								<div class="card__content--front">
									<h1 class="text-xl text-center text-green-800 tracking-wide">{{card.title}}</h1>
									<ProgressBar :rating="card.vote_average * 10"></ProgressBar>
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
									<div class="overview"><p>{{card.overview}}</p></div>
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
	},
	computed: {
		getPoster() {
			console.log({
				backgroundImage: `${IMAGE_MD}${this.card.backdrop_path}`,
				backgroundPosition: 'top center'
			});
			return {
				backgroundImage: 'url(' + `${IMAGE_MD}${this.card.backdrop_path}` + ')',
				backgroundPosition: 'top center'
			};
		}
	}
});

Vue.component('Inputbox', {
	template: `<div class="search-container">
							<input v-model="movieName" type="text" placeholder="Search for a movie" />
							<button class=" w-28 tracking-wider text-white py-2 px-4 rounded ml-4"
							 :class="movieName ? 'bg-green-500 hover:bg-green-700' : 'cursor-not-allowed bg-gray-400'"
							 @click="searchMovie">Search</button>
						</div>`,
	data() {
		return {
			movieName: ''
		};
	},
	methods: {
		searchMovie() {
			if (this.movieName.trim()) {
				getMovie(this.movieName).then(data => this.$emit('storeMD', data.results));
			}
		}
	}
});

Vue.component('ProgressBar', {
	props: ['rating'],
	template: `<div class="progress-circle" :data-progress="rating">
							<div class="circle">
									<div class="full progress-circle__slice">
											<div class="progress-circle__fill progress-circle__fill--green"></div>
									</div>
									<div class="progress-circle__slice">
											<div class="progress-circle__fill progress-circle__fill--green"></div>
											<div class="progress-circle__fill progress-circle__fill--green progress-circle__bar"></div>
									</div>
							</div>
							<div class="progress-circle__overlay"><span class="progress font-mono text-base">{{rating}}%</span></div>
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
							<div class="movie__sidebar--items">
								<h3>Genres</h3>
								<div class="genres">
								<span>Action</span>
								<span>Adventure</span>
								<span>Science Fiction</span>
								</div>
							</div>
						</div>`
});

Vue.component('MovieCast', {
	template: `<div class="movie__cast">
							<div class="movie__cast--person">
								<img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/Ao3fp9f4loVQ1Vvk6ph8HU5p0Lu.jpg" alt="profile" />
								<h4>Kevin Conroy</h4>
								<span>Terence 'Terry' McGinnis / Batman</span>
							</div>
							<div class="movie__cast--person">
								<img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/Ao3fp9f4loVQ1Vvk6ph8HU5p0Lu.jpg" alt="profile" />
								<h4>Kevin Conroy</h4>
								<span>Terence 'Terry' McGinnis / Batman</span>
							</div>
							<div class="movie__cast--person">
								<img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/Ao3fp9f4loVQ1Vvk6ph8HU5p0Lu.jpg" alt="profile" />
								<h4>Kevin Conroy</h4>
								<span>Terence 'Terry' McGinnis / Batman</span>
							</div>
							<div class="movie__cast--person">
								<img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/Ao3fp9f4loVQ1Vvk6ph8HU5p0Lu.jpg" alt="profile" />
								<h4>Kevin Conroy</h4>
								<span>Terence 'Terry' McGinnis / Batman</span>
							</div>
							<div class="movie__cast--person">
								<img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/Ao3fp9f4loVQ1Vvk6ph8HU5p0Lu.jpg" alt="profile" />
								<h4>Kevin Conroy</h4>
								<span>Terence 'Terry' McGinnis / Batman</span>
							</div>
							<div class="movie__cast--person">
								<img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/Ao3fp9f4loVQ1Vvk6ph8HU5p0Lu.jpg" alt="profile" />
								<h4>Kevin Conroy</h4>
								<span>Terence 'Terry' McGinnis / Batman</span>
							</div>
							<div class="movie__cast--person">
								<img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/Ao3fp9f4loVQ1Vvk6ph8HU5p0Lu.jpg" alt="profile" />
								<h4>Kevin Conroy</h4>
								<span>Terence 'Terry' McGinnis / Batman</span>
							</div>
							<div class="movie__cast--person">
								<img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/Ao3fp9f4loVQ1Vvk6ph8HU5p0Lu.jpg" alt="profile" />
								<h4>Kevin Conroy</h4>
								<span>Terence 'Terry' McGinnis / Batman</span>
							</div>
							<div class="movie__cast--person">
								<img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/Ao3fp9f4loVQ1Vvk6ph8HU5p0Lu.jpg" alt="profile" />
								<h4>Kevin Conroy</h4>
								<span>Terence 'Terry' McGinnis / Batman</span>
							</div>
							<div class="movie__cast--person">
								<img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/Ao3fp9f4loVQ1Vvk6ph8HU5p0Lu.jpg" alt="profile" />
								<h4>Kevin Conroy</h4>
								<span>Terence 'Terry' McGinnis / Batman</span>
							</div>
							<div class="movie__cast--person">
								<img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/Ao3fp9f4loVQ1Vvk6ph8HU5p0Lu.jpg" alt="profile" />
								<h4>Kevin Conroy</h4>
								<span>Terence 'Terry' McGinnis / Batman</span>
							</div>
						</div>`
});

Vue.component('MovieReview', {
	template: `<div class="movie__reviews">
							<div class="movie__reviews--post review">
								<span>
								<img src="/images/frame.png" alt="avatar" />
								</span>
								<div class="review__content">
									<h3 class="font-bold text-xl">A review by msbreviews</h3>
									<p class="text-sm mb-6">
										<span>Written by msbreviews on</span>
										<span>November 26, 2019</span>
									</p>
									<div class="review__content--text">
										<p class="text-base">The kingdom of Arendelle needs to be evacuated when the forces of nature threaten to destroy it. Elsa, Anna, Olaf and Kristoff set off to find some answers. But Elsa has been distracted. She has been hearing an unfamiliar voice calling out to her in a strange tune. Led by her, the group follows the melody to find themselves at the edge of an Enchanted Forest with untold mysteries and dangers... <a href="#" class="text-green-600">read the rest</a></p>

									</div>
								</div>
							</div>
							<div class="movie__reviews--post review">
								<span>
									<img src="/images/frame.png" alt="avatar" />
								</span>
								<div class="review__content">
									<h3 class="font-bold text-xl">A review by msbreviews</h3>
									<p class="text-sm mb-6">
										<span>Written by msbreviews on</span>
										<span>November 26, 2019</span>
									</p>
									<div class="review__content--text">
										<p class="text-base">The kingdom of Arendelle needs to be evacuated when the forces of nature threaten to destroy it. Elsa, Anna, Olaf and Kristoff set off to find some answers. But Elsa has been distracted. She has been hearing an unfamiliar voice calling out to her in a strange tune. Led by her, the group follows the melody to find themselves at the edge of an Enchanted Forest with untold mysteries and dangers... <a href="#" class="text-green-600">read the rest</a></p>
									</div>
								</div>
							</div>
						</div>`
});
Vue.component('MovieVideo', {
	template: `<div class="movie__video">
								<video-player class="vjs-custom-skin"
									ref="videoPlayer"
									:options="playerOptions"
									:playsinline="true"
									@play="onPlayerPlay($event)"
									@pause="onPlayerPause($event)"
									@ended="onPlayerEnded($event)"
									@loadeddata="onPlayerLoadeddata($event)"
									@waiting="onPlayerWaiting($event)"
									@playing="onPlayerPlaying($event)"
									@timeupdate="onPlayerTimeupdate($event)"
									@canplay="onPlayerCanplay($event)"
									@canplaythrough="onPlayerCanplaythrough($event)"
									@ready="playerReadied"
									@statechanged="playerStateChanged($event)">
								</video-player>
						</div>`,
	data() {
		return {
			playerOptions: {
				height: '360',
				autoplay: false,
				muted: false,
				language: 'en',
				playbackRates: [0.7, 1.0, 1.5, 2.0],
				sources: [
					{
						type: 'video/mp4',
						// mp4
						src: 'http://vjs.zencdn.net/v/oceans.mp4'
						// webm
						// src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
					}
				],
				poster:
					'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg'
			}
		};
	},
	mounted() {
		// console.log('this is current player instance object', this.player)
		setTimeout(() => {
			console.log('dynamic change options', this.player);
			this.player.muted(false);
		}, 2000);
	},
	computed: {
		player() {
			return this.$refs.videoPlayer.player;
		}
	},
	methods: {
		// listen event
		onPlayerPlay(player) {
			// console.log('player play!', player)
		},
		onPlayerPause(player) {
			// console.log('player pause!', player)
		},
		onPlayerEnded(player) {
			// console.log('player ended!', player)
		},
		onPlayerLoadeddata(player) {
			// console.log('player Loadeddata!', player)
		},
		onPlayerWaiting(player) {
			// console.log('player Waiting!', player)
		},
		onPlayerPlaying(player) {
			// console.log('player Playing!', player)
		},
		onPlayerTimeupdate(player) {
			// console.log('player Timeupdate!', player.currentTime())
		},
		onPlayerCanplay(player) {
			// console.log('player Canplay!', player)
		},
		onPlayerCanplaythrough(player) {
			// console.log('player Canplaythrough!', player)
		},
		// or listen state event
		playerStateChanged(playerCurrentState) {
			// console.log('player current update state', playerCurrentState)
		},
		// player is ready
		playerReadied(player) {
			// seek to 10s
			console.log('example player 1 readied', player);
			player.currentTime(10);
			// console.log('example 01: the player is readied', player)
		}
	}
});

Vue.component('MovieContent', {
	data() {
		return {
			tab: 1
		};
	},
	methods: {
		handleTab(id) {
			this.tab = id;
		}
	},
	template: `<div class="movie__content">
							<MovieSidebar></MovieSidebar>
							<div>
								<div class="tabs">
									<button :class="tab === 1 ? 'b-b' : null" @click="handleTab(1)">Full Cast&Crew</button>
									<button :class="tab === 2 ? 'b-b' : null" @click="handleTab(2)">Reviews</button>
									<button :class="tab === 3 ? 'b-b' : null" @click="handleTab(3)">Videos</button>
								</div>
								<div class="tab__content">
									<MovieCast v-if="tab === 1"></MovieCast>
									<MovieReview v-else-if="tab === 2"></MovieReview>
									<MovieVideo v-else>3</MovieVideo>
								</div>
							</div>
						</div>
	`
});

// vue router
const Home = Vue.component('Home', {
	template: `<div class="content">
							<Inputbox @storeMD="movieToStore"></Inputbox>
							<div v-if="initial || cards.length" class="card-container">
								<Card v-for="(card, index) in cards" :key="card.id" :id="index" :card="card" :flipCard="flipCard === index" @clicked="handleClick"></Card> 
							</div>
							<div v-else class="text-center italic font-bold text-sm">There are no movies that matched your query.</div>
						</div>`,
	data() {
		return {
			flipCard: null,
			cards: [],
			initial: true
		};
	},
	methods: {
		handleClick(id) {
			this.flipCard = id;
		},
		movieToStore(movies) {
			this.initial && (this.initial = false);
			this.cards = [...movies];
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

Vue.use(VueVideoPlayer);
// Vue instance
new Vue({
	el: '#root',
	data: {
		movieData: ''
	},
	router,
	template: `<div>	
							<router-link to="/">Home</router-link>
							<router-link to="/movie/:id">Movie</router-link>
							<router-view></router-view>
						</div>`,
	methods: {}
});

getGenre().then(data => console.log(data));
postRating('133792', { value: 8.5 }).then(data => console.log(data));
