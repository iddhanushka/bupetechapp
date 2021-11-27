import { createApp } from 'vue';
import BootstrapVue3 from 'bootstrap-vue-3';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import "normalize.css"
import i18n from './i18n'

const app = createApp(App).use(i18n);
app.use(router);
app.use(BootstrapVue3);
app.mount('#app');

