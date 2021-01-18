<template>
  <v-app>
    <div  class="container">
      <NAV />
      <NOTIF class="hidden-sm-and-down"/>
      <v-main>
        <router-view></router-view>
      </v-main>
    </div>
  </v-app>
</template>

<script>
  import NAV from './components/nav.vue';
  import NOTIF from './components/notification.vue';

export default {
  name: 'App',
  components: {
    NAV,
    NOTIF
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container{
  display: flex
}
</style>
