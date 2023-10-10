<template>
<div class="question-box">
    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis.</h3>
</div>

<div class="main-answer-flex">

<p class="answer-box"> <input type="radio" id="reponse1" name="reponse"  value="right" /><label for="reponse1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed risus leo. Nulla facilisi. Nunc eget lacus augue. Vestibulum mattis at erat eget rhoncus. Donec posuere ante turpis, vel semper quam tincidunt in. Fusce iaculis sed ligula in facilisis. Integer lectus quam, efficitur mattis gravida quis, ornare eget lorem.</label> </p>
<p class="answer-box"> <input type="radio" id="reponse2" name="reponse"  value="wrong" /><label for="reponse2">Lorem ipsum dolor sit amet</label> </p>
<p class="answer-box"> <input type="radio" id="reponse3" name="reponse"  value="wrong" /><label for="reponse3">Lorem ipsum dolor sit amet</label> </p>
<p class="answer-box"> <input type="radio" id="reponse4" name="reponse"  value="wrong" /><label for="reponse4">Lorem ipsum dolor sit amet</label> </p>
</div>
</template>

<style lang="scss">
html{
    padding-left: 1em;
    padding-right: 1em;

}

.question-box{
    display: flex;
    flex:auto;
    background-color: $main-color;
    padding-left: 1em;
    padding-right: 1em;
}
.main-answer-flex{
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: $secundary-color;
    padding-left: 1em;
    padding-right: 1em;

}
.answer-box{
    
}
</style>