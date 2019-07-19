<template>
  <div>
    <p>{{ joke }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import store from './../store'

export default {
  methods: {
    ...mapActions('ChuckModule',{
      getJoke: "/getRandomJoke"
    })
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
