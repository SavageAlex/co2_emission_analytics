import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("./components/Home")
    },
    {
        path: "/analytics",
        name: "c02-analytics",
        component: () => import("./components/Analytics")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router