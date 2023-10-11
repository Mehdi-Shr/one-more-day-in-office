<template>
  <div class="question-box">
    <h3>{{ question || 'Indéfini' }}</h3>
  </div>
  <div class="main-answer-flex">
    <p class="answer-box" v-for="(item, index) in reponses" :key="index">
      <input type="radio" :id="'reponse' + index+id" :name="'reponse'+ id " :value="item[1]" v-model="selectedResponse" @click="updateInput"  @change="emitResponse"/>
      <label :for="'reponse' + index+id">{{ item[0] }}</label>
    </p>
  </div>
  <div class="margin"></div>
</template>

<script setup>
const questionnaire = defineProps({
  id: String,
  question: String,
  reponses: [String, Boolean],
})
function updateInput(event) {
  console.log(event.target.value);
  emit('reponses', event.target.value)
}
const emit = defineEmits([
    'reponses'
]);


</script>
<style lang="scss">
.margin{
  margin-top: 1em;
  margin-bottom:2em ;
}
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
  background-color: $light-purple; 
  padding-left: 1em;
  padding-right: 1em;
}
</style>