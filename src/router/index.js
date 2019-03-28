import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
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

export default router;
