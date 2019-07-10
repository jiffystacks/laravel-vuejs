<template>
  <v-toolbar
  color="primary lighten-1">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">
        <router-link class="white--text" to="/">My Vue App</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
        <template v-if="!currentUser">
            <v-btn flat to="/login">Login</v-btn>
            <v-btn flat to="/register">Register</v-btn>
        </template>
        <template v-else>
            <v-btn flat>Contact US</v-btn>
            <v-btn flat>{{ currentUser.name }}</v-btn>
            <v-btn flat @click.prevent="logout" class="">Logout</v-btn>
        </template>
    </v-toolbar-items>
  </v-toolbar>
</template>


<script>
    export default {
        name: 'app-topbar',
        methods: {
            logout() {
                this.$store.commit('logout');
                this.$router.push('/login');
            }
        },
        computed: {
            currentUser() {
                return this.$store.getters.currentUser
            }
        }
    }
</script>