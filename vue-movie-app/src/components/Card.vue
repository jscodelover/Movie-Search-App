<template>
	<div class="card" :class="flipCard ? 'flip-card' : ''">
		<div class="card__side card__side--front">
			<div class="card__img" :style="getPoster"></div>
			<div class="card__content--front">
				<h1 class="text-xl text-center text-green-800 tracking-wide">
					{{ card.title }}
				</h1>
				<ProgressBar :rating="card.vote_average * 10"></ProgressBar>
			</div>
			<button class="card__menu" v-on:click="handleMenu(id)">
				<img src="../assets/menu.png" alt="menu" />
			</button>
			<div class="card__action">
				<a href="#" title="Bookmark">
					<img src="../assets/bookmark.png" alt="bookmark" />
				</a>
				<a href="#" title="Add favourite">
					<img src="../assets/heart.png" alt="heart" />
				</a>
				<a href="#" title="Rating">
					<img src="../assets/star.png" alt="star" />
				</a>
			</div>
		</div>
		<div class="card__side card__side--back" :style="back_bg">
			<div class="card__content--back">
				<h2 class="text-center">Overview</h2>
				<div class="overview">
					<p>
						{{ card.overview || "We don't have an overview translated in English" }}
					</p>
				</div>
				<div class="back-btn-action">
					<button v-on:click="showMovieDetail">Read More</button>
					<button v-on:click="handleMenu(null)">Back</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
const IMAGE_MD = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';
export default {
	name: 'Card',
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
	methods: {
		handleMenu(id) {
			this.$emit('clicked', id);
		},
		showMovieDetail() {
			this.$router.push({ path: `/movie/${this.card.id}` });
		}
	},
	computed: {
		getPoster() {
			return this.card.backdrop_path
				? {
						backgroundImage: `url(${IMAGE_MD}${this.card.backdrop_path})`,
						backgroundPosition: 'top center'
				  }
				: null;
		},
		back_bg() {
			return {
				backgroundImage: `linear-gradient(45deg, rgba(187, 187, 187, 0.67), rgba(255, 255, 255, 0.63)), url(
          ${IMAGE_MD}${this.card.backdrop_path}
          )`
			};
		}
	}
};
</script>

<style lang="scss" scoped>
.card {
	position: relative;
	height: 450px;
	min-width: 300px;
	-webkit-perspective: 200rem;
	perspective: 200rem;
	&__side {
		position: absolute;
		top: 0;
		left: 0;
		min-width: inherit;
		height: inherit;
		background-color: white;
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
		box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
		overflow: hidden;
		border-radius: 37px;
		// border: 3px solid #a6d4a675;
		transition: all 0.8s ease;
		&--front {
			.card__img {
				height: 215px;
				background-position: center;
				background-image: linear-gradient(to bottom left, #00000069, transparent),
					url(/images/image.png);
				background-repeat: no-repeat;
			}
		}
		&--back {
			transform: rotateY(180deg);
		}
		.card__action {
			display: flex;
			justify-content: space-around;
			position: absolute;
			width: 100%;
			bottom: 15px;
			img {
				width: 28px;
			}
		}
		.card__content {
			&--front {
				display: flex;
				flex-direction: column-reverse;
				padding: 15px 15px;
				height: calc(100% - 215px - 40px);
				h1 {
					flex: 1 0 40%;
					display: flex;
					justify-content: center;
					align-items: center;
					height: calc(100% - 60px);
				}
			}
			&--back {
				padding: 20px 20px 66px;
				height: 100%;
				position: relative;
				.overview {
					display: flex;
					align-items: center;
					justify-content: center;
					height: 100%;
					p {
						margin-top: -16px;
						max-height: calc(100% - 33px);
						text-align: justify;
						font-size: 14px;
						overflow: hidden;
						text-overflow: clip;
						display: -webkit-box;
						-webkit-line-clamp: 15;
						-webkit-box-orient: vertical;
					}
				}
				.back-btn-action {
					position: absolute;
					bottom: 20px;
					display: flex;
					justify-content: space-evenly;
					width: calc(100% - 40px);
					button {
						min-width: 100px;
						border-radius: 18px;
						padding: 3px 11px;
						background-color: #c1eccc;
						font-size: 15px;
					}
				}
			}
		}
	}
	.card__menu {
		position: absolute;
		top: 192px;
		right: 10px;
		background-color: white;
		padding: 10px;
		border-radius: 50%;
		box-shadow: 0px 0px 3px 0px #00000085;
		img {
			width: 22px;
		}
	}
}
.flip-card {
	.card__side--front {
		transform: rotateY(-180deg);
	}
	.card__side--back {
		transform: rotateY(0deg);
	}
}
</style>
