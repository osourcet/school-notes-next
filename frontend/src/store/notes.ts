import { AxiosInstance } from 'axios';
import { Module } from 'vuex';
import { io, Socket } from 'socket.io-client';

interface State {
    notes: Note[];
    socket: Socket | null;
}

const noteModule = {
    namespaced: true,

    state: {
        notes: [],
        socket: null,
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

                // create SocketIo connection
                const socket = io({
                    extraHeaders: {
                        authorization: this.getters['user/jwt'],
                    },
                });

                // listening events
                socket.on('notes:changed', async () => {
                    const { data } = await (
                        this.getters.axios as AxiosInstance
                    ).get('notes', {
                        headers: {
                            Authorization: this.getters['user/jwt'],
                        },
                    });

                    state.notes = [...data.own, ...data.readonly];
                });

                socket.on('note:created', async (id: string) => {
                    console.log('note:created');

                    const { data } = await (
                        this.getters.axios as AxiosInstance
                    ).get(`notes/own/${id}`, {
                        headers: {
                            Authorization: this.getters['user/jwt'],
                        },
                    });

                    state.notes.push(data);
                });

                socket.on('note:changed', async (id: string) => {
                    const { data } = await (
                        this.getters.axios as AxiosInstance
                    ).get(`notes/own/${id}`, {
                        headers: {
                            Authorization: this.getters['user/jwt'],
                        },
                    });

                    state.notes = state.notes.filter((n) => n.id !== id);
                    state.notes.push(data);
                });

                socket.on('note:deleted', async (id: string) => {
                    state.notes = state.notes.filter((n) => n.id !== id);
                });

                socket.on('note-readonly:subscribed', async (id: string) => {
                    const { data } = await (
                        this.getters.axios as AxiosInstance
                    ).get(`notes/public/${id}`);

                    state.notes.push(data);
                });

                socket.on('note-readonly:changed', async (id: string) => {
                    const { data } = await (
                        this.getters.axios as AxiosInstance
                    ).get(`notes/public/${id}`);

                    state.notes = state.notes.filter((n) => n.id !== id);
                    state.notes.push(data);
                });

                socket.on('note-readonly:unsubscribed', async (id: string) => {
                    state.notes = state.notes.filter((n) => n.id !== id);
                });

                state.socket = socket;
            } catch (error) {
                console.log(error);
            } // eslint-disable-line
        },
    },

    getters: {
        notes: (state) => state.notes,
    },
} as Module<State, any>;

export default noteModule;
