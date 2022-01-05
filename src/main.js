import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./i18n";
import router from './router';
import store from './store';
import notify from "./plugins/notification";

const app = createApp(App);

app.use(i18n);
app.use(router);
app.use(store);
app.use(notify);

app.mount('#app');

