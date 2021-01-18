<template>
  <div class="notifications">
    <div class="icon-button">
      <v-icon  v-on:click="toogleNotifs" class="icon-notif">mdi-bell</v-icon>
      <span class="nb-notif">{{notifs.length}}</span>
      <div class="notifs-list" v-if="shownotifs" data-aos="fade-left">
        <ul>
          <li v-for="(notif, index) in notifs" v-bind:key="index">
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span v-bind="attrs" v-on="on">
                    {{notif.msg.length > 18 ? `${notif.msg.slice(0, 18)}...` : notif.msg}} 
                  <svg v-on:click="removeNotif(notif.id)" class="icon icon-red" ><use xlink:href="../assets/icons.svg#icon-bin"/></svg>
                  </span>
                </template>
                <span>{{notif.msg}}</span>
            </v-tooltip>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      notifs : [
        {id : 1 , msg: "Bienvenu"},
        {id : 2 , msg: "Connexion réussi"},
        {id : 3 , msg: "Contactez moi en cliquant sur mon adresse mail dans le menu de gauche."},
        ],
      shownotifs : false
      }
  },
  methods: {
    toogleNotifs(){
      this.shownotifs = !this.shownotifs;
    },
    removeNotif(notifID){
      console.log("remove on : ",notifID)
    }
  }
}
</script>

<style>
  @import '../styles/notification/notification.css';
</style>