import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/js/stores';

import Home from '@/js/components/Home';
import Clients from '@/js/pages/clients';
import Loans from '@/js/pages/loans';
import Payments from '@/js/pages/payments';
import ClientsPayments from '@/js/pages/clientsPayments';
import UserEdit from '@/js/pages/User';
import Login from '@/js/pages/LoginPage';
import View from '@/js/views/View';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '',
            component: View,
            children: [
                {
                    path: '/',
                    name: 'Inicio - Financiera Patito S.A',
                    component: Home
                },
                {
                    path: '/clients',
                    name: 'Clientes',
                    component: Clients
                },
                {
                    path: '/loans',
                    name: 'Préstamos',
                    component: Loans
                },
                {
                    path: '/payments',
                    name: 'Pagos',
                    component: Payments
                },
                {
                    path: '/payments/:id',
                    name: 'Pagos Cliente',
                    component: ClientsPayments
                },
                {
                    path: '/user-edit',
                    name: 'Editar Usuario',
                    component: UserEdit
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = store.state.isAuthenticated;
    if (to.name !== 'login' && !isAuthenticated) next({ name: 'login'});
    else if (to.name === 'login' && isAuthenticated) next({ name: 'home' });
    else next();
});

export default router;
