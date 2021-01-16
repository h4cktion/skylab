<template>
  <div>
    <h1>Welcome on SKYLAB X</h1>
     <v-parallax height=600 src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>
    <div class="cards-container">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>

  </div>
</template>

<script>
  import Card from './card.vue';
  export default {
    components:{
      Card
    }
  }
</script>

<style>
.cards-container{
  width: 70vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
</style>