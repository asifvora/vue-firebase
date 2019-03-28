import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import { isAuthenticated } from '@/utils/Auth';

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/Home.vue'),
            meta: {
                authRequired: false
            }
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/About.vue'),
            meta: {
                authRequired: true
            }
        },
        {
            path: '*',
            name: 'not-found',
            component: () => import('@/components/NotFound/NotFound.vue')
        }
    ]
});

router.beforeEach((to, from, next) => {
    isAuthenticated();
    if (to.matched.some(record => record.meta.authRequired)) {
        if (!store.getters['Auth/isAuthenticated']) {
            next({ path: '/' });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.authRequired === false)) {
        if (store.getters['Auth/isAuthenticated']) {
            next({ path: '/about' });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
