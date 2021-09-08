import Vue from 'vue';
import Vuex from 'vuex';
import axios, { AxiosInstance } from 'axios';
import user from './user';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        apiUrl:
            process.env.NODE_ENV === 'production'
                ? `${window.location.protocol}//${window.location.hostname}/api/`
                : process.env.VUE_APP_API_URL,
        axios: null as null | AxiosInstance,
    },
    mutations: {},
    actions: {
        init({ state, dispatch }) {
            state.axios = axios.create({
                baseURL: state.apiUrl,
            });

            // dispatch('login', {
            //     username: 'user3',
            //     email: 'user3@gmail.com',
            //     password: 'test',
            // });
        },

        async verify() {
            console.log('verify');
        },

        async login(
            { state, commit },
            { username, password }: { username: string; password: string },
        ) {
            console.log('login');
            const r = await state.axios?.post('user/login', {
                username,
                password,
            });

            if (r) {
                commit('user/login', { username, jwt: r.data.token });
                localStorage.setItem('school-notes-token', r.data.token);
            }
        },

        async logout({ commit }) {
            console.log('logout');
            commit('user/logout');
            localStorage.removeItem('school-notes-token');
        },
    },
    getters: {
        axios: (state) => state.axios,
    },
    modules: {
        user,
    },
});

store.dispatch('init');

console.log(store.state);

export default store;
