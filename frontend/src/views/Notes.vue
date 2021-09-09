<template>
    <div class="center" @contextmenu="showContextMenu($event)">
        <note @contextmenu.stop="showContextMenu($event, 'test')" />
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
                        <v-icon> mdi-sort-alphabetical-descending-variant </v-icon>
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
    }),

    components: {
        Note,
    },

    methods: {
        showContextMenu(e: any, note?: string) {
            e.preventDefault();
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
    },
});
</script>
