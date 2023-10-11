<template>
  <Presentation/>
  <JeuPresentation/>
</template>

<script>
import {defineComponent} from "vue";
import Presentation from "~/components/Presentation.vue";
import JeuPresentation from "~/components/JeuPresentation.vue";

export default defineComponent({
  components: {Presentation, JeuPresentation},
})
</script>