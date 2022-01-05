import { createRouter, createWebHistory } from 'vue-router';

const Profile = () => import('../components/profile/ProfilePage');
const Auth = () => import('../components/auth/AuthPage');

const routes = [
    { path: "/", component: Profile },
    { path: "/login", component: Auth }
];

export default createRouter({
    history: createWebHistory(),
    routes
})


