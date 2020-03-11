import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		topMovies: [],
		castMember: [],
		crewMember: []
	},
	mutations: {
		updateTopMovies(state, payload) {
			state.topMovies = payload.data;
		},
		updateCastMember(state, payload) {
			state.castMember = payload.data;
		},
		updateCrewMember(state, payload) {
			state.crewMember = payload.data;
		}
	},
	actions: {},
	modules: {}
});
