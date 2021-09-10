import { AxiosInstance } from 'axios';
import { Module } from 'vuex';

interface State {
    notes: Note[];
}

const noteModule = {
    namespaced: true,

    state: {
        notes: [],
    },

    actions: {
        async init({ state }) {
            try {
                const { data } = await (
                    this.getters.axios as AxiosInstance
                ).get('notes', {
                    headers: {
                        Authorization: this.getters['user/jwt'],
                    },
                });

                state.notes = [...data.own, ...data.readonly];
            } catch (error) {} // eslint-disable-line
        },
    },

    getters: {
        notes: (state) => state.notes,
    },
} as Module<State, any>;

export default noteModule;
