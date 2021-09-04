import Vue from 'vue';
import Vuex from 'vuex';
import axios, { AxiosInstance } from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        apiUrl:
            process.env.NODE_ENV === 'production'
                ? `${window.location.protocol}//${window.location.hostname}/api/`
                : process.env.VUE_APP_API_URL,
        axios: undefined as undefined | AxiosInstance,
    },
    mutations: {},
    actions: {
        init({ state }) {
            state.axios = axios.create({
                baseURL: state.apiUrl,
            });
        },
    },
    getters: {
        axios: (state) => state.axios,
    },
    modules: {},
});

store.dispatch('init');

console.log(store.state);

export default store;
