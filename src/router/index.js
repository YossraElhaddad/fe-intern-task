import {createRouter, createWebHashHistory} from 'vue-router';
import LoginPage from '../components/LoginPage.vue';
import WelcomePage from '../components/WelcomePage.vue';
import NotFoundPage from '../components/NotFoundPage.vue';

const routes = [
  {path: '/', redirect: '/login'},
  { path: '/login', name: 'LoginPage', component: LoginPage },
  {path: '/welcome', redirect: '/login'},
  { path: '/welcome/:email', component: WelcomePage, props: true },
  { path: '/404', component: NotFoundPage },
  {path: '/:pathMatch(.*)*', beforeEnter: (to, from, next) => {next('/404')}}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
