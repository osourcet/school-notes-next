import { Module } from 'vuex';

interface State {
    autherized: boolean;
    username: string | null;
    jwt: string | null;
}

const userModule = {
    namespaced: true,

    state: {
        autherized: false,
        username: null,
        jwt: null,
    },

    mutations: {
        init: (state) => {
            const username = localStorage.getItem('school-notes-username');
            const jwt = localStorage.getItem('school-notes-token');

            if (!username || !jwt) return;

            state.autherized = true;
            state.username = username;
            state.jwt = jwt;
        },
        login: (state, { username, jwt }) => {
            state.autherized = true;
            state.username = username;
            state.jwt = jwt;
        },
        logout: (state) => (state.autherized = false),
    },

    actions: {
        async login({ commit, dispatch }, { username, jwt }) {
            console.log('login');
            commit('login', { username, jwt });
            dispatch('notes/init', null, { root: true });
        },
        async logout({ commit }) {
            console.log('logout');
            commit('logout');
            localStorage.removeItem('school-notes-token');
        },
    },

    getters: {
        autherized: ({ autherized }) => autherized,
        userinfo: (state) => {
            if (!state.autherized || !state.username || !state.jwt) return null;
            return state.username;
        },
        jwt: ({ jwt }) => `Bearer ${jwt}`,
    },
} as Module<State, any>;

export default userModule;
