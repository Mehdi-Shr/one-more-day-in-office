<template>
    <div class="section">
        <h2 class="title">Le Jeu</h2>
        <span class="border"></span>
        <div class="section-flex">
            <div class="section-content">
                <p>Dans une enquête, le Service statistique ministériel de la sécurité intérieure (SSMSI) dresse un état des lieux des comportements sexistes et sexuels au travail.</p>
                <p>En 2021, un adulte sur trois ayant déjà travaillé a été confronté à de tels comportements dans le milieu professionnel.</p>
                <p>En 2021, un adulte sur trois ayant déjà travaillé a été confronté à de tels comportements dans le milieu professionnel.</p>
            </div>
            <img class="fit-picture" src="../icons/pres_image.png" alt="Presentation image" id="pres-image">
        </div>
        <div class="columns-flex">
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <router-link :to="'/jeu'">
            <Button>Jouer</Button>
        </router-link>
    </div>
</template>

<script>
// TODO: add variables of padding
</script>

<style scoped lang="scss">
    .section{
        padding: 0 10%;
        padding-bottom: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p {
        size: $text-size;
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
    }

    #pres-image {
        width:50%;
        height: auto;
        object-fit: contain;
    }

    .section-content{
        width:50%;
        text-align: end;
    }

    .columns-flex {
        display: flex;
        gap: 45px;
        padding: 40px 0;
    }

</style>