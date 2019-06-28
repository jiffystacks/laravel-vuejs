import Vue from 'vue'
import Router from 'vue-router'
import StoreData from '../store';
import {initialize} from '../helpers';

// Routes
import paths from './paths'

Vue.use(Router)

const store = new Vuex.Store(StoreData);

// Create a new router
const router = new Router({
  mode: 'history',
  routes: paths,
})

initialize(store, router);

export default router