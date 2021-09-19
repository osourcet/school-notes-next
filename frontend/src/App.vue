<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <v-btn
                elevation="4"
                class="white mx-4"
                icon
                x-large
                @click="$router.push({ path: '/' }).catch(() => {})"
            >
                <v-icon size="26"> $vuetify.icons.schoolnotes </v-icon>
            </v-btn>

            <v-btn
                class="ml-4"
                icon
                v-if="autherized"
                @click="$router.push({ path: '/notes' }).catch(() => {})"
            >
                <v-icon> mdi-notebook-outline </v-icon>
            </v-btn>

            <v-btn
                class="ml-2"
                icon
                v-if="autherized"
                @click="$router.push({ path: '/settings' }).catch(() => {})"
                disabled
            >
                <v-icon> mdi-cog-outline </v-icon>
            </v-btn>

            <v-btn
                class="ml-2"
                icon
                @click="$router.push({ path: '/help' }).catch(() => {})"
            >
                <v-icon> mdi-help-circle-outline </v-icon>
            </v-btn>

            <v-btn
                class="ml-2"
                icon
                @click="$router.push({ path: '/info' }).catch(() => {})"
            >
                <v-icon> mdi-information-outline </v-icon>
            </v-btn>
            <v-spacer></v-spacer>

            <v-btn
                elevation="2"
                class="mr-4"
                v-if="!autherized"
                @click="$router.push({ path: '/register' }).catch(() => {})"
            >
                Registrieren
            </v-btn>
            <v-btn
                elevation="2"
                v-if="!autherized"
                @click="$router.push({ path: '/login' }).catch(() => {})"
            >
                Anmelden
            </v-btn>
            <v-btn
                elevation="2"
                v-if="autherized"
                @click="$store.dispatch('user/logout')"
            >
                Abmelden
            </v-btn>
        </v-app-bar>

        <v-main>
            <router-view />
        </v-main>

        <v-snackbar v-model="info" :multi-line="true">
            <span> {{ infoText }} </span>

            <template v-slot:action="{ attrs }">
                <v-btn color="orange" text v-bind="attrs" @click="info = false">
                    Schließen
                </v-btn>
            </template>
        </v-snackbar>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import store from './store';

export default Vue.extend({
    name: 'App',

    computed: {
        autherized: () => store.getters['user/autherized'],
        info: {
            get: () => store.state.info,
            set: (val) => (store.state.info = val),
        },
        infoText: () => store.state.infoText,
    },
});
</script>

<style lang="sass">
.center
    margin: auto
    height: 100%
    width: 80%
    display: flex
    justify-content: center
    align-items: center
</style>
