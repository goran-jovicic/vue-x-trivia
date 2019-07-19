import { chuckService } from '../services/ChuckService'

export const ChuckModule = {
  namespaced: true,
  state: {
    joke: null,
  },
  mutations: {
    setJoke(state, payload) {
      state.joke = payload
    }
  },
  actions: {
    getRandomJoke(context, next) {
      return chuckService.getRandomJoke()
        .then((joke) => {
          context.commit('setJoke', joke.value)
          next()
        })
    },
    getCategoryJoke(context,category){
      return chuckService.getNewJoke(category)
      .then((joke) => {
        context.commit('setJoke', joke.value)
      })
    }
  },
  getters: {
    getJoke(state) {
      return state.joke
    }
  }
}