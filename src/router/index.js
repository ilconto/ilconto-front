import Vue from 'vue'
import VueRouter from 'vue-router'

/* Components */
import Login from '@/components/Login'
import Register from '@/components/Register'
import Board from '@/components/Board'


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
        }
    ]
})

