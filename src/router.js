import Vue from 'vue'
import Router from 'vue-router'
import TriviaApp from './components/TriviaApp'
import ChuckNorris from './components/ChuckNorris'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'trivia-app',
      component: TriviaApp
    },
    {
      path: '/chuck',
      name: 'chuck-app',
      component: ChuckNorris
    }
    
  ]
})
