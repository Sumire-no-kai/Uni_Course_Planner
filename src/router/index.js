import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue'; // 确保路径正确

const routes = [
    {
        path: '/',
        name: 'Home',
        component: App // 使用 App.vue 作为主页组件
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
