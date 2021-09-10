<template>
    <v-toolbar dense style="max-width: 600px">
        <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    icon
                    v-on="on"
                    v-bind="attrs"
                    @click="$emit('create-note')"
                >
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </template>
            <span>Neue Notiz erstellen</span>
        </v-tooltip>

        <v-text-field
            label="Notizen durchsuchen ..."
            hide-details="auto"
            solo
            dense
            prepend-inner-icon="mdi-magnify"
            :value="value"
            @input="$emit('input', $event)"
            class="mx-4"
        ></v-text-field>

        <v-dialog max-width="600">
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon>
                    <v-icon> mdi-sort </v-icon>
                </v-btn>
            </template>
            <template v-slot:default="dialog">
                <v-card>
                    <v-toolbar color="primary" dark>
                        <span class="text-h6">
                            <v-icon> mdi-sort </v-icon> Sortierung
                        </span>
                    </v-toolbar>

                    <v-card-text class="mt-5">
                        <v-container fluid>
                            <v-row>
                                <v-col cols="10">
                                    <v-select
                                        v-model="sortby"
                                        :items="items"
                                        solo
                                        hide-details="auto"
                                    ></v-select>
                                </v-col>
                                <v-col
                                    cols="2"
                                    class="d-flex justify-center align-center"
                                >
                                    <v-btn
                                        color="primary"
                                        @click="
                                            direction == 'asc'
                                                ? (direction = 'desc')
                                                : (direction = 'asc')
                                        "
                                    >
                                        <v-icon
                                            v-if="
                                                sortby != 'date' &&
                                                direction == 'asc'
                                            "
                                        >
                                            mdi-sort-alphabetical-ascending-variant
                                        </v-icon>
                                        <v-icon
                                            v-if="
                                                sortby != 'date' &&
                                                direction == 'desc'
                                            "
                                        >
                                            mdi-sort-alphabetical-descending-variant
                                        </v-icon>
                                        <v-icon
                                            v-if="
                                                sortby == 'date' &&
                                                direction == 'asc'
                                            "
                                        >
                                            mdi-sort-numeric-ascending-variant
                                        </v-icon>
                                        <v-icon
                                            v-if="
                                                sortby == 'date' &&
                                                direction == 'desc'
                                            "
                                        >
                                            mdi-sort-numeric-descending-variant
                                        </v-icon>
                                    </v-btn>
                                </v-col>
                                <v-col cols="12">
                                    <v-switch
                                        v-model="showImportant"
                                        label="Wichtige Notizen anzeigen"
                                    ></v-switch>
                                </v-col>
                                <v-col cols="12">
                                    <v-switch
                                        v-model="showNormal"
                                        label="Normale Notizen anzeigen"
                                    ></v-switch>
                                </v-col>
                                <v-col cols="12">
                                    <v-switch
                                        v-model="showDone"
                                        label="Erledigte Notizen anzeigen"
                                    ></v-switch>
                                </v-col>
                                <v-col cols="12">
                                    <v-switch
                                        v-model="showReadonly"
                                        label="Schreibgeschützte Notizen anzeigen"
                                    ></v-switch>
                                </v-col>
                                <v-col cols="12">
                                    <v-switch
                                        v-model="separate"
                                        label="Wichtige Notizen von normalen Notizen getrennt anzeigen"
                                    ></v-switch>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>

                    <v-card-actions class="justify-end">
                        <v-btn
                            text
                            @click="
                                dialog.value = false;
                                $emit('save', {
                                    sortby,
                                    direction,
                                    showImportant,
                                    showNormal,
                                    showDone,
                                    showReadonly,
                                    separate,
                                });
                            "
                        >
                            Übernehmen & Schließen
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>
    </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'NotesToolbar',

    props: ['value'],

    data: () => ({
        menu: false,
        sortby: 'title',
        items: [
            { value: 'title', text: 'Sortieren nach Titel' },
            { value: 'date', text: 'Sortieren nach Datum' },
            { value: 'subject', text: 'Sortieren nach Schulfach' },
        ],
        direction: 'desc',
        showImportant: true,
        showNormal: true,
        showDone: false,
        showReadonly: true,
        separate: true,
    }),
});
</script>
