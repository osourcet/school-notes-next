<template>
    <div class="center">
        <v-card elevation="2" style="width: 100%" max-width="400">
            <v-toolbar color="primary" dark class="text-h5">
                Anmeldung
            </v-toolbar>

            <v-form v-model="valid" ref="register">
                <v-container class="my-6" fluid>
                    <v-row no-gutters>
                        <v-col cols="12">
                            <v-text-field
                                solo
                                label="Benutzername"
                                prepend-inner-icon="mdi-account"
                                v-model="username"
                                :rules="[isRequired]"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                solo
                                label="Passwort"
                                prepend-inner-icon="mdi-account-key"
                                type="password"
                                v-model="password"
                                :rules="[isRequired]"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-checkbox
                                v-model="saveUserAuthentication"
                                label="Anmeldung speichern"
                            ></v-checkbox>
                        </v-col>
                        <v-col cols="12">
                            <v-btn
                                block
                                text
                                @click="
                                    $router
                                        .push({ path: '/register' })
                                        .catch(() => {})
                                "
                                disabled
                            >
                                Passwort vergessen
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
            <v-card-actions>
                <v-btn
                    text
                    @click="$router.push({ path: '/register' }).catch(() => {})"
                >
                    Registrieren
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login"> Anmelden </v-btn>
            </v-card-actions>
        </v-card>

        <!-- <v-dialog v-model="errorDialog" width="500">
            <v-card>
                <v-card-title class="text-h5 white--text red lighten-2">
                    Fehler
                </v-card-title>

                <v-card-text class="mt-3">
                    Sie haben ein falsches Passwort eingeben.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="errorDialog = false">
                        OK
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog> -->
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '../store';

export default Vue.extend({
    name: 'Login',

    data: () => ({
        valid: true,
        username: '',
        password: '',
        saveUserAuthentication: false,
        isRequired: (v: any) => !!v || 'Dieses Feld muss ausgefüllt werden!',
    }),

    computed: {
        autherized: () => store.getters['user/autherized'],
    },

    methods: {
        async login() {
            (this.$refs.register as any).validate();

            if (!this.valid) return;

            try {
                const { data } = await store.getters.axios?.post('user/login', {
                    username: this.username,
                    password: this.password,
                });

                store.commit('user/login', {
                    username: this.username,
                    jwt: data.token,
                });

                localStorage.setItem('school-notes-token', data.token);

                this.$router.push({ path: '/' }).catch(() => {}); // eslint-disable-line
            } catch (error) {
                console.log(error.response);
            }
        },
    },

    mounted() {
        (this.$refs.register as any).reset();
        if (this.autherized) this.$router.push({ path: '/' }).catch(() => {}); // eslint-disable-line
    },
});
</script>
