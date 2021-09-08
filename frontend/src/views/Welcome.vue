<template>
    <div class="center">Willkommen! [Platzhalter Welcome]</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'App',

    mounted() {
        if (localStorage.getItem('school-notes-welcome') == 'true')
            this.$router.push({ path: '/notes' }).catch(() => {});  // eslint-disable-line
    },
});
</script>
