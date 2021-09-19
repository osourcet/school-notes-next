<template>
    <div class="center">
        <v-card
            class="d-flex flex-column"
            max-width="400"
            style="min-height: 400px"
        >
            <v-toolbar
                v-if="step !== 1"
                color="primary"
                dark
                class="text-h6 flex-grow-0"
            >
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
                                    klicken Sie auf das
                                    <v-icon> mdi-notebook-outline </v-icon>
                                    Symbol oben in der Navigation-Leiste.
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
                                    erledigte, grün.
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
                                    Sobald Sie auf der Notizen-Übersicht
                                    (<v-icon> mdi-notebook-outline </v-icon>)
                                    sind, können sie 
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
                                    erledigte, grün.
                                </span>
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
                    :disabled="step === 3"
                    color="primary"
                    depressed
                    @click="step++"
                >
                    Weiter
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
        text: [
            `School Notes ist ein App, in der man Notizen / Erinnerungen, z. B. für Hausaufgaben und Test, anlegen kann. <br /><br />Klicke auf "Weiter" um das Tutorial zu starten.`,
        ],
    }),

    computed: {
        currentTitle() {
            switch (this.step) {
                case 2:
                    return 'Notizen';
                case 3:
                    return 'Notizen erstellen';
                default:
                    return '';
            }
        },
        currentText() {
            return this.text[this.step - 1];
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
