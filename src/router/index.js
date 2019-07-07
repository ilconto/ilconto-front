import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateBoard from '@/components/CreateBoard'
import Board from '@/components/Board'
import Login from '@/components/Login'
import SignIn from '@/components/SignIn'
import LandingPage from '@/components/LandingPage'
import UserProfile from '@/components/UserProfile'


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
            component: Login,
        },
        {
            path: "/signin",
            name: "signin",
            component: SignIn,
        },
        {
            path: "/",
            name: "root",
            component: LandingPage,
        },
        {
            path: "/profile",
            name: "user",
            component: UserProfile
        },
        {
            path: "/board/:id",
            name: "board",
            component: Board
        }
    ]
})