<template>
    <v-app>
        <template v-if="!currentUser">
            <Topbar />
            <div id="main">
                <div class="content">
                    <router-view></router-view>
                </div>
            </div>
            <Footer/>
        </template>
        <template v-else>
            <AuthTopbar />
            <Drawer />
            <v-content>
            <div id="core-view">
              <v-fade-transition mode="out-in">
                <router-view />
              </v-fade-transition>
            </div>
            <Footer/>
          </v-content>
        </template>
    </v-app>
</template>

<style lang="scss">
@import '../styles/index.scss';

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>

<script>
    import Footer from './core/Footer.vue';
    import Topbar from './core/Topbar.vue';
    import AuthTopbar from './core/AuthTopbar.vue';
    import Drawer from './core/Drawer.vue';

    export default {
        name: 'main-app',
        components: {Footer, Topbar, AuthTopbar, Drawer},
        computed: {
            currentUser() {
                return this.$store.getters.currentUser
            }
        }
    }
</script>
