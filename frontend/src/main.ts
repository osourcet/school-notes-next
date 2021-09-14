/* eslint-disable */

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import showdown from 'showdown';
import VueShowdownPlugin from 'vue-showdown';
import showdownHighlight from 'showdown-highlight';
import 'github-markdown-css';
import 'highlight.js/styles/github.css';

Vue.config.productionTip = false;

showdown.extension('showdownHighlight', showdownHighlight({ pre: false }));
showdown.setFlavor('github');

// @ts-ignore
Vue.use(VueShowdownPlugin, {
    options: {
        emoji: true,
        metadata: true,
        ghCodeBlocks: true,
    },
});

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount('#app');
