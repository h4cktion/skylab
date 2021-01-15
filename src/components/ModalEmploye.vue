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
          v-model="employee.employee_name"
        />
        <v-text-field
          class="custom-input"
          label="Age"
          hide-details="auto"
          v-model="employee.employee_age"
        />
        <v-text-field
          class="custom-input"
          label="Salaire"
          hide-details="auto"
          v-model="employee.employee_salary"  
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
          employee : {
            id : null,
            employee_name : "",
            employee_age : null,
            employee_salary : null,
          }
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
          this.employee.id = this.IdToUpdate;
          this.employee.employee_name = idEmployeToUpdate.employee_name;
          this.employee.employee_age = idEmployeToUpdate.employee_age;
          this.employee.employee_salary = idEmployeToUpdate.employee_salary;
        }else{
          this.employee.id = null;
          this.employee.employee_name = "";
          this.employee.employee_age = null;
          this.employee.employee_salary = null;
        }
      }
    },
    methods: {
      save(){
         this.$store.dispatch('employees/updateEmployee',this.employee);
         this.cancel();
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