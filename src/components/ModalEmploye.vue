<template>
    <div id="id01" class="w3-modal">
    <div class="w3-modal-content w3-animate-top">
      <header class="w3-container w3-dark-grey"> 
        <span onclick="document.getElementById('id01').style.display='none'" 
        class="w3-button w3-display-topright">&times;</span>
        <h2>{{title}}</h2>
      </header>
      <div class="w3-container">
       <input type="text" id='name' :value="name"  @input="inputChange"/>
       <input type="text" id='age' :value="age"  @input="inputChange"/>
       <input type="text" id='salary' :value="salary"  @input="inputChange"/>
      </div>
      {{name}},
      {{age}},
      {{salary}}
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
         console.log(`add employe`)
      },
    }
}
</script>

<style scoped>


 
</style>