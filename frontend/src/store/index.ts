import Vue from 'vue';
import Vuex from 'vuex';
import axios, { AxiosInstance } from 'axios';
import user from './user';
import notes from './notes';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        apiUrl:
            process.env.NODE_ENV === 'production'
                ? `${window.location.protocol}//${window.location.hostname}/api/`
                : process.env.VUE_APP_API_URL,
        axios: null as null | AxiosInstance,

        info: false,
        infoText: '',
    },
    mutations: {},
    actions: {
        init({ state, commit, dispatch }) {
            state.axios = axios.create({
                baseURL: state.apiUrl,
            });

            commit('user/init');
            dispatch('notes/init');
        },

        showInfo({ state }, info: string) {
            state.info = true;
            state.infoText = info;
        },
    },
    getters: {
        axios: (state) => state.axios,
    },
    modules: {
        user,
        notes,
    },
});

store.dispatch('init');

console.log(store.state);

export default store;
