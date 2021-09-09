<template>
    <v-card
        elevation="2"
        class="ml-4 mr-4 mt-4 mb-4 note-selected"
        style="width: 100%; max-width: 350px"
        @contextmenu="$emit('contextmenu', $event)"
    >
        <!--   @mousedown="pressStart"
        @mouseup="pressStop"
        @mouseleave="pressStop"
        @touchstart="pressStart"
        @touchend="pressStop"
        @touchcancel="pressStop"   -->

        <v-toolbar
            :class="{
                green: done,
                orange: important && !done,
                grey: !done && !important,
                'lighten-3': true,
            }"
            flat
        >
            <span class="text-h5">{{ title }}</span>
        </v-toolbar>
        <!-- <v-card-title
            :class="`headline ${
                note.done ? 'green' : note.important ? 'orange' : 'grey'
            } lighten-4`"
        >
            {{ note.title }}
            <v-spacer></v-spacer>
            <v-checkbox
                v-if="duringChecking"
                v-model="checked"
                color="primary"
                hide-details
                class="mt-0 ml-4"
                @click="checkNote"
            ></v-checkbox>
        </v-card-title> -->

        <v-card-text class="pt-3">
            <v-container fluid tag="div">
                <v-row>
                    <v-col cols="12">{{ subject }}</v-col>

                    <v-divider class="mt-2 mb-2"></v-divider>

                    <v-col cols="12">
                        Soll bis zum <span>{{ dateFormatted }}</span> erledigt
                        werden.
                    </v-col>

                    <v-divider class="mt-2 mb-2"></v-divider>

                    <v-col cols="12">{{ content }}</v-col>
                </v-row>
            </v-container>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-on="on" v-bind="attrs" color="primary">
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                </template>
                <span>Notiz ändern</span>
            </v-tooltip>
            <v-tooltip v-if="!done" bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-on="on" v-bind="attrs" color="done">
                        <v-icon>mdi-check</v-icon>
                    </v-btn>
                </template>
                <span>Notiz als erledigt makieren</span>
            </v-tooltip>
            <v-tooltip v-if="done" bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-on="on" v-bind="attrs" color="error">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </template>
                <span>Notiz als unerledigt makieren</span>
            </v-tooltip>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Note',
    data: () => ({
        title: 'Test',
        important: false,
        subject: 'Deutsch',
        date: new Date().toISOString(),
        content: '- Test',
        done: false,
    }),

    computed: {
        dateFormatted() {
            return `${new Date(this.date).getDate()}.${
                new Date(this.date).getMonth() + 1
            }.${new Date(this.date).getFullYear()}`;
        },
    },
});
</script>

<style lang="scss">
.note-selected {
    border: 3px solid #1976d2 !important;
}
</style>
