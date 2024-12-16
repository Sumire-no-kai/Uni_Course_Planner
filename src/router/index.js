import { createRouter, createWebHistory } from 'vue-router';
import Planner from "@/views/Planner.vue";
import About from "@/views/About.vue";
import Index from "@/views/Index.vue";

const routes = [
    {
        path: '/index',
        name: 'Home',
        component: Index
    },
    {
        path: '/planner',
        name: 'Planner',
        component: Planner
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;