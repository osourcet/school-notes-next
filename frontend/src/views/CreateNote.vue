<template>
    <div class="center">
        <v-card elevation="2" style="width: 100%" max-width="600">
            <v-toolbar color="primary" dark class="text-h6">
                Notiz erstellen
            </v-toolbar>

            <v-form v-model="valid" ref="create">
                <v-container class="my-6" fluid>
                    <v-row no-gutters>
                        <v-col cols="12">
                            <v-text-field
                                solo
                                label="Titel"
                                prepend-inner-icon="mdi-page-layout-header"
                                v-model="title"
                                :rules="[rules.isRequired]"
                                hide-details="auto"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-checkbox
                                v-model="important"
                                label="Wichtige Notiz"
                            ></v-checkbox>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                solo
                                label="Schulfach"
                                prepend-inner-icon="mdi-school"
                                v-model="subject"
                                :rules="[rules.isRequired]"
                                hide-details="auto"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" class="mt-8">
                            <v-dialog
                                ref="date"
                                v-model="modal"
                                :return-value.sync="date"
                                persistent
                                width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        solo
                                        v-model="dateFormatted"
                                        label="Datum"
                                        prepend-inner-icon="mdi-calendar"
                                        readonly
                                        :rules="[rules.isRequired]"
                                        v-bind="attrs"
                                        v-on="on"
                                        hide-details="auto"
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="date" scrollable>
                                    <v-btn text @click="modal = false">
                                        Abbrechen
                                    </v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="$refs.date.save(date)"
                                    >
                                        OK
                                    </v-btn>
                                </v-date-picker>
                            </v-dialog>
                        </v-col>
                        <v-col cols="12" class="mt-8">
                            <v-textarea
                                v-model="content"
                                solo
                                name="input-7-4"
                                label="Inhalt"
                                prepend-inner-icon="mdi-page-layout-body"
                                :hint="`<a target='_blank' href='https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax'> Markdown </a> wird unterstützt.`"
                                persistent-hint
                            >
                                <template v-slot:message="{ message }">
                                    <span v-html="message"></span>
                                </template>
                            </v-textarea>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
            <v-card-actions>
                <v-btn
                    text
                    @click="$router.push({ path: '/notes' }).catch(() => {})"
                >
                    Zurück
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="create"> Notiz erstellen </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script lang="ts">
import { AxiosInstance } from 'axios';
import Vue from 'vue';
import store from '../store';

export default Vue.extend({
    name: 'CreateNote',

    data: () => ({
        valid: true,
        title: '',
        important: false,
        subject: '',
        date: '',
        content: '',
        rules: {
            isRequired: (v: any) =>
                !!v || 'Dieses Feld muss ausgefüllt werden!',
        },
        modal: false,
    }),

    computed: {
        autherized: () => store.getters['user/autherized'],
        dateFormatted: {
            get() {
                if (!this.date) return null;

                const [year, month, day] = this.date.split('-');
                return `${day}.${month}.${year}`;
            },
            set() {}, // eslint-disable-line
        },
    },

    methods: {
        async create() {
            (this.$refs.create as any).validate();

            if (!this.valid) return;

            console.log(!!this.important);

            try {
                await (store.getters.axios as AxiosInstance).put(
                    '/notes/create',
                    {
                        title: this.title,
                        important: !!this.important,
                        subject: this.subject,
                        date: new Date(this.date).toISOString(),
                        content: this.content,
                        done: false,
                    },
                    {
                        headers: {
                            Authorization: store.getters['user/jwt'],
                        },
                    },
                );

                store.dispatch('showInfo', 'Sie haben eine Notiz erstellt.');
                this.$router.push({ path: '/notes' }).catch(() => {}); // eslint-disable-line
            } catch (error) {
                console.log(error.response.data);
            }
        },
    },

    mounted() {
        (this.$refs.create as any).reset();
        if (!this.autherized) this.$router.push({ path: '/' }).catch(() => {}); // eslint-disable-line
    },
});
</script>
