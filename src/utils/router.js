import {createRouter, createWebHistory} from 'vue-router'
import Main from "../components/Main.vue";
import signUp from "../components/SignUp.vue";

const routes = [
    {
        path : '/',
        name : "Main",
        component : Main
    },
    {
        path: '/sign-up',
        name : 'signUp',
        component: signUp
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router
