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
        },
        {
            path: '/board/:boardId',
            name: 'board',
            component: Board,
            meta: {
                title: "board"
            }
        },
        {
            path: '/createboard',
            name: 'createboard',
            component: CreateBoard,
            meta: {
                title: "create a board"
            }
        },
        {
            path: '/profile',
            name: 'profile',
            component: UserProfile,
            meta: {
                title: "profile"
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = `Ilconto | ${to.meta.title}`
    next()
})

export default router;


// use beforeRouteUpdate