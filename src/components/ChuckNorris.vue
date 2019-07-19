<template>
  <div>
    <p>{{ joke }}</p>
    <div>
      <input type="text" placeholder="Enter Joke category..." v-model="category"/>
      <button @click="handleCategory">Get New Joke</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import store from './../store'

export default {
  data () {
    return {
      category : ''
    }
  },

  methods: {
    ...mapActions('ChuckModule',{
      getJoke: "/getRandomJoke",
      getCategoryJoke: "getCategoryJoke"
    }),

    handleCategory(category) {
      category = this.category
      this.getCategoryJoke(category)
    }
  },

  computed: {
    ...mapGetters('ChuckModule',{
      joke: "getJoke"
    })
  },

  // created() {
  //   this.getJoke();
  // },

  beforeRouteEnter (to, from, next) {
    store.dispatch('ChuckModule/getRandomJoke', next)
  }
};
</script>

<style>
</style>
