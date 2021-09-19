<template>
    <div
        class="center my-5"
        style="align-items: start"
        @contextmenu="showContextMenu($event)"
    >
        <v-container fluid>
            <!-- Toolbar -->

            <v-row>
                <v-col cols="12" class="d-flex justify-center">
                    <notes-toolbar
                        v-model="search"
                        :sort="sort"
                        @create-note="
                            $router
                                .push({ path: '/notes/create' })
                                .catch(() => {})
                        "
                        @save="sort = $event"
                    ></notes-toolbar>
                </v-col>
            </v-row>

            <!-- Notes -->

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
                        :readonly="note.readonly"
                        :public="note.public"
                        @contextmenu.stop="showContextMenu($event, note.id)"
                        @unsubscribe="unsubscribe"
                        @edit="
                            $router.push({
                                path: '/notes/edit',
                                query: { id: $event },
                            })
                        "
                        @done="done"
                        @not-done="notDone"
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
                <v-subheader>Erstelloptionen</v-subheader>
                <v-list-item
                    link
                    @click="
                        $router.push({ path: '/notes/create' }).catch(() => {})
                    "
                >
                    <v-list-item-icon class="mr-3">
                        <v-icon> mdi-plus </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Notiz erstellen</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-subheader>Sortieroptionen</v-subheader>
                <v-list-item
                    link
                    @click="
                        () => {
                            sort = {
                                sortby: 'title',
                                direction: 'desc',
                                showImportant: sort.showImportant,
                                showNormal: sort.showNormal,
                                showDone: sort.showDone,
                                showReadonly: sort.showReadonly,
                                separate: sort.separate,
                            };
                        }
                    "
                >
                    <v-list-item-icon class="mr-3">
                        <v-icon>
                            mdi-sort-alphabetical-descending-variant
                        </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Nach Titel</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item
                    link
                    @click="
                        () => {
                            sort = {
                                sortby: 'date',
                                direction: 'desc',
                                showImportant: sort.showImportant,
                                showNormal: sort.showNormal,
                                showDone: sort.showDone,
                                showReadonly: sort.showReadonly,
                                separate: sort.separate,
                            };
                        }
                    "
                >
                    <v-list-item-icon class="mr-3">
                        <v-icon> mdi-sort-numeric-descending-variant </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Nach Datum</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-subheader v-if="contextMenuItems.length > 0 && note != null">
                    Notizoptionen
                </v-subheader>
                <v-list-item
                    v-for="(item, index) in contextMenuItems"
                    :key="index"
                    link
                    @click="item.click"
                >
                    <v-list-item-icon class="mr-3">
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title
                            v-text="item.text"
                        ></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-menu>

        <!-- Share Dialog -->

        <v-dialog v-model="dialogShare" max-width="600">
            <v-card>
                <v-toolbar color="primary" dark>
                    <span class="text-h6">
                        <v-icon> mdi-share-variant </v-icon> Notiz teilen
                    </span>
                </v-toolbar>

                <v-card-text class="mt-5">
                    <v-container fluid>
                        <v-row>
                            <v-col cols="12">
                                <v-alert type="info">
                                    Die Notiz ist öffentlich. <br />
                                    Sie kann von jedem angeschaut werden!
                                </v-alert>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="dialogShareLink"
                                    label="Notizen durchsuchen ..."
                                    hide-details="auto"
                                    solo
                                    class="mx-4"
                                    readonly
                                    append-icon="mdi-content-copy"
                                    append-outer-icon="mdi-qrcode"
                                    @click:append="
                                        () => {
                                            navigator.clipboard.writeText(
                                                dialogShareLink,
                                            );
                                            $store.dispatch(
                                                'showInfo',
                                                'Link kopiert.',
                                            );
                                        }
                                    "
                                    @click:append-outer="
                                        dialogShareQRCode = !dialogShareQRCode
                                    "
                                ></v-text-field>
                            </v-col>
                            <v-col
                                v-if="dialogShareQRCode"
                                cols="12"
                                class="d-flex justify-center"
                            >
                                <qr-code
                                    :value="dialogShareLink"
                                    :size="200"
                                    render-as="svg"
                                />
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>

                <v-card-actions class="justify-end">
                    <v-btn color="primary" @click="makeNotePrivate(note)">
                        <v-icon class="mr-3"> mdi-web-off </v-icon>
                        Notiz nicht mehr teilen
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn text @click="dialogShare = false"> OK </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Note from '@c/Note.vue';
import NotesToolbar from '@c/NotesToolbar.vue';
import QrCode from 'qrcode.vue';
import store from '../store';
import { AxiosInstance, AxiosResponse } from 'axios';

