import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/HomePage";
import StorePage from "@/views/StorePage";
import ForumPage from "@/views/ForumPage.vue";
import ContactPage from "@/views/ContactPage";

const routes = [{
        path: "/",
        component: HomePage
    },
    {
        path: "/store",
        component: StorePage
    },
    {
        path: "/forum",
        component: ForumPage,
    },
    {
        path: "/contact",
        component: ContactPage
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router