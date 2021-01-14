<template>
  <div class="w3-container">
    <div class="table">
      <div class="row"  >
        <div class="cell title">
          Name
        </div>
        <div class="cell title">
          Age
        </div>
        <div class="cell title">
          Salaire
        </div>
        <div class="cell title">
           <svg  v-on:click="addEmploye" class="icon icon-green"><use xlink:href="../assets/icons.svg#icon-user-plus"/></svg>
        </div>
      </div>
      <div class="row"  v-for="employe in employees" :key="employe.id">
        <div class="cell">
          {{ employe.employee_name }}
        </div>
        <div class="cell">
          {{ employe.employee_age }}
        </div>
        <div class="cell">
          {{ employe.employee_salary }} €
        </div>
        <div class="cell actions">
          <svg  v-on:click="update(employe)" class="icon"><use xlink:href="../assets/icons.svg#icon-pencil"/></svg>
          <svg v-on:click="remove(employe)" class="icon icon-red" ><use xlink:href="../assets/icons.svg#icon-bin"/></svg>
        </div>
          
      </div>
    </div>
    <ModalEmploye v-bind:title="modalTitle" v-bind:IdToUpdate="idEmployeToUpdate"/>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import ModalEmploye from './ModalEmploye';
  export default {
    data: ()=>{
      return {
        modalTitle : "",
        idEmployeToUpdate : null
      }
    },
    components: {
      ModalEmploye
    },
    computed: {
      ...mapState('employees', ['employees'] )
    },
    created(){
      this.$store.dispatch('employees/fetchEmployees')
    },
    methods: {
      remove(employe){
         this.$store.dispatch('employees/deleteEmployee',employe)
      },
      update(employe){
        this.idEmployeToUpdate = employe.id;
        this.showModal("Modifier un employé")
      },
      addEmploye(){
        this.idEmployeToUpdate = null
        this.showModal("Ajouter un employé")
      },
      showModal(title){
        this.modalTitle = title;

        document.getElementById('id01').style.display='block';
      }
    }
}
</script>

<style scoped>

  .table{
    font-size: 1.2rem;
    width: 50vw;
    margin: 0 auto;
    border:1px solid #EEEEEE;
  }
  .row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #EEEEEE;
  }
  .row:nth-of-type(odd) {
		background:white;
	}

  .cell{
    width: 100%;
    padding:1.1rem 0;
  }

  .title{
    background:#000;
    color: white;
  }
  .actions{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
  .icon{
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
  .icon-green{
    height: 1.3rem;
    width: 1.3rem;
    float: right;
    fill :rgb(160, 229, 197);;
  }
</style>