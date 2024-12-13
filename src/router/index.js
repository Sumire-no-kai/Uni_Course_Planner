import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import Planner from "@/views/Planner.vue";
import About from "@/views/About.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: App  // 这是你的主页
    },
    {
        path: '/planner',
        name: 'Planner',
        component: Planner  // 确保这里引用正确
    },
    {
        path: '/about',
        name: 'About',
        component: About  // 确保这里引用正确
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;