<template>
    <div>
          <v-toolbar
          color="primary lighten-1">
            <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
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

          <v-navigation-drawer
              temporary absolute
              v-model="drawer"
              app
              class="hidden-sm-and-up"
            >
              <v-list>
                <v-list-tile v-for="item in items"
                    :key="item.title" @click.stop="drawer = !drawer" :to="item.path">
                  <v-list-tile-action>
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
         
                </v-list-tile>
              </v-list>
            </v-navigation-drawer>
        </div>
</template>

<style scoped>
.mart70{
    margin-top: 70px !important;
}
.v-list{
    margin-top: 30px;
}
</style>

<script>
    export default {
        name: 'app-topbar',
        data: () => ({
            drawer: false,
            items: [
              { title: 'Home', icon: 'dashboard', path:'/' },
              { title: 'Login', icon: 'question_answer', path:'/login' },
              { title: 'Register', icon: 'question_answer', path:'/register' }
            ],
        }),
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