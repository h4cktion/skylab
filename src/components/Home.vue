<template>
  <div>
    <h1>{{$t('dashboard.title')}}</h1>
     <v-parallax height=600 src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>
     <section data-aos="fade-in">
        <Card />
     </section>
 <!--    <div class="cards-container" > -->
      <section data-aos="fade-in" >
      <Card data-aos="fade-in"/>
      </section>
      <section data-aos="fade-left">
      <Card />
      </section>
      <section data-aos="fade-right" >
      <Card />
      </section>
<!--     </div> -->

  </div>
</template>

<script>
  import Card from './card.vue';

  export default {
    components:{
      Card
    },
  }
</script>

<style>
.cards-container{
  width: 70vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}

section{
  margin: 0 auto;
  width: 70vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>