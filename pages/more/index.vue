<template>
  <div class="more">
    <h1 class="title">Harcèlement sexuel dans le milieu professionnel</h1>
    <span class="border"></span>

    <div class="flex-image-text">
      <BlockImageText src="icons/more-harcelement1.png"
                      alt="logo"
                      text="Le harcèlement sexuel est une problématique sociétale grave qui touche de nombreuses personnes à travers le monde. Il se manifeste sous différentes formes, allant de commentaires déplacés à des avances non désirées, en passant par la diffusion de contenus sexuellement explicites sans consentement."/>
      <BlockImageText src="icons/more-harcelement2.png"
                      alt="logo"
                      text="Ce comportement inacceptable crée un   environnement toxique et traumatisant pour les victimes, qui peuvent subir des conséquences émotionnelles et psychologiques graves. Il est essentiel de sensibiliser la société au harcèlement sexuel, de mettre en place des politiques de prévention et de soutenir les victimes dans leur quête de justice."/>
      <BlockImageText src="icons/more-harcelement3.png"
                      alt="logo"
                      text="La lutte contre le harcèlement sexuel exige une action collective, impliquant entreprises, écoles, institutions gouvernementales et la société dans son ensemble. Les victimes doivent être encouragées à signaler ces comportements en toute confiance, avec une application rigoureuse des lois anti-harcèlement pour dissuader les agresseurs."/>

    </div>


    <div class="flex-image-text-background">
      <BlockImageText title="Verbale"
                      text="Des femmes du milieu professionnel sont victimes de comportements sexistes"/>
      <BlockImageText title="Non verbal"
                      text="Des victimes affirmaient avoir enduré des contacts physiques non désirés dans le cadre professionnel"/>
      <BlockImageText title="Physique"
                      text="Des victimes ont reçus des propositions et des avances sexuelles déplacées durant leurs activités professionnelles"/>

    </div>

    <h1 class="title">Prevention</h1>
    <span class="border"></span>

    <BlockTextAsideImage src="icons/more-prevention1.png"
                         alt="logo"
                         text="Dans une enquête, le Service statistique ministériel de la sécurité intérieure (SSMSI) dresse un état des lieux des comportements sexistes et sexuels au travail.

En 2021, un adulte sur trois ayant déjà travaillé a été confronté à de tels comportements dans le milieu professionnel.

En 2021, un adulte sur trois ayant déjà travaillé a été confronté à de tels comportements dans le milieu professionnel."/>

    <BlockTextAsideImage src="icons/more-prevention2.png"
                         alt="logo"
                         :img-left="false"
                         text="Dans une enquête, le Service statistique ministériel de la sécurité intérieure (SSMSI) dresse un état des lieux des comportements sexistes et sexuels au travail.

En 2021, un adulte sur trois ayant déjà travaillé a été confronté à de tels comportements dans le milieu professionnel.

En 2021, un adulte sur trois ayant déjà travaillé a été confronté à de tels comportements dans le milieu professionnel."/>

    <div class="flex-image-text-background">
      <BlockImageText title="52.5%"
                      text="Des femmes et hommes du milieu professionnel sont victimes de comportements sexistes"/>
      <BlockImageText title="31%"
                      text="Des victimes affirmaient avoir enduré des contacts physiques non désirés dans le cadre professionnel"/>
      <BlockImageText title="26%"
                      text="Des victimes ont reçu des propositions et des avances sexuelles déplacées durant leurs activités professionnelles"/>
    </div>

    <h1 class="title">Sources</h1>
    <span class="border"></span>

    <ul class="sources">
      <li><a
          target="_blank"
          href="https://www.francetvinfo.fr/societe/violences-faites-aux-femmes/violences-sexistes-et-sexuelles-au-travail-trois-fois-plus-de-femmes-que-d-hommes-en-sont-victimes-et-notamment-en-debut-de-carriere_5491230.html">France
        Info</a>
      </li>
      <li><a
          target="_blank"
          href="https://www.interieur.gouv.fr/actualites/communiques-de-presse/chiffres-sur-victimes-du-sexisme-en-france-interstats-analyse">Gourvernement</a>
      </li>
      <li><a
          target="_blank"
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
    gap: 20px;
    width: 90%;
    margin: auto;
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
    gap: 50px;

    .b-image-text {
      width: 25%;
    }
  }

  .sources {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 50%;
    margin: 100px auto;
    list-style: none;

    li a {
      font-size: $text-size;
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