import Vue from 'vue'
import VueRouter from 'vue-router'

/* Components */
import Login from '@/components/Login'
import Register from '@/components/Register'
import Board from '@/components/Board'
import UserProfile from '@/components/UserProfile'


Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
            path: '/',
            name: 'root',
            component: Login,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/board',
            name: 'board',
            component: Board
        },
        {
            path: '/profile',
            name: 'profile',
            component: UserProfile
        }
    ]
})