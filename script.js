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
									src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg" 
									alt="poster" 
								/>
								<div class="card__content">
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
							<div class="card__side card__side--back" ref="card-back"> back 
							<button v-on:click="handleMenu(null)">Back </button>
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
	mounted() {}
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
	el: '#root',
	template: `<div class="content">
							<Inputbox></Inputbox>
							<div class="card-container">
								<Card v-for="(card, index) in cards" :id="index" :flipCard="flipCard === index" @clicked="handleClick"></Card> 
							</div>
						</div>`,
	data: {
		flipCard: null,
		cards: [1, 2, 3, 4]
	},
	methods: {
		handleClick(id) {
			console.log(id);
			this.flipCard = id;
		}
	}
});

getMovie('joker').then(data => console.log(data));
getGenre().then(data => console.log(data));
postRating('133792', { value: 8.5 }).then(data => console.log(data));
