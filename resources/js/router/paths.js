import Dashboard from '../views/Dashboard'
import Home from '../views/Home'

export default [
  {
    path: '/',
    name: 'index',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: require('../views/Login').default
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/user-profile',
    name: 'user-profile',
    component: require('../views/UserProfile').default
  },
  {
    path: '/table-list',
    name: 'table-list',
    component: require('../views/TableList').default
  },
  {
    path: '/typography',
    name: 'typography',
    component: require('../views/Typography')
  },
  {
    path: '/icons',
    name: 'icons',
    component: require('../views/Icons')
  },
  {
    path: '/maps',
    name: 'maps',
    component: require('../views/Maps')
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: require('../views/Notifications')
  },
  {
    path: '/upgrade',
    name: 'upgrade',
    component: require('../views/Upgrade').default
  }
]