import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateBoard from '@/components/CreateBoard'
import LoginBoard from '@/components/LoginBoard'


Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
            path: "/create",
            name: "CreateBoard",
            component: CreateBoard
        },
        {
            path: "/login",
            name: "Login",
            component: LoginBoard,
            props: {
                msg: 'bite'
            }
        }
    ]
})