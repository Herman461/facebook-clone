import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./i18n";
import router from './router';
import store from './store';
import notify from "./plugins/notification";
import FloatingVue from 'floating-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'floating-vue/dist/style.css'
const app = createApp(App);

app.use(i18n);
app.use(router);
app.use(store);
app.use(notify);
app.use(FloatingVue)
app.use(ElementPlus)

app.mount('#app');

