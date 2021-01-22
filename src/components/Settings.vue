<template>
  <div>
    <h1>Settings</h1>
      <v-data-table
        :headers="headers"
        :items="users"
        :items-per-page="5"
        class="elevation-1"
      >
      <template v-slot:[`item.isAdmin`]="{ item }">
        {{ getValue(item.isAdmin) }}
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
      </v-data-table>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
export default {
  data:()=>{
    return {
      headers: [
        { text: 'Nom', value: 'lastName' },
        { text: 'Prenom', value: 'name' },
        { text: 'Email', value: 'mail' },
        { text: 'Admin', value: "isAdmin" },
        { text: 'Action', value: 'actions', sortable: false },
      ]
    }
},
  computed: {
        ...mapState('users', ['users'] )
  },
  created(){
    this.$store.dispatch('users/fetchUsers')
  },
  methods:{
    getValue(admin){
      return admin ? "Oui" : "Non";
    },
    editItem(user){
       console.log("edit user :", user)
    },
    deleteItem(user){
      console.log("delete user :", user)
    }
  }

}
</script>

<style>
</style>