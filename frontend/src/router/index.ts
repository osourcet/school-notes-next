import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Welcome from '@/views/Welcome.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Help from '@/views/Help.vue';
import Info from '@/views/Info.vue';

import Public from '@/views/Public.vue';
import Shared from '@/views/Shared.vue';

import Notes from '@/views/Notes.vue';
import CreateNote from '@/views/CreateNote.vue';
import EditNote from '@/views/EditNote.vue';
import Settings from '@/views/Notes.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    { path: '/', component: Welcome },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/public', component: Public },
    { path: '/shared', component: Shared },
    { path: '/help', component: Help },
    { path: '/info', component: Info },

    { path: '/notes', component: Notes },
    { path: '/notes/create', component: CreateNote },
    { path: '/notes/edit', component: EditNote },
    { path: '/settings', component: Settings },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
