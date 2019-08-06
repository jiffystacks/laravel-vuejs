<template>
    <v-app>
        <template v-if="!currentUser">
            <core-topbar />
            <div id="main">
                <div class="content">
                    <router-view></router-view>
                </div>
            </div>
            <core-footer/>
        </template>
        <template v-else>
            <core-auth-topbar />
            <core-drawer />
            <v-content>
            <div id="core-view">
              <v-fade-transition mode="out-in">
                <router-view />
              </v-fade-transition>
            </div>
            <core-footer/>
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
    export default {
        name: 'main-app',
        computed: {
            currentUser() {
                return this.$store.getters.currentUser
            }
        },
        mounted(){
            console.log(this.$options.components);
        }
    }
</script>
