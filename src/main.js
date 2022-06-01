import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';

const app = createApp(App);
app.use(router);
//get the saved state from the local sorage if a user logged in
router.push(window.localStorage.getItem('logged-in') || '/');
app.mount('#app');