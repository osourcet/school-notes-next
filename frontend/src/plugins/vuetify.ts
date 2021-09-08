import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import logo from '@a/logo.svg';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        values: {
            schoolnotes: { component: logo },
        },
    },
});
