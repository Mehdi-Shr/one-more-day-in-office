<template>
    <div class="presentation">
        <img class="fit-picture" src="../icons/pres_image.png" alt="Presentation image" id="pres-image">
        <div class="flex-presentation-info">
            <h1>One more day at the office</h1>
            <p>Plongez dans l'univers captivant de 'One More Day in Office' où vos choix éthiques dans les bureaux sont votre seule chance de changer le destin des employés et de sensibiliser sur le harcèlement et l'agression sexuelle au travail.</p>
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
        width: 500px;
        height: auto;
        object-fit: contain;
    }

    .flex-presentation-info {
        width:50%;
    }
</style>