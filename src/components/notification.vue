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
.notifications{
  position: fixed;
  z-index: 10;
  top: 3%;
  right: 1%;
}

.icon-button{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-button:hover{
  cursor: pointer;
}

.icon-notif{
  height: 1.5rem;
  width: 1.5rem;
}

.nb-notif{
  position: absolute;
  top: -8px;
  right: -10px;
  background-color: red;
  color: white;
  font-weight: bold;
  border-radius: 100%;
  width: 1.2rem;
  height: 1.2rem;
  font-size: 0.8rem ;
}

.notifs-list{
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  text-align: left;
  width: 250px;
  top: 35px;
  right: 5px;
}

ul{
  list-style: none;
  padding-left: 0 !important;
}

li{
  height: 54px;
  width: 100%;
  padding: 15px 5px;
  overflow: hidden;
}

li:hover{
   background-color: rgba(121, 121, 121, 0.5);

}

  .icon{
    float: right;
    height: 1.2rem;
    width: 1.2rem;
    margin-right: 5%;

  }
   .icon:hover{
     cursor: pointer;
   }
  .icon-red{
    fill :red;
  }

</style>