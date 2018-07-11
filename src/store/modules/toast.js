const toastModule = {
	state: {
		totastOptions: {}
	},
	mutations: {
		SET_TOASTOPTIONS(state, options) {
			state.totastOptions = options;
		}
	},
	actions: {
		setTotastOptions({ commit }, options) {
			commit('SET_TOASTOPTIONS', options);
		}
	},
	getters: {
		getTotastOptions: (state) => {
			return state.totastOptions;
		}
	}
};

export default toastModule;
