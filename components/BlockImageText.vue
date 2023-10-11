<template>
  <div class="b-image-text">
    <img v-if="src" :src="'/_nuxt/'+src" :alt="alt">
    <h3 v-if="title">{{ title }}</h3>
    <p v-if="text">{{ text }}</p>
  </div>
</template>

<script>
import { defineComponent} from 'vue'
export default defineComponent({
  name: 'BlockImageText',
  props: {
    src: {
      type: String,
      required: false,
    },
    alt: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
  },
});
</script>

<style scoped lang="scss">
.b-image-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 500px;
  margin: auto;

  img {
    margin-bottom: 20px;
  }

  h3 {
    font-weight: bold;
    font-size: 25px;
  }

  p {
    font-size: $text-size;
  }
}
</style>