import Vue from 'vue'
import VueRouter from 'vue-router'
import goTo from 'vuetify/es5/services/goto'
import Missing from '../views/404.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: () =>
            import ('../views/all-home-version/PersonalPortfolio.vue'),
        meta: {
            title: 'Nicks Portfolio'
        }
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            title: 'Nicks'
        },
        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '*',
        component: Missing,
        meta: {
            title: '404 - VueJS Creative Agency and Portfolio Template'
        },
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior: (to, from, savedPosition) => {
        let scrollTo = 0

        if (to.hash) {
            scrollTo = to.hash
        } else if (savedPosition) {
            scrollTo = savedPosition.y
        }

        return goTo(scrollTo)
    },
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})


export default router
