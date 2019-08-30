import Vue from 'vue'
import VueRouter from 'vue-router'

/* Components */
import LandingPage from '@/components/LandingPage'
import Board from '@/components/Board'
import UserProfile from '@/components/UserProfile'


Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
            path: '/',
            name: 'root',
            component: LandingPage,
        },{
            path: '/login',
            name: 'login',
            component: LandingPage,
            props: {
                action: 'login'
            }
        },{
            path: '/register',
            name: 'register',
            component: LandingPage,
            props: {
                action: 'register'
            }
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