<template>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" class="text-center indigo--text">
        <h1>User Profile</h1>
        <v-card v-if="user" elevation="4" class="ma-8 pa-12">
          <h2>Name: {{user.name}}</h2>
          <h3>Email: {{user.email}}</h3>
          <h3>Phone: {{user.sel}}</h3>
          <h3>Designation: {{user.role}}</h3>
        </v-card>
        <v-card v-else elevation="4" class="ma-8 pa-12">
          <h2>You Are Not An User. Please 
            <NuxtLink to="/login">
              Login
            </NuxtLink>
          </h2>
        </v-card>
      </v-col>
    </v-row>
  </template>
  
  <script>
  export default {
    name: 'profile',
    layout: 'user',
    computed: {
        user (){
            return this.$store.state.user.user
        }
    },
  }
  </script>
  