import Vue from 'vue';
import VueRouter from 'vue-router';
import Test from '@/views/Test.vue';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('@/views/main/Main.vue')
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    },
    {
        path: '/cute',
        name: 'Cute',
        component: () => import('@/views/spearate/cute.tmpl.jsx')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
