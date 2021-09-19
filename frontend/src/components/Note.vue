<template>
    <!-- eslint-disable vue/no-parsing-error -->
    <v-card
        elevation="2"
        class="my-4 d-flex flex-column"
        :class="{ 'note-selected': selected }"
        style="width: 100%; max-width: 350px"
        @click.native="$emit('click', $event)"
        @contextmenu="$emit('contextmenu', $event)"
    >
        <v-toolbar
            :class="{
                green: done,
                orange: important && !done,
                grey: !done && !important,
                'lighten-3': true,
            }"
            class="flex-grow-0"
            flat
        >
            <span class="text-h5">{{ title }}</span>
            <v-spacer></v-spacer>
            <v-icon v-if="readonly"> mdi-lock </v-icon>
            <v-icon v-else-if="public"> mdi-web </v-icon>
        </v-toolbar>

        <v-card-text class="pt-3 flex-grow-1">
            <v-container fluid tag="div">
                <v-row>
                    <v-col cols="12">{{ subject }}</v-col>

                    <v-divider class="mt-2 mb-2"></v-divider>

                    <v-col cols="12">
                        Soll bis zum <span>{{ dateFormatted }}</span> erledigt
                        werden.
                    </v-col>

                    <v-divider class="mt-2 mb-2"></v-divider>

                    <v-col cols="12">
                        <vue-showdown
                            :markdown="content"
                            flavor="github"
                            :extensions="['showdownHighlight']"
                            class="markdown-body"
                        >
                        </vue-showdown>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>

        <v-card-actions style="mt-a">
            <v-spacer></v-spacer>

            <!-- not readonly -->

            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        v-if="!readonly"
                        icon
                        v-on="on"
                        v-bind="attrs"
                        color="primary"
                        @click="$emit('edit', id)"
                    >
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                </template>
                <span>Notiz ändern</span>
            </v-tooltip>
            <v-tooltip v-if="!readonly && !done" bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        icon
                        v-on="on"
                        v-bind="attrs"
                        color="success"
                        @click="$emit('done', id)"
                    >
                        <v-icon>mdi-check</v-icon>
                    </v-btn>
                </template>
                <span>Notiz als erledigt makieren</span>
            </v-tooltip>
            <v-tooltip v-if="!readonly && done" bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        icon
                        v-on="on"
                        v-bind="attrs"
                        color="error"
                        @click="$emit('not-done', id)"
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </template>
                <span>Notiz als unerledigt makieren</span>
            </v-tooltip>

            <!-- readonly -->

            <v-tooltip v-if="readonly && followed && !own" bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        icon
                        v-on="on"
                        v-bind="attrs"
                        @click="$emit('unsubscribe', id)"
                    >
                        <v-icon>mdi-heart-off</v-icon>
                    </v-btn>
                </template>
                <span>Notiz nicht mehr folgen</span>
            </v-tooltip>
            <v-tooltip v-if="readonly && !followed && !own" bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        icon
                        v-on="on"
                        v-bind="attrs"
                        @click="$emit('copy', id)"
                    >
                        <v-icon>mdi-content-copy</v-icon>
                    </v-btn>
                </template>
                <span>Notiz kopieren</span>
            </v-tooltip>
            <v-tooltip v-if="readonly && !followed && !own" bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        icon
                        v-on="on"
                        v-bind="attrs"
                        @click="$emit('subscribe', id)"
                    >
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>
                </template>
                <span>Notiz folgen</span>
            </v-tooltip>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

/**
 * @events click, contextmenu, edit, done, not-done, copy, subscribe, unsubscribe
 */
export default Vue.extend({
    name: 'Note',

    props: {
        id: {
            type: String,
            required: true,
        },

        title: {
            type: String,
            default: '',
        },
        important: {
            type: Boolean,
            default: false,
        },
        subject: {
            type: String,
            default: 'Sontiges',
        },
        date: {
            type: String,
            default: new Date().toISOString(),
        },
        content: {
            type: String,
            default: '',
        },
        done: {
            type: Boolean,
            default: false,
        },

        readonly: {
            type: Boolean,
            default: false,
        },
        public: {
            type: Boolean,
            default: false,
        },
        followed: {
            type: Boolean,
            default: false,
        },
        own: {
            type: Boolean,
            default: false,
        },

        selected: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        dateFormatted() {
            return `${new Date(this.date).getDate()}.${
                new Date(this.date).getMonth() + 1
            }.${new Date(this.date).getFullYear()}`;
        },
    },

    methods: {
        log(t: any) {
            console.log(t);
        },
    },
});
</script>

<style lang="scss">
.note-selected {
    border: 3px solid #1976d2 !important;
}

.theme--light.v-application code {
    background-color: rgba(0, 0, 0, 0);
}
</style>
