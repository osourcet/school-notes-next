/* eslint-disable */

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import showdown from 'showdown';
import VueShowdownPlugin from 'vue-showdown';

Vue.config.productionTip = false;

showdown.setFlavor('github');

// @ts-ignore
Vue.use(VueShowdownPlugin, {
    options: {
        emoji: true,
    },
});

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount('#app');
