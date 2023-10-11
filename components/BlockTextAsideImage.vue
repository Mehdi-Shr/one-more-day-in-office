<template>
  <div class="b-image-text" :style="cssVars">
    <img v-if="src" :src="'/_nuxt/'+src" :alt="alt">
    <p v-if="text">{{ text }}</p>
  </div>
</template>

<script>
import { defineComponent} from 'vue'
export default defineComponent({
  name: 'BlockTextAsideImage',
  props: {
    src: {
      type: String,
      required: false,
    },
    alt: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
    imgLeft: {
      type: Boolean,
      required: false,
      default: true,
    },
  },

  setup (props) {
    const cssVars = computed(() => {
      return {
        '--position': props.imgLeft? 'row' : 'row-reverse',
        '--margin': props.imgLeft? '0 50px 0 0' : '0 0 0 50px',
      }
    })

    return  { cssVars }
  }
});
</script>

<style scoped lang="scss">
.b-image-text {
  display: flex;
  flex-direction: var(--position);
  align-items: center;
  justify-content: center;
  text-align: start;
  width: 80%;
  margin: auto;

  img {
    margin: var(--margin);
  }
}
</style>