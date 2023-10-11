<template>
  <div>
    <form  method="get" >
    <div v-for="item in questionnaire" :key="index">
      <QuestionBox :id="item[0]" :question="item[1]" :reponses="item[2]" />
    </div>
    <button type="button" v-on:click="validationQuestionnaire(this.form)">Valider</button>
</form>
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
        [1,"salut", [["sddl",false], ["dddl",false], ["ppppp",true],["kk",false]]],
        [2,"slt", [["dfgfdgd",false], ["mm",true], ["kkk",false],["kkk",false]]]
      ]
    };
  }
});
function validationQuestionnaire(form){
return false;
}
</script>