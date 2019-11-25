import Vue from 'vue';
import VueRouter from 'vue-router';

/* Components */
import LandingPage from '@/components/LandingPage';
import CreateBoard from '@/components/CreateBoard';
import Board from '@/components/Board';
import UserProfile from '@/components/UserProfile';


Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'root',
            component: LandingPage,
            props: {
                action: 'login'
            },
            meta: {
                title: "Ilconto | login"
            }
        }, {
            path: '/login',
            name: 'login',
            component: LandingPage,
            props: {
                action: 'login'
            },
            meta: {
                title: "Ilconto | login"
            }
        }, {
            path: '/register',
            name: 'register',
            component: LandingPage,
            props: {
                action: 'register'
            },
            meta: {
                title: "Ilconto | register"
            }
        },
        {
            path: '/board/:boardId',
            name: 'board',
            component: Board,
            meta: {
                title: "Ilconto | board"
            }
        },
        {
            path: '/createboard',
            name: 'createboard',
            component: CreateBoard,
            meta: {
                title: "Ilconto | create a board"
            }
        },
        {
            path: '/profile',
            name: 'profile',
            component: UserProfile,
            meta: {
                title: "Ilconto | profile"
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})

export default router;


// use beforeRouteUpdate