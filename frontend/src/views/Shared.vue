<template>
    <div class="center" @contextmenu="showContextMenu($event)">
        <!-- Notes -->

        <v-container fluid>
            <v-row justify="space-around">
                <v-col
                    cols="12"
                    xl="4"
                    lg="5"
                    md="6"
                    v-for="note in notesSorted"
                    :key="note.id"
                    class="d-flex justify-center"
                >
                    <note
                        :id="note.id"
                        :title="note.title"
                        :important="note.important"
                        :subject="note.subject"
                        :date="note.date"
                        :content="note.content"
                        :done="note.done"
                        :readonly="true"
                        :public="true"
                        @contextmenu.stop="showContextMenu($event, note.id)"
                        @copy="copy"
                        @subscribe="subscribe"
                        @unsubscribe="unsubscribe"
                    />
                </v-col>
            </v-row>
        </v-container>

        <!-- Contextmenu -->

        <v-menu
            v-model="contextMenu"
            :position-x="contextMenuX"
            :position-y="contextMenuY"
            absolute
            offset-y
        >
            <v-list dense>
                <v-subheader>Sortieroptionen</v-subheader>
                <v-list-item link @click="sort.key = 'title'">
                    <v-list-item-icon class="mr-3">
                        <v-icon>
                            mdi-sort-alphabetical-descending-variant
                        </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Nach Titel</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link @click="sort.key = 'date'">
                    <v-list-item-icon class="mr-3">
                        <v-icon> mdi-sort-numeric-descending-variant </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Nach Datum</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-subheader v-if="note"> Notizoptionen </v-subheader>

                <v-list-item link v-if="!followed && note" @click="copy">
                    <v-list-item-icon class="mr-3">
                        <v-icon> mdi-content-copy </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Notiz kopieren</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link v-if="!followed && note" @click="subscribe">
                    <v-list-item-icon class="mr-3">
                        <v-icon> mdi-heart </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Notiz folgen</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link v-if="followed && note" @click="unsubscribe">
                    <v-list-item-icon class="mr-3">
                        <v-icon> mdi-heart </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            Notiz nicht mehr folgen
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-menu>

        <!-- not-autherized dialog -->

        <v-dialog v-model="notAutherizedDialog" max-width="600">
            <v-card>
                <v-toolbar color="error" dark>
                    <span class="text-h6"> Sie sind nicht angemeldet! </span>
                </v-toolbar>
                <v-card-text class="pt-4">
                    Wenn Sie eine Notiz kopieren oder folgen wollen, müssen Sie
                    mit Ihrem School-Notes Account angemeldet sein.
                </v-card-text>
                <v-card-actions class="justify-end">
                    <v-btn text @click="notAutherizedDialog = false">
                        Schließen
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                        dark
                        @click="
                            $router.push({ path: '/register' }).catch(() => {})
                        "
                    >
                        Registrieren
                    </v-btn>
                    <v-btn
                        dark
                        @click="
                            $router.push({ path: '/login' }).catch(() => {})
                        "
                    >
                        Anmelden
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Note from '@c/Note.vue';
import store from '../store';

export default Vue.extend({
    name: 'Public',
    components: {
        Note,
    },

    data: () => ({
        contextMenu: false,
        contextMenuX: 0,
        contextMenuY: 0,
        contextMenuItems: [] as {
            icon: string;
            text: string;
            click: () => void;
        }[],
        note: null as null | string,
        followed: false,
        sharedNotes: [] as Note[],
        notAutherizedDialog: false,

        sort: {
            direction: 'desc',
            key: 'title',
        },
    }),

    computed: {
        autherized: () => store.getters['user/autherized'],
        notes: () => [],
        notesSorted() {
            const sn = this.sort.direction == 'asc' ? -1 : 1;
            // eslint-disable-next-line
            return this.sharedNotes.sort((a: any, b: any) => {
                if (a[this.sort.key] < b[this.sort.key]) return -1 * sn;
                else if (a[this.sort.key] > b[this.sort.key]) return 1 * sn;
                return 0;
            });
        },
    },

    methods: {
        showContextMenu(e: any, note?: string) {
            e?.preventDefault();
            this.contextMenu = false;
            this.contextMenuX = e.clientX;
            this.contextMenuY = e.clientY;

            if (note) this.note = note;
            else this.note = null;

            this.$nextTick(() => {
                this.contextMenu = true;
            });
        },

        // getNote(id: string): Note | undefined {
        //     return this.notesSorted.filter((note: any) => note.id == id)[0];
        // },

        async copy(id: string) {
            if (!this.autherized) {
                this.notAutherizedDialog = true;
                return;
            }

            try {
                await store.getters.axios.put(
                    `/notes/copy/${id}`,
                    {},
                    {
                        headers: {
                            Authorization: store.getters['user/jwt'],
                        },
                    },
                );
                store.dispatch('showInfo', 'Sie folgen nun einer Notiz.');
            } catch (error) {
                console.log(error);
            }
        },
        async subscribe(id: string) {
            if (!this.autherized) {
                this.notAutherizedDialog = true;
                return;
            }

            console.log(id);

            try {
                await store.getters.axios.put(
                    `/notes/subscribe/${id}`,
                    {},
                    {
                        headers: {
                            Authorization: store.getters['user/jwt'],
                        },
                    },
                );
                store.dispatch('showInfo', 'Sie folgen nun einer Notiz.');
            } catch (error) {
                console.log(error);
            }
        },
        async unsubscribe(id: string) {
            if (!this.autherized) {
                this.notAutherizedDialog = true;
                return;
            }
            try {
                await store.getters.axios.put(
                    `/notes/unsubscribe/${id}`,
                    {},
                    {
                        headers: {
                            Authorization: store.getters['user/jwt'],
                        },
                    },
                );
                store.dispatch('showInfo', 'Sie folgen nun einer Notiz.');
            } catch (error) {
                console.log(error);
            }
        },
    },

    async mounted() {
        try {
            const notes: string[] = JSON.parse(
                Object.fromEntries(
                    new URLSearchParams(window.location.search).entries(),
                ).notes,
            );

            for await (const id of notes) {
                const { data } = await store.getters.axios.get(
                    `notes/public/${id}`,
                );
                this.sharedNotes.push(data);
            }
        } catch (error) {
            console.log(error);
        }
    },
});
</script>
