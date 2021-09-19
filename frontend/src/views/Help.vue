<template>
    <div class="center py-10">
        <v-card elevation="2" style="width: 100%" max-width="800" class="pa-6">
            <vue-showdown
                :markdown="content"
                flavor="github"
                :extensions="['showdownHighlight']"
                class="markdown-body"
            >
            </vue-showdown>
        </v-card>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import help from '@a/help.md';

export default Vue.extend({
    name: 'Info',

    data: () => ({ content: help }),
});
</script>
