import Vue from 'vue'
import VueRouter from 'vue-router'
import goTo from 'vuetify/es5/services/goto'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: () =>
            import ('../views/PersonalPortfolio.vue'),
        meta: {
            title: 'Nicks Portfolio'
        }
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
