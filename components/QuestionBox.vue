<script setup>
const props = defineProps({
  question: String,
  reponses: [String, Boolean], 
})
</script>

<template>
  <div class="question-box">
    <h3>{{ question || 'Indéfini' }}</h3>
  </div>

  <div class="main-answer-flex">
    <p class="answer-box" v-for="(item, index) in reponses" :key="index">
      <input type="radio" :id="'reponse' + index" name="reponse" value=item[1] />
      <label :for="'reponse' + index">{{ item[0] }}</label>
    </p>
  </div>
</template>

<style lang="scss">
.question-box {
  display: flex;
  flex: auto;
  background-color: $purple; 
  padding-left: 1em;
  padding-right: 1em;
}

.main-answer-flex {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: $lightpurple; 
  padding-left: 1em;
  padding-right: 1em;
}
</style>