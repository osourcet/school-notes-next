<template>
    <div class="center">
        <v-card elevation="2" style="width: 100%" max-width="400">
            <v-toolbar color="primary" dark class="text-h5">
                Registrierung
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
                                :rules="[
                                    rules.isRequired,
                                    rules.isNotEmail,
                                    isUsernameUsed,
                                ]"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" v-if="!schoolAccount">
                            <v-text-field
                                solo
                                label="E-Mail"
                                prepend-inner-icon="mdi-email"
                                v-model="email"
                                :rules="
                                    schoolAccount
                                        ? []
                                        : [
                                              rules.isRequired,
                                              rules.isEmail,
                                              isEmailUsed,
                                          ]
                                "
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                solo
                                label="Passwort"
                                prepend-inner-icon="mdi-account-key"
                                type="password"
                                v-model="password"
                                :rules="[
                                    rules.isRequired,
                                    isPartOfUsername,
                                    isPartOfEmail,
                                ]"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                solo
                                label="Passwort bestätigen"
                                prepend-inner-icon="mdi-account-key"
                                type="password"
                                v-model="passwordConfirm"
                                :rules="[rules.isRequired, isPasswordValid]"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-checkbox
                                v-model="schoolAccount"
                                label="Schulkonto"
                                disabled
                            ></v-checkbox>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
            <v-card-actions>
                <v-btn
                    text
                    @click="$router.push({ path: '/login' }).catch(() => {})"
                >
                    Anmelden
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="register"> Registrieren </v-btn>
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

/* eslint-disable no-control-regex */
const emailRegEx =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
/* eslint-enable no-control-regex */

export default Vue.extend({
    name: 'Register',

    data: () => ({
        valid: true,
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
        schoolAccount: false,
        rules: {
            isRequired: (v: any) =>
                !!v || 'Dieses Feld muss ausgefüllt werden!',
            isEmail: (v: any) =>
                emailRegEx.test(v) || 'Die Eingabe ist keine E-Mail Addresse!',
            isNotEmail: (v: any) =>
                !emailRegEx.test(v) || 'Die Eingabe ist eine E-Mail Addresse!',
        },
        usedUsernames: [] as string[],
        usedEmails: [] as string[],
    }),

    computed: {
        autherized: () => store.getters['user/autherized'],
    },

    methods: {
        isUsernameUsed(v: any) {
            return (
                !this.usedUsernames.includes(v) ||
                'Dieser Benutzername wird schon verwendet!'
            );
        },
        isEmailUsed(v: any) {
            return (
                !this.usedEmails.includes(v) ||
                'Diese E-Mail Addresse wird schon verwendet!'
            );
        },
        isPartOfUsername(v: any) {
            return (
                !new RegExp(this.username).test(v) ||
                'Das Passwort darf nicht Ihren Benutzernamen beinhalten!'
            );
        },
        isPartOfEmail(v: any) {
            return (
                !new RegExp(this.email).test(v) ||
                'Das Passwort darf nicht Ihre E-Mail-Adresse beinhalten!'
            );
        },
        isPasswordValid() {
            return (
                this.password == this.passwordConfirm ||
                'Die Passwörter müssen übereinstimmen!'
            );
        },
        async register() {
            (this.$refs.register as any).validate();

            if (!this.valid) return;

            try {
                await store.getters.axios?.post('user/register', {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                });

                this.$router.push({ path: '/login' }).catch(() => {}); // eslint-disable-line
            } catch (error) {
                console.log(error.response.status);
            }
        },
        // async searchUsername() {},
        // async searchEmail() {},
    },

    mounted() {
        (this.$refs.register as any).reset();
        if (this.autherized) this.$router.push({ path: '/' }).catch(() => {}); // eslint-disable-line
    },
});
</script>
