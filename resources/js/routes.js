import Home from './views/Home.vue';
import Login from './views/auth/Login.vue';
import Dashboard from './views/admin/Dashboard.vue';


export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/dashboard',
        component: Dashboard,
        meta: {
            requiresAuth: true
        }
    }
    /*{
        path: '/customers',
        component: CustomersMain,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '/',
                component: CustomersList
            },
            {
                path: 'new',
                component: NewCustomer
            },
            {
                path: ':id',
                component: Customer
            }
        ]
    }*/
];