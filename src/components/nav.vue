<template>
  <div class="left-menu">
      <div >
      <v-navigation-drawer
        permanent
        expand-on-hover
        :mini-variant.sync="mini"
        height="100vh"
        fixed
        dark
      >
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="../assets/me-3000px.png"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <a href="mailto:matthieu.wandolski@gmail.com">
            <v-list-item-content v-if="!mini">
              <v-list-item-title class="title ">
                Wandolski Matthieu
              </v-list-item-title>
              <v-list-item-subtitle>matthieu.wandolski@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content v-if="mini">
              <v-list-item-title class="title ">
                WM
              </v-list-item-title>
            </v-list-item-content>
            </a>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <router-link to="/">
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/employees">
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-account-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Collaborateurs</v-list-item-title>
            </v-list-item>
          </router-link>

        </v-list>
      </v-navigation-drawer>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mini:true
    };
  },

}
</script>

<style>
.left-menu{
  height: 100vh ;
  max-width: 256px;
}
a{
  text-decoration: none;
  color:white !important;
}

</style>