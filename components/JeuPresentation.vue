<template>
    <div class="section">
        <h2 class="title">Le Jeu</h2>
        <span class="border"></span>
        <div class="section-flex">
            <div class="section-content">
                <p>"One More Day in Office" offre une expérience immersive en plaçant les joueurs devant une salle de contrôle de bureau où ils incarnent un employé confronté à des problèmes de harcèlement et d'agression sexuelle.</p>
                <p>La particularité du jeu réside dans la possibilité d'interagir avec les caméras de sécurité pour surveiller et signaler les comportements inappropriés.</p>
                <p>Les joueurs se trouvent face à des dilemmes moraux délicats, ayant la responsabilité de signaler ces incidents en choisissant parmi les catégories "agression sexuelle, harcèlement sexuel, drague ou rien."</p>
            </div>
            <img class="fit-picture" src="../icons/surv_room.png" alt="Presentation image" id="pres-image">
        </div>
        <div class="columns-flex">
            <p>Le jeu offre une opportunité unique de sensibiliser sur le harcèlement et l'agression sexuelle au travail.</p>
            <p>À la fin du jeu, les joueurs se voient proposer un quiz pour évaluer leur compréhension des enjeux liés au harcèlement et à l'agression sexuelle en milieu professionnel.</p>
            <p>"One More Day in Office" va au-delà du simple divertissement en offrant une expérience éducative qui favorise la réflexion et l'apprentissage, tout en contribuant à une meilleure sensibilisation sur ces sujets cruciaux.</p>
        </div>
        <router-link :to="'/jeu'">
            <Button>Jouer</Button>
        </router-link>
    </div>
</template>

<script lang="ts">
// TODO: add variables of padding
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'JeuPresentation',
    });
</script>

<style scoped lang="scss">
    .section{
        padding: 0 10% 50px 10%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p {
        font-size: $text-size;
    }

    .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 600px;
        margin: 50px auto 0 auto;
        text-transform: uppercase;
    }

    .border {
        display: block;
        width: 100px;
        height: 7px;
        margin: 20px auto 50px auto;
        background-color: $purple;
    }

    .section-flex {
      height: 430px;
      display: flex;
      align-items: center;
      gap: 42px;
      padding: 30px;
    }

    #pres-image {
        width:50%;
        height: auto;
        object-fit: contain;
    }

    .section-content{
        width:50%;
        text-align: left;
    }

    .columns-flex {
        display: flex;
        gap: 45px;
        padding: 40px 0;
    }

</style>