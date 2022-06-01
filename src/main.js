import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';

const app = createApp(App);
app.use(router);

router.push(window.localStorage.getItem('logged-in') || '/');
app.mount('#app');