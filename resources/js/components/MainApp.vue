<template>
    <v-app>
        <Topbar />
        <div id="main">
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
        <Footer/>
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

    export default {
        name: 'main-app',
        components: {Footer, Topbar}
    }
</script>
