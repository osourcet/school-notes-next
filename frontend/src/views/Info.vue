<template>
    <div class="center">
        <v-card elevation="2" style="width: 100%" max-width="400">
            <v-toolbar color="primary" dark class="text-h5"> Info </v-toolbar>

            <v-form>
                <v-container class="my-6" fluid>
                    <v-row no-gutters>
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
                                text-h4
                                font-weight-light
                            "
                        >
                            School Notes
                        </v-col>
                    </v-row>

                    <v-divider class="my-4"> </v-divider>

                    <v-row no-gutters>
                        <v-col cols="12" class="d-flex justify-center mb-2">
                            Entwickelt von
                        </v-col>

                        <v-col cols="12" class="d-flex justify-center">
                            Felix Wochnick & Jonas Vogel
                        </v-col>
                    </v-row>

                    <v-divider class="my-4"> </v-divider>

                    <v-row no-gutters>
                        <v-col cols="12" class="d-flex justify-center mb-2">
                            Github
                        </v-col>

                        <v-col
                            cols="12"
                            class="d-flex justify-center align-center"
                        >
                            <v-btn
                                text
                                @click="
                                    openInNewTab(
                                        'https://github.com/osourcet/school-notes-next',
                                    )
                                "
                            >
                                school-notes-next
                                <v-icon class="ml-2"> mdi-open-in-new </v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>

                    <v-divider class="my-4"> </v-divider>

                    <v-row no-gutters>
                        <v-col cols="12" class="d-flex justify-center mb-4">
                            Verwendete Ressourcen
                        </v-col>
                        <v-col cols="2" class="d-flex justify-center">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        elevation="4"
                                        icon
                                        v-bind="attrs"
                                        v-on="on"
                                        class="green accent-3"
                                        @click="
                                            openInNewTab('https://vuejs.org')
                                        "
                                    >
                                        <v-icon> mdi-vuejs</v-icon>
                                    </v-btn>
                                </template>
                                <span> Vue 2 </span>
                            </v-tooltip>
                        </v-col>
                        <v-col cols="2" class="d-flex justify-center">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        elevation="4"
                                        icon
                                        v-bind="attrs"
                                        v-on="on"
                                        class="blue white--text"
                                        @click="
                                            openInNewTab(
                                                'https://vuetifyjs.com/en/',
                                            )
                                        "
                                    >
                                        <v-icon> mdi-vuetify</v-icon>
                                    </v-btn>
                                </template>
                                <span> Vuetify </span>
                            </v-tooltip>
                        </v-col>
                        <v-col cols="2" class="d-flex justify-center">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        elevation="4"
                                        icon
                                        v-bind="attrs"
                                        v-on="on"
                                        class="green accent-3"
                                        @click="
                                            openInNewTab(
                                                'https://nodejs.org/de/',
                                            )
                                        "
                                    >
                                        <v-icon> mdi-nodejs</v-icon>
                                    </v-btn>
                                </template>
                                <span> NodeJS </span>
                            </v-tooltip>
                        </v-col>
                        <v-col cols="2" class="d-flex justify-center">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        elevation="4"
                                        icon
                                        v-bind="attrs"
                                        v-on="on"
                                        class="blue--text"
                                        @click="
                                            openInNewTab(
                                                'https://www.typescriptlang.org',
                                            )
                                        "
                                    >
                                        <v-icon>
                                            mdi-language-typescript</v-icon
                                        >
                                    </v-btn>
                                </template>
                                <span> TypeScript </span>
                            </v-tooltip>
                        </v-col>
                        <v-col cols="2" class="d-flex justify-center">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        elevation="4"
                                        icon
                                        v-bind="attrs"
                                        v-on="on"
                                        class="blue white--text"
                                        @click="
                                            openInNewTab(
                                                'https://www.docker.com',
                                            )
                                        "
                                    >
                                        <v-icon> mdi-docker</v-icon>
                                    </v-btn>
                                </template>
                                <span> Docker </span>
                            </v-tooltip>
                        </v-col>
                        <v-col cols="2" class="d-flex justify-center">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        elevation="4"
                                        icon
                                        v-bind="attrs"
                                        v-on="on"
                                        class="pink--text"
                                        @click="
                                            openInNewTab('https://graphql.org')
                                        "
                                    >
                                        <v-icon> mdi-graphql</v-icon>
                                    </v-btn>
                                </template>
                                <span> GraphQL </span>
                            </v-tooltip>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </v-card>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Logo from '@a/logo.svg';

export default Vue.extend({
    name: 'Info',

    components: {
        Logo,
    },

    methods: {
        openInNewTab(url: string) {
            window.open(url, '_blank');
        },
    },
});
</script>

<style lang="scss" scoped>
svg {
    width: 60%;
    height: 60%;
}
</style>
