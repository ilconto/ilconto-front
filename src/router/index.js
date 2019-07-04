import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateBoard from '@/components/CreateBoard'
import LoginBoard from '@/components/LoginBoard'
import LandingPage from '@/components/LandingPage'


Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
            path: "/create",
            name: "create",
            component: CreateBoard
        },
        {
            path: "/login",
            name: "login",
            component: LoginBoard,
        },
        {
            path: "/",
            name: "root",
            component: LandingPage,
        }
    ]
})