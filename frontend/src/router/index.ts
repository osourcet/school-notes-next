import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Welcome from '@/views/Welcome.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Info from '@/views/Info.vue';

import Shared from '@/views/Shared.vue';

import Notes from '@/views/Notes.vue';
import Settings from '@/views/Notes.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    { path: '/', component: Welcome },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/shared', component: Shared },
    { path: '/info', component: Info },

    { path: '/notes', component: Notes },
    { path: '/settings', component: Settings },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
