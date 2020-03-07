import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		topMovies: []
	},
	mutations: {
		updateTopMovies(state, payload) {
			state.topMovies = payload.data;
		}
	},
	actions: {},
	modules: {}
});
