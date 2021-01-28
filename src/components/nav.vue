<template>
<div>
  <div class="left-menu hidden-sm-and-down" >
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
            <v-list-item-content v-if="mini"  v-bind:style="{ marginLeft : '-5px' }">
              <v-list-item-title class="title">
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
          <router-link to="/settings">
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-cog</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Paramètres</v-list-item-title>
            </v-list-item>
          </router-link>

        </v-list>
      <Language-switcher />
      </v-navigation-drawer>
    </div>

  <div class="mobil-nav">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="menu-icon"></v-app-bar-nav-icon>

      <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
        <router-link to="/">
            <v-list-item>
               <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item>
         </router-link>
        <router-link to="/employees">
          <v-list-item>
            <v-list-item-icon>
                <v-icon>mdi-account-multiple</v-icon>
              </v-list-item-icon>
            <v-list-item-title>Collaborateurs</v-list-item-title>
          </v-list-item>
        </router-link>
        <router-link to="/settings">
          <v-list-item>
            <v-list-item-icon>
                <v-icon>mdi-cog</v-icon>
              </v-list-item-icon>
            <v-list-item-title>Paramètres</v-list-item-title>
          </v-list-item>
        </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</div>
</div>
</template>

<script>
import LanguageSwitcher from './languageSwitcher.vue';
export default {
  components:{
    LanguageSwitcher
  },
  data() {
    return {
      mini:true,
      drawer: false,
      group: null,
    };
  },
  watch: {
      group () {
        this.drawer = false
      },
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
.mobil-nav{
  position: fixed;
  z-index: 10;
  width: 100vw;
  height: 100vh;
}

.menu-icon{
  position: fixed !important;
  right: 2% !important;
}


</style>