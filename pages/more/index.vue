<template>
  <div class="more">
    <h1 class="title">Harcèlement sexuel dans le milieu professionnel</h1>
    <span class="border"></span>

    <div class="flex-image-text">
      <BlockImageText src="icons/harcelement.png"
                      alt="logo"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "/>
      <BlockImageText src="icons/harcelement.png"
                      alt="logo"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "/>
      <BlockImageText src="icons/harcelement.png"
                      alt="logo"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "/>

    </div>


    <div class="flex-image-text-background">
      <BlockImageText title="Verbale"
                      text="Des femmes du milieu profes s ionnel sont vict imes de compor tement s sexi s tes"/>
      <BlockImageText title="Non verbal"
                      text="Des vict imes affirmaient avoir enduré des contact s phys iques non dés irés dans le cadre profes s ionnel"/>
      <BlockImageText title="Physique"
                      text="Des vict imes ont reçu des propos i t ions et des avances sexuelles déplacées durant leur act ivi té profes s ionnelle"/>

    </div>

    <h1 class="title">Prevention</h1>
    <span class="border"></span>

    <BlockTextAsideImage src="icons/harcelement.png"
                         alt="logo"
                         text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "/>
    <BlockTextAsideImage src="icons/harcelement.png"
                         :img-left="false"
                         alt="logo"
                         text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "/>

    <div class="flex-image-text-background">
      <BlockImageText title="36 %"
                      text="Des femmes du milieu profes s ionnel sont vict imes de compor tement s sexi s tes"/>
      <BlockImageText title="24 %"
                      text="Des vict imes affirmaient avoir enduré des contact s phys iques non dés irés dans le cadre profes s ionnel"/>
      <BlockImageText title="10 %"
                      text="Des vict imes ont reçu des propos i t ions et des avances sexuelles déplacées durant leur act ivi té profes s ionnelle"/>
    </div>

    <h1 class="title">Sources</h1>
    <span class="border"></span>

    <ul class="sources">
      <li><a
          href="https://www.francetvinfo.fr/societe/violences-faites-aux-femmes/violences-sexistes-et-sexuelles-au-travail-trois-fois-plus-de-femmes-que-d-hommes-en-sont-victimes-et-notamment-en-debut-de-carriere_5491230.html">France Info</a>
      </li>
      <li><a
          href="https://www.interieur.gouv.fr/actualites/communiques-de-presse/chiffres-sur-victimes-du-sexisme-en-france-interstats-analyse">Gourvernement</a>
      </li>
      <li><a
          href="https://www.tf1info.fr/societe/comportements-sexistes-et-sexuels-au-travail-une-personne-sur-trois-en-est-victime-selon-le-ministere-de-l-interieur-2239428.html">TF1</a>
      </li>
    </ul>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import BlockImageText from "~/components/BlockImageText.vue";
import BlockTextAsideImage from "~/components/BlockTextAsideImage.vue";

export default defineComponent({
  components: {BlockTextAsideImage, BlockImageText},
})
</script>

<style scoped lang="scss">

.more {
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 600px;
    margin: 50px auto 0 auto;
  }

  .border {
    display: block;
    width: 264px;
    height: 7px;
    margin: 20px auto 50px auto;
    background-color: $purple;
  }

  .flex-image-text {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: $margin-block;
  }

  .flex-image-text-background {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 300px;
    width: 100%;
    margin: $margin-block;
    background-color: $light-purple;
  }

  .sources {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 50%;
    margin: 100px auto;
    list-style: none;

    li a {
      font-size: 18px;
      color: $purple;
      font-weight: bold;
      font-style: italic;
    }

    li:before {
      content: "-";
      color: $purple;
      margin-right: 20px;
    }
  }
}
</style>