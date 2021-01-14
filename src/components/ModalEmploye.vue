<template>
    <div id="id01" class="w3-modal">
    <div class="w3-modal-content w3-animate-top">
      <header class="w3-container w3-black"> 
        <span onclick="document.getElementById('id01').style.display='none'" 
        class="w3-button w3-display-topright">&times;</span>
        <h2>{{title}}</h2>
      </header>
      <div class="w3-container">
        <v-text-field
          class="custom-input"
          label="Name"
          hide-details="auto"
          id='name' 
          :value="name"  
          @input="inputChange"
        />
        <v-text-field
          class="custom-input"
          label="Age"
          hide-details="auto"
          id='age' 
          :value="age"  
          @input="inputChange"
        />
        <v-text-field
          class="custom-input"
          label="Salaire"
          hide-details="auto"
          id='salary' 
          :value="salary"  
          @input="inputChange"
        />
      </div>
      <footer class="w3-container footer">
            <v-btn
              class="btn"
              color="primary"
              elevation="3"
              v-on:click="save"
            >
              Enregistrer
            </v-btn>
            <v-btn
              class="btn"
              elevation="3"
              v-on:click="cancel"
            >
              Annuler
            </v-btn>
      </footer>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    data : ()=>{
      return {

          name : "",
          age : 18,
          salary : 1200
        }
    },
     computed: {
      ...mapState('employees', ['employees'] )
    },
    props: ['title', 'IdToUpdate'],
    watch: { 
      IdToUpdate: function(id) { 
        if(id !== null){
          let idEmployeToUpdate = this.employees.filter(e => e.id === id)[0];
          this.name = idEmployeToUpdate.employee_name;
          this.age = idEmployeToUpdate.employee_age;
          this.salary = idEmployeToUpdate.employee_salary;
        }else{
          this.name = "";
          this.age = 18;
          this.salary = 1350;
        }
      }
    },
    methods: {
      inputChange(event){
        this[event.target.id] = event.target.value;
      },
      save(){
         console.log(`update or add employe`)
      },
      cancel(){
        document.getElementById('id01').style.display='none';
      }
    }
}
</script>

<style scoped>

.w3-modal-content{
  width: 35%;
}

.custom-input{
  padding: 1.5rem;
}

.footer{
  display: flex;
  justify-content: flex-end;
}

.btn{
  margin: 1rem;
}
 
</style>