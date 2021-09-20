<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <v-app-bar-nav-icon
                v-if="$vuetify.breakpoint.xs"
                class="ml-0"
                @click="drawer = true"
            ></v-app-bar-nav-icon>

            <v-spacer v-if="$vuetify.breakpoint.xs"></v-spacer>

            <v-btn
                elevation="4"
                class="white mx-4"
                icon
                large
                @click="$router.push({ path: '/' }).catch(() => {})"
            >
                <v-icon size="26"> $vuetify.icons.schoolnotes </v-icon>
            </v-btn>

            <v-btn
                class="ml-2"
                icon
                v-if="autherized && !$vuetify.breakpoint.xs"
                @click="$router.push({ path: '/notes' }).catch(() => {})"
            >
                <v-icon> mdi-notebook-outline </v-icon>
            </v-btn>

            <v-btn
                class="ml-2"
                icon
                v-if="autherized && !$vuetify.breakpoint.xs"
                @click="$router.push({ path: '/settings' }).catch(() => {})"
                disabled
            >
                <v-icon> mdi-cog-outline </v-icon>
            </v-btn>

            <v-btn
                v-if="!$vuetify.breakpoint.xs"
                class="ml-2"
                icon
                @click="$router.push({ path: '/help' }).catch(() => {})"
            >
                <v-icon> mdi-help-circle-outline </v-icon>
            </v-btn>

            <v-btn
                v-if="!$vuetify.breakpoint.xs"
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
                class="mr-4"
                v-if="!autherized"
                @click="$router.push({ path: '/login' }).catch(() => {})"
            >
                Anmelden
            </v-btn>

            <v-menu v-if="autherized" bottom min-width="200px" rounded offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn elevation="2" class="mr-0" icon large v-on="on">
                        <v-avatar color="orange"  size="44">
                            <span class="white--text text-h5">{{
                                initials
                            }}</span>
                        </v-avatar>
                    </v-btn>
                </template>
                <v-card>
                    <v-list-item-content>
                        <div
                            class="
                                mx-auto
                                text-center
                                d-flex
                                flex-column
                                justify-center
                                align-center
                                pa-4
                            "
                        >
                            <h3>{{ username }}</h3>
                            <span class="text-caption mt-1">
                                {{ email }}
                            </span>
                            <v-btn
                                elevation="2"
                                block
                                @click="$store.dispatch('user/logout')"
                                class="my-4"
                                disabled
                            >
                                Einstellungen
                            </v-btn>
                            <v-btn
                                elevation="2"
                                dark
                                block
                                @click="$store.dispatch('user/logout')"
                            >
                                Abmelden
                            </v-btn>
                        </div>
                    </v-list-item-content>
                </v-card>
            </v-menu>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute temporary>
            <div class="d-flex justify-center my-5">
                <v-btn
                    elevation="4"
                    class="white"
                    icon
                    x-large
                    @click="
                        closeDrawer(() =>
                            $router.push({ path: '/' }).catch(() => {}),
                        )
                    "
                >
                    <v-icon size="26"> $vuetify.icons.schoolnotes </v-icon>
                </v-btn>
            </div>
            <v-list nav dense>
                <v-list-item-group active-class="primary--text">
                    <v-list-item
                        @click="
                            closeDrawer(() =>
                                $router
                                    .push({ path: '/notes' })
                                    .catch(() => {}),
                            )
                        "
                    >
                        <v-list-item-icon>
                            <v-icon> mdi-notebook-outline </v-icon>
                        </v-list-item-icon>
                        <v-list-item-title> Notizen </v-list-item-title>
                    </v-list-item>

                    <v-list-item
                        disabled
                        @click="
                            closeDrawer(() =>
                                $router
                                    .push({ path: '/settings' })
                                    .catch(() => {}),
                            )
                        "
                    >
                        <v-list-item-icon>
                            <v-icon> mdi-cog-outline </v-icon>
                        </v-list-item-icon>
                        <v-list-item-title> Einstellungen </v-list-item-title>
                    </v-list-item>

                    <v-list-item
                        @click="
                            closeDrawer(() =>
                                $router.push({ path: '/help' }).catch(() => {}),
                            )
                        "
                    >
                        <v-list-item-icon>
                            <v-icon> mdi-help-circle-outline </v-icon>
                        </v-list-item-icon>
                        <v-list-item-title> Hilfe </v-list-item-title>
                    </v-list-item>

                    <v-list-item
                        @click="
                            closeDrawer(() =>
                                $router.push({ path: '/info' }).catch(() => {}),
                            )
                        "
                    >
                        <v-list-item-icon>
                            <v-icon> mdi-information-outline </v-icon>
                        </v-list-item-icon>
                        <v-list-item-title> Info </v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

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

    data: () => ({
        drawer: false,
    }),

    computed: {
        autherized: () => store.getters['user/autherized'] as boolean,
        username: () =>
            store.getters[
                'user/userinfo'
            ] /* store.getters['user/username'] */ as string,
        initials() {
            return this.username.substring(0, 2).toUpperCase();
        },
        email: () => '', // store.getters['user/email'] as string,
        info: {
            get: () => store.state.info,
            set: (val) => (store.state.info = val),
        },
        infoText: () => store.state.infoText,
    },

    methods: {
        closeDrawer(cb: () => unknown) {
            this.drawer = false;
            cb();
        },
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
