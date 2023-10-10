<template>
    <header>
      <nav>
        <nuxt-link to="/"><img src="../icons/logo.svg" alt="logo"></nuxt-link>
        <ul>
          <li><nuxt-link to="/">Presentation</nuxt-link></li>
          <li><nuxt-link to="/jeu">Notre Jeu</nuxt-link></li>
          <li><nuxt-link to="/more">En savoir plus</nuxt-link></li>
        </ul>
      </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
export default defineComponent({
  name: 'NavBar',
});
</script>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: $purple;
  height: 120px;
  width: 100%;

  nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 10%;

    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 200px;

      li {
        font-size: 15px;
        text-transform: uppercase;

        a {
          position: relative;
          color: $black;
          font-size: 13px;
          font-weight: bold;
          text-transform: uppercase;
          min-height: inherit;

          &:after {
            content: "";
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: $black  ;
            transition: width 0.3s;
          }

          &:hover:after {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>