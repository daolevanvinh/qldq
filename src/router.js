import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const HomePage = () => import(/** webchunk home-page*/ '@/pages/HomePage/HomePage')
const DashBoard = () => import(/** webchunk home-page*/ '@/pages/DashBoard/DashBoard')
const List = () => import(/** webchunk home-page*/ '@/pages/List/List')
const Show = () => import(/** webchunk home-page*/ '@/pages/Show/Show')
const LLDQTemplate = () => import(/** webchunk lldq-page*/ '@/pages/LLDQTemplate/LLDQTemplate')
const BaseRoutes = [
    {
        path: '/',
        component: HomePage,
        name: 'home-page'
    },
    {
        path: '/admin',
        name: 'admin-page',
        redirect: '/admin/danh-sach-thanh-vien',
        component: DashBoard,
        children: [
            {
                path: 'danh-sach-thanh-vien',
                name: 'list-page',
                component: List
            },
            {
                path: 'chi-tiet/:name',
                name: 'show-page',
                component: Show
            },
            {
                path: 'them-moi-dan-quan',
                name: 'new-page',
                component: LLDQTemplate
            }
        ]
    }
]


const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: BaseRoutes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})


export default router