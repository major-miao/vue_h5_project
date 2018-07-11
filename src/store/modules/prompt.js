const promptModule = {
	state: {
		promptOptions: {}
	},
	mutations: {
		SET_PROMPTOPTIONS(state, options) {
			state.promptOptions = options;
		}
	},
	actions: {
		setPromptOptions({ commit }, options) {
			commit('SET_PROMPTOPTIONS', options);
		}
	},
	getters: {
		getPromptOptions: state => {
			return state.promptOptions;
		}
	}
};

export default promptModule;
