<template>
    <div id="id01" class="w3-modal">
    <div class="w3-modal-content w3-animate-top">
      <header class="w3-container w3-dark-grey"> 
        <span onclick="document.getElementById('id01').style.display='none'" 
        class="w3-button w3-display-topright">&times;</span>
        <h2>{{title}}</h2>
      </header>
      <div class="w3-container">
       <input type="text" v-model="employe.name" />
       <input type="text" v-model="employe.age"/>
       <input type="text" v-model="employe.salaire"/>
      </div>
      
    </div>
  </div>
</template>

<script>
  //import { mapState } from 'vuex';
  export default {
    data : ()=>{
      return {
        employe : {
          name : "",
          age : 18,
          salaire : 1200
        }
        }
    },
    props: ['title', 'employeToUpdate'],
    computed:{
      fillEmploye(){
        console.log("title : ",this.title)
        console.log("employe : ",this.employeToUpdate)
        return this.employeToUpdate
      }
    },
    methods: {
      
      save(){
         console.log(`add employe`)
      },
    }
}
</script>

<style scoped>


 
</style>