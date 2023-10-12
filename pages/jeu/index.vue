<script >
import { defineComponent } from "vue";
import QuestionBox from "~/components/QuestionBox.vue";
import Button from "~/components/Button.vue";

export default defineComponent({
  components: {
    QuestionBox,
    Button
  },
  setup(){
    const questionnaireRempli= ref(new Map())
    return { questionnaireRempli}
  },
  data() {
    return {
      questionnaire: [
        [1,"Quelle est la définition légale du harcèlement sexuel ?", [["Faire des compliments",false], ["Proposer un rendez-vous",false], ["Imposer à quelqu'un, de façon répétée, des propos ou comportements à connotation sexuelle",true],["Tous les points ci-dessus",false]]],
        [2,"Quelle est la première étape à prendre en cas de harcèlement au travail ?", [["Ignorer le harceleur",false], ["En parler à un proche ou un collègue de confiance",true], ["Quitter son emploi",false],["Répondre agressivement",false]]],
        [3,"Une personne peut-elle être accusée de harcèlement sexuel même si elle pensait que ses avances étaient les bienvenues ?", [["Oui",true], ["Non",false], ["Seulement si la personne est de sexe masculin",false],["Seulement si la victime a dit non",false]]],
        [4,"Laquelle de ces situations n'est PAS considérée comme une forme de harcèlement sexuel ?", [["Envoyer des messages à connotation sexuelle sans consentement",false], ["Faire un compliment sur la tenue de quelqu'un",true], ["Partager des images à caractère sexuel sans consentement",false],["Raconter régulièrement des blagues inappropriées à connotation sexuelle",false]]],
        [5,"Quel est le principal impact du harcèlement sexuel sur les victimes ?", [["Épuisement professionnel",false], ["Baisse de la productivité",false], ["Traumatismes psychologiques",true],["Augmentation des capacités professionnelles",false]]],
        [6,"Les hommes peuvent-ils être victimes de harcèlement sexuel ?", [["Oui",true], ["Non",true], ["Seulement dans certains pays",false],["Seulement par d'autres hommes",false]]],
        [7,"Quelle est la meilleure façon de soutenir une personne qui se confie sur une situation de harcèlement ?", [["Lui dire de l'ignorer",false], ["Lui dire qu'elle exagère",true], ["Écouter sans juger et encourager à parler à une personne de confiance",true],["Prendre sa revanche sur le harceleur",false]]],
        [8,"Lequel de ces comportements n'est PAS une forme d'agression sexuelle ?", [["Forcer quelqu'un à avoir des relations sexuelles",false], ["Embrasser quelqu'un sans son consentement",true], ["Toucher inappropriément quelqu'un sans son consentement",false],["Demander à quelqu'un de sortir boire un verre avec vous",true]]],
        [9,"Quel est le principal obstacle empêchant les victimes de parler d'une agression sexuelle ?", [["Peur de ne pas être crue",false], ["Peur des représailles",false], ["Honte ou culpabilité",false],["Toutes les réponses ci-dessus",true]]],
        [10,"Quelle est la meilleure défense contre le harcèlement sexuel ?", [["Ignorer",false], ["En Éducation et sensibilisation",true], ["Eviter tout contact avec l'opposé du sexe",false],["Porter des vêtements moins provocants",false]]]
      ],
    };
  },
  methods: {
    validationQuestionnaire() {
      const form = document.getElementById('formulaire');
      const formData = new FormData(form);
      for (const pair of formData.entries()) { 
        questionnaireRempli.set(pair[0], pair[1]);
        console.log(pair[0] + ': ' + pair[1]);
    }
    for (let i = 1; i < 10; i++) {
      if(questionnaireRempli.get(i)){
        document.getElementById("question"+i).scrollIntoView();
      }
    }
    }
  }
  
});
</script>
<template>
  <div>
    <form id="formulaire" method="get" >
    <div v-for="item in questionnaire" :key="item[0]">
      <QuestionBox :id="item[0]" :question="item[1]" :reponses="item[2]" />
    </div>
    <div class="button-flex">
      <Button type="button" @click="validationQuestionnaire">Valider</Button>
    </div>
  </form>
  </div>
</template>

<style>
.button-flex{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
