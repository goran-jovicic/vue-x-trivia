import Vue from 'vue'
import Vuex from 'vuex'
import { TriviaModule } from './trivia_store_module'
import { ChuckModule } from './chuck_store_module'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
    TriviaModule,
    ChuckModule
  }
})

export default store
