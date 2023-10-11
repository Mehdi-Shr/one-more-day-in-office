<template>
  <NavBar/>
  <div id="__layout">
    <slot />
  </div>
  <Footer />  
</template>

<script>
import {defineComponent} from "vue";
import NavBar from "~/components/NavBar.vue";
import Footer from "~/components/Footer.vue";


export default defineComponent({
  components: {NavBar, Footer}
})

</script>