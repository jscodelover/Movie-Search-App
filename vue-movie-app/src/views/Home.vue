<template>
	<div class="content">
		<Inputbox @storeMD="movieToStore" />
		<div v-if="initial || cards.length" class="card-container">
			<Card
				v-for="(card, index) in cards"
				:key="card.id"
				:id="index"
				:card="card"
				:flipCard="flipCard === index"
				@clicked="handleClick"
			></Card>
		</div>
		<div v-else class="text-center italic font-bold text-sm">
			There are no movies that matched your query.
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Inputbox from '@/components/Inputbox.vue';
import Card from '@/components/Card.vue';

export default {
	name: 'Home',
	components: {
		Inputbox,
		Card
	},
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
};
</script>

<style lang="scss" scoped>
.card-container {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-gap: 40px;
	grid-template-rows: 450px;
	justify-items: center;
	padding: 60px 5% 0px;
}
</style>
