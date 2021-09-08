import { Module } from 'vuex';

interface State {
    autherized: boolean;
    username: string | null;
    jwt: string | null;
}

const noteModule = {
    namespaced: true,

    state: {
        autherized: false,
        username: null,
        jwt: null,
    },

    mutations: {
        login: (state, { username, jwt }) => {
            state.autherized = true;
            state.username = username;
            state.jwt = jwt;

            console.log('test');
        },
        logout: (state) => (state.autherized = false),
    },

    getters: {
        autherized: ({ autherized }) => autherized,
        userinfo: (state) => {
            if (!state.autherized || !state.username || !state.jwt) return null;
            return state.username;
        },
    },
} as Module<State, any>;

export default noteModule;
