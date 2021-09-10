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
                    <notes-toolbar v-model="search"></notes-toolbar>
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
        <v-menu
            v-model="contextMenu"
            :position-x="contextMenuX"
            :position-y="contextMenuY"
            absolute
            offset-y
        >
            <v-list dense>
                <v-subheader>Erstelloptionen</v-subheader>
                <v-list-item link @click="$emit('create-file')">
                    <v-list-item-icon class="mr-3">
                        <v-icon> mdi-plus </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Notiz erstellen</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-subheader>Sortieroptionen</v-subheader>
                <v-list-item link @click="$emit('create-file')">
                    <v-list-item-icon class="mr-3">
                        <v-icon>
                            mdi-sort-alphabetical-descending-variant
                        </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Nach Titel</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link @click="$emit('create-file')">
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
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Note from '@c/Note.vue';
import NotesToolbar from '@c/NotesToolbar.vue';
import store from '../store';

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
    }),

    components: {
        Note,
        NotesToolbar,
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

            this.contextMenuItems.push({
                icon: 'mdi-checkbox-marked-outline',
                text: 'Auswählen',
                click: () => {}, // eslint-disable-line
            });

            this.contextMenuItems.push({
                icon: 'mdi-pencil',
                text: 'Bearbeiten',
                click: () => {}, // eslint-disable-line
            });

            this.contextMenuItems.push({
                icon: 'mdi-share',
                text: 'Teilen',
                click: () => {}, // eslint-disable-line
            });

            this.contextMenuItems.push({
                icon: 'mdi-delete',
                text: 'Löschen',
                click: () => {}, // eslint-disable-line
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

            if (this.sort.showNormal)
                notes.push(...this.sortNotes(splited.normal));

            if (this.sort.showDone) notes.push(...this.sortNotes(splited.done));

            this.notesSorted = notes;
        },

        //#endregion
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
