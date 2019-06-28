/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

// Components
import './components'

// Plugins
import './plugins'

// Sync router with store
import { sync } from 'vuex-router-sync' 

import App from './App.vue'

import router from './router'
import store from './store'

// Sync store with router
sync(store, router)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
