import { triviaService } from "../services/TriviaService";

export const TriviaModule = {
  namespaced: true,
  state: {
    trivia: []
  },
  mutations: {
    setTrivia(state, payload) {
      state.trivia = payload
    }
  },
  actions: {
    fetchRandomTrivia(context, payload) {
      return triviaService.getTrivia()
        .then(response => {
          context.commit('setTrivia', response.data)
        })
    }
  },
  getters: {
    getTrivia(state){
      return state.trivia
    }
  }
}