<template>
    <div class="center">
        <v-card
            class="d-flex flex-column"
            max-width="400"
            style="min-height: 580px"
        >
            <v-toolbar color="primary" dark class="text-h6 flex-grow-0">
                {{ currentTitle }}
            </v-toolbar>

            <v-window
                class="flex-grow-1 d-flex"
                style="min-height: 100%; min-width: 100%"
                v-model="step"
            >
                <v-window-item
                    :value="1"
                    style="min-height: 100%; min-width: 100%"
                    class="pa-4"
                >
                    <v-container
                        fluid
                        style="min-height: 100%; min-width: 100%"
                    >
                        <v-row>
                            <v-col
                                cols="12"
                                class="d-flex justify-center align-center"
                            >
                                <logo />
                            </v-col>
                            <v-col
                                cols="12"
                                class="
                                    d-flex
                                    justify-center
                                    align-center
                                    text-h3
                                    font-weight-light
                                "
                            >
                                Willkommen
                            </v-col>
                            <v-col
                                cols="12"
                                class="d-flex justify-center align-center"
                            >
                                School Notes ist ein App, in der man Notizen /
                                Erinnerungen, z. B. für Hausaufgaben und Test,
                                anlegen kann. <br /><br />Klicke auf "Weiter" um
                                das Tutorial zu starten.
                            </v-col>
                        </v-row>
                    </v-container>
                </v-window-item>

                <v-window-item
                    :value="2"
                    style="min-height: 100%; min-width: 100%"
                    class="pa-4"
                >
                    <v-container
                        fluid
                        style="min-height: 100%; min-width: 100%"
                    >
                        <v-row>
                            <v-col
                                cols="12"
                                class="d-flex justify-center align-center"
                            >
                                <span>
                                    Um auf die Notizen-Übersicht zu kommen,
                                    klicke auf das
                                    <v-icon> mdi-notebook-outline </v-icon>
                                    Symbol oben in der Navigationsleiste.
                                </span>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                                cols="12"
                                class="d-flex justify-center align-center"
                            >
                                <span>
                                    Die Notizen sind in 3 Kategorien unterteilt:
                                    Normal, Wichtig, Erledigt. <br />
                                    Wichtige Notizen sind gelb markiert,
                                    erledigte grün.
                                </span>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-window-item>

                <v-window-item
                    :value="3"
                    style="min-height: 100%; min-width: 100%"
                    class="pa-4"
                >
                    <v-container
                        fluid
                        style="min-height: 100%; min-width: 100%"
                    >
                        <v-row>
                            <v-col
                                cols="12"
                                class="d-flex justify-center align-center"
                            >
                                <span>
                                    Wenn du auf der Notizen-Übersicht (
                                    <v-icon> mdi-notebook-outline </v-icon> )
                                    bist, kannst du viele Aktionen über ein
                                    Kontextmenü machen. <br />
                                    Das Kontextmenü öffnest du, indem du mit der
                                    rechte Maustaste drückst. <br /><br />
                                    Mit dem Kontextmenü kannst du eine Notiz
                                    erstellen oder die Notizen sortieren. Wenn
                                    du das Kontextmenu auf einer Notiz öffnest,
                                    kann die Notiz z. B. bearbeitet, geteilt
                                    oder gelöscht werden.
                                </span>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-window-item>

                <v-window-item
                    :value="4"
                    style="min-height: 100%; min-width: 100%"
                    class="pa-4"
                >
                    <v-container
                        fluid
                        style="min-height: 100%; min-width: 100%"
                    >
                        <v-row>
                            <v-col
                                cols="12"
                                class="d-flex justify-center align-center"
                            >
                                <span>
                                    Sobald du auf der Notizen-Übersicht (<v-icon>
                                        mdi-notebook-outline </v-icon
                                    >) bist, kannst du eine Notiz erstellen,
                                    indem du auf das
                                    <v-icon> mdi-plus </v-icon> klickst.
                                    <br /><br />
                                    Außerdem kannst du eine Notiz über das
                                    Kontextmenü erstellen.
                                    <br /><br />
                                    Eine Notiz kann als erledigt markiert
                                    werden, indem du auf den
                                    <v-icon> mdi-check </v-icon>-Button klickst.
                                    <br /><br />
                                    Eine Notiz kann bearbeitet werden, wenn du
                                    auf der Notiz den
                                    <v-icon> mdi-pencil </v-icon>-Button oder im
                                    Kontextmenü auf
                                    <v-icon> mdi-pencil </v-icon> drückst.
                                </span>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-window-item>

                <v-window-item
                    :value="5"
                    style="min-height: 100%; min-width: 100%"
                    class="pa-4"
                >
                    <v-container
                        fluid
                        style="min-height: 100%; min-width: 100%"
                    >
                        <v-row>
                            <v-col
                                cols="12"
                                class="d-flex justify-center align-center"
                            >
                                <span>
                                    Du hast nun die grundlegenden Funktionen von
                                    School-Notes gelernt. <br /><br />
                                    Weitere Funktionen werden auf der
                                    Hilfe-Seite erklärt.
                                </span>
                            </v-col>
                            <v-col
                                cols="12"
                                class="d-flex justify-center align-center"
                            >
                                <v-btn
                                    class="ml-2"
                                    @click="
                                        $router
                                            .push({ path: '/help' })
                                            .catch(() => {})
                                    "
                                >
                                    Hilfe-Seite öffnen
                                </v-btn>
                            </v-col>

                            <v-divider></v-divider>

                            <v-col
                                cols="12"
                                class="d-flex justify-center align-center"
                            >
                                <span>
                                    Du kannst auch School Notes auf dem
                                    Smartphone nutzen. Wenn eine Notiz fällig
                                    ist, wirst du benachrichtigt.
                                    <br />
                                    <span class="font-weight-bold">
                                        Bald verfügbar!
                                    </span>
                                </span>
                            </v-col>
                            <v-col
                                cols="6"
                                class="d-flex justify-center align-center"
                            >
                                <v-btn class="ml-2" disabled>
                                    <v-icon class="mr-2"> mdi-android </v-icon>
                                    Download
                                </v-btn>
                            </v-col>
                            <v-col
                                cols="6"
                                class="d-flex justify-center align-center"
                            >
                                <v-btn class="ml-2" disabled>
                                    <v-icon class="mr-2"> mdi-apple </v-icon>
                                    Download
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-window-item>
            </v-window>

            <v-card-actions>
                <v-btn :disabled="step === 1" text @click="step--">
                    Zurück
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    v-if="step !== 5"
                    color="primary"
                    depressed
                    @click="step++"
                >
                    Weiter
                </v-btn>
                <v-btn
                    v-if="step === 5"
                    color="primary"
                    depressed
                    @click="$router.push({ path: '/login' }).catch(() => {})"
                >
                    Anmelden & Loslegen
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Logo from '@a/logo.svg';

export default Vue.extend({
    name: 'App',

    components: {
        Logo,
    },

    data: () => ({
        step: 1,
    }),

    computed: {
        currentTitle() {
            switch (this.step) {
                case 2:
                    return 'Notizen';
                case 3:
                    return 'Kontextmenü';
                case 4:
                    return 'Notizen erstellen & bearbeiten';
                case 5:
                    return 'Loslegen';
                default:
                    return '';
            }
        },
    },

    mounted() {
        if (localStorage.getItem('school-notes-welcome') == 'true')
            this.$router.push({ path: '/notes' }).catch(() => {}); // eslint-disable-line
    },
});
</script>

<style lang="scss">
.v-window__container {
    min-height: 100%;
    min-width: 100%;
}
</style>

<style lang="scss" scoped>
svg {
    width: 60%;
    height: 60%;
}
</style>
