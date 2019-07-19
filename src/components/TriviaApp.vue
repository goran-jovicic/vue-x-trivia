<template>
  <div>
    <ul>
      <li v-for="trivia in trivias" :key="trivia.id">
        {{ trivia.question }}
        <button @click="toSelected(trivia.id)">Show Answer</button>
        <p v-if="isSelected"> {{ trivia.answer }} </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { TriviaModule } from '../store/trivia_store_module';

export default {
  data () {
    return {
      selectedTrivia : []
    }
  },

  methods : {
    ...mapActions('TriviaModule',{
      fetchTrivia : 'fetchRandomTrivia'
    }),

    toSelected(triviaID){
      this.selectedTrivia.push(triviaID)
    }
  },

  created () {
    this.fetchTrivia()
  },

  computed: {
    ...mapGetters('TriviaModule',{
      trivias : 'getTrivia'
    }),

    isSelected(){
      let newArr = []
      newArr.push(this.selectedTrivia.filter(trivia => trivia.id))
      return newArr
    }
  }
};
</script>

<style>
li {
  list-style : none;
}
</style>