export default Vue.extend({
    name: 'Notes',

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
        notesSorted: [] as Note[],

        sort: {
            sortby: 'title',
            direction: 'desc',
            showImportant: true,
            showNormal: true,
            showDone: false,
            showReadonly: true,
            separate: true,
        },

        search: '',

        dialogShare: false,
        dialogShareLink: '',
        dialogShareQRCode: false,

        navigator: navigator,
    }),

    components: {
        Note,
        NotesToolbar,
        QrCode,
    },

    computed: {
        autherized: () => store.getters['user/autherized'],
        notes: () => store.getters['notes/notes'] as Note[],
    },

    methods: {
        //#region Contextmenu

        showContextMenu(e: any, note?: string) {
            e?.preventDefault();
            this.contextMenu = false;
            this.contextMenuX = e.clientX;
            this.contextMenuY = e.clientY;

            if (note) this.note = note;
            else this.note = null;

            this.generateContextMenuItems();

            this.$nextTick(() => {
                this.contextMenu = true;
            });
        },

        generateContextMenuItems() {
            this.contextMenuItems = [];
            if (this.note == null) return;

            // this.contextMenuItems.push({
            //     icon: 'mdi-checkbox-marked-outline',
            //     text: 'Auswählen',
            //     click: () => {}, // eslint-disable-line
            // });

            this.contextMenuItems.push({
                icon: 'mdi-pencil',
                text: 'Bearbeiten',
                click: () =>
                    this.$router.push({
                        path: '/notes/edit',
                        query: { id: this.note },
                    }), // eslint-disable-line
            });

            this.contextMenuItems.push({
                icon: 'mdi-file-pdf-box',
                text: 'Als PDF herunterladen',
                click: async () => {
                    store.dispatch('showInfo', 'Notiz wird als PDF erstellt.');

                    try {
                        // Dowload the PDF
                        const pdf = (await (
                            store.getters.axios as AxiosInstance
                        ).get(`/notes/pdf/${this.note}`, {
                            headers: {
                                Authorization: store.getters['user/jwt'],
                            },
                            responseType: 'blob',
                        })) as AxiosResponse<Blob>;

                        // Create a URL to the PDF
                        const url = window.URL.createObjectURL(
                            new Blob([pdf.data]),
                        );

                        // Save the PDF
                        const link = document.createElement('a');
                        link.href = url;
                        link.setAttribute(
                            'download',
                            `notiz-${
                                store.getters['notes/notes'].filter(
                                    (n: Note) => n.id === this.note,
                                )[0].title
                            }.pdf`,
                        );
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    } catch (error) {
                        console.log(error.response.data);
                        store.dispatch(
                            'showInfo',
                            'Beim erstellen der PDF Datei ist ein Fehler aufgetreten.',
                        );
                    }
                },
            });

            this.contextMenuItems.push({
                icon: 'mdi-share-variant',
                text: 'Teilen',
                click: async () => {
                    try {
                        // Make Note public
                        await (store.getters.axios as AxiosInstance).put(
                            `/notes/public/${this.note}`,
                            {},
                            {
                                headers: {
                                    Authorization: store.getters['user/jwt'],
                                },
                            },
                        );

                        this.dialogShareLink = encodeURI(
                            `${window.location.protocol}//${
                                window.location.host
                            }/shared?notes=${JSON.stringify([this.note])}`,
                        );

                        this.dialogShare = true;
                    } catch (error) {
                        console.log(error.response.data);
                        store.dispatch(
                            'showInfo',
                            'Die Notiz konnte nicht geteilt werden.',
                        );
                    }
                },
            });

            if (
                (store.getters['notes/notes'] as Note[]).filter(
                    (n) => n.id === this.note,
                )[0].public
            )
                this.contextMenuItems.push({
                    icon: 'mdi-web-off',
                    text: 'Teilen beenden',
                    click: () => this.makeNotePrivate(this.note as string),
                });

            this.contextMenuItems.push({
                icon: 'mdi-delete',
                text: 'Löschen',
                click: async () => {
                    try {
                        // Delete Note
                        await (store.getters.axios as AxiosInstance).delete(
                            `/notes/delete/${this.note}`,
                            {
                                headers: {
                                    Authorization: store.getters['user/jwt'],
                                },
                            },
                        );
                        store.dispatch(
                            'showInfo',
                            'Eine Notiz wurde gelöscht.',
                        );
                    } catch (error) {
                        console.log(error.response.data);
                        store.dispatch(
                            'showInfo',
                            'Die Notiz konnte nicht gelöscht werden.',
                        );
                    }
                },
            });
        },

        //#endregion

        //#region Notes

        filterSearch(notes: Note[], search: string) {
            const regex = new RegExp(search);
            return notes.filter(
                (n) => regex.test(n.title) || regex.test(n.content),
            );
        },

        splitNotes(notes: Note[]) {
            const done = notes.filter((n) => n.done && !n.readonly);
            const important = notes.filter(
                (n) => n.important && !n.readonly && !n.done,
            );
            const readonly = notes.filter((n) => n.readonly);
            const normal = notes.filter(
                (n) => !n.important && !n.readonly && !n.done,
            );

            return { done, important, normal, readonly };
        },

        splitReadOnlyNotes(notes: Note[]) {
            const done = notes.filter((n) => n.done);
            const important = notes.filter((n) => n.important && !n.done);
            const normal = notes.filter((n) => !n.important && !n.done);

            return { done, important, normal };
        },

        sortNotes(notes: Note[]) {
            const sn = this.sort.direction == 'asc' ? -1 : 1;
            // eslint-disable-next-line
            return notes.sort((a: any, b: any) => {
                if (a[this.sort.sortby] < b[this.sort.sortby]) return -1 * sn;
                else if (a[this.sort.sortby] > b[this.sort.sortby])
                    return 1 * sn;
                return 0;
            });
        },

        makeNotesSorted() {
            this.notesSorted = [];

            const filtered =
                this.search == ''
                    ? this.notes
                    : this.filterSearch(this.notes, this.search);

            const splited = this.splitNotes(filtered);

            const notes: Note[] = [];

            if (this.sort.showReadonly) {
                const { done, important, normal } = this.splitReadOnlyNotes(
                    splited.readonly,
                );
                splited.done.push(...done);
                splited.important.push(...important);
                splited.normal.push(...normal);
            }

            if (
                this.sort.showImportant &&
                this.sort.showNormal &&
                !this.sort.separate
            )
                notes.push(
                    ...this.sortNotes([
                        ...splited.important,
                        ...splited.normal,
                    ]),
                );
            else if (this.sort.showImportant)
                notes.push(...this.sortNotes(splited.important));

            if (this.sort.showNormal && this.sort.separate)
                notes.push(...this.sortNotes(splited.normal));

            if (this.sort.showDone) notes.push(...this.sortNotes(splited.done));

            this.notesSorted = notes;
        },

        async unsubscribe(id: string) {
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
                store.dispatch('showInfo', 'Sie folgen nicht mehr der Notiz.');
            } catch (error) {
                console.log(error);
            }
        },

        async makeNotePrivate(id: string) {
            try {
                // Make Note private
                await (store.getters.axios as AxiosInstance).put(
                    `/notes/private/${id}`,
                    {},
                    {
                        headers: {
                            Authorization: store.getters['user/jwt'],
                        },
                    },
                );

                this.dialogShare = false;
                store.dispatch(
                    'showInfo',
                    'Die Notiz ist privat und nicht mehr geteilt.',
                );
            } catch (error) {
                console.log(error.response.data);
            }
        },

        async done(id: string) {
            try {
                await store.getters.axios.put(
                    `/notes/edit/${id}/done`,
                    {
                        value: true,
                    },
                    {
                        headers: {
                            Authorization: store.getters['user/jwt'],
                        },
                    },
                );
                store.dispatch(
                    'showInfo',
                    'Sie haben eine Notiz als erledigt markiert.',
                );
            } catch (error) {
                console.log(error);
            }
        },
        async notDone(id: string) {
            try {
                await store.getters.axios.put(
                    `/notes/edit/${id}/done`,
                    {
                        value: false,
                    },
                    {
                        headers: {
                            Authorization: store.getters['user/jwt'],
                        },
                    },
                );
                store.dispatch(
                    'showInfo',
                    'Sie haben eine Notiz als unerledigt markiert.',
                );
            } catch (error) {
                console.log(error);
            }
        },

        //#endregion
    },

    mounted() {
        if (!this.autherized)
            this.$router.push({ path: '/login' }).catch(() => {}); // eslint-disable-line
        this.makeNotesSorted();
    },

    watch: {
        search() {
            this.makeNotesSorted();
        },
        notes() {
            this.makeNotesSorted();
        },
        sort() {
            this.makeNotesSorted();
        },
    },
});
</script>
