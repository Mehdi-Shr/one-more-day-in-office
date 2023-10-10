<template>
    <div>
      <div v-for="item in questionnaire" :key="index">
        <QuestionBox :question="item[0]" :reponses="item[1]" />
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import QuestionBox from "~/components/QuestionBox.vue";
  
  export default defineComponent({
    components: {
      QuestionBox
    },
    data() {
      return {
        questionnaire: [
          ["salut", ["sal", "sal", "sal"]],
          ["slt", ["sal", "sal", "sal"]]
        ]
      };
    }
  });
  </script>