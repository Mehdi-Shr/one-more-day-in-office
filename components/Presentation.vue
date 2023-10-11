<template>
    <div class="presentation">
        <img class="fit-picture" src="../icons/pres_image.png" alt="Presentation image" id="pres-image">
        <div class="flex-presentation-info">
            <h1>One more day at the office</h1>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <router-link :to="'/more'">
                <Button backgroundColor="#CDAACE" textColor="black" borderStyle="1px solid black">En savoir plus</Button>
            </router-link>
        </div>
    </div>
  </template>

<script lang="ts">
    import { defineComponent} from 'vue'

    export default defineComponent({
        name: 'Presentation',
    });
</script>
  
<style scoped lang="scss">
    h1 {
        font-family: 'Jomhuria', serif;
        font-size: 40px;
        text-transform: uppercase;
    }

    .presentation {
      padding: 0 10%;
      margin-top: -19px;   
      background-color: $purple;
      height: 580px;
      display: flex;
      align-items: center;
      gap: 42px;
    }

    #pres-image {
        width:50%;
        height: auto;
        object-fit: contain;
    }

    .flex-presentation-info {
        width:50%;
    }
</style>