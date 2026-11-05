import { createRouter, createWebHistory } from 'vue-router'
import landingpage from '../views/landingpage.vue'

// mahasiswa routers
import dashboard from '../views/dashboardMahasiswa.vue'
import login from '../views/loginAndRegisterPageMahasiswa/loginPageMahasiswa.vue'
import createAccountsMahasiswa from '../views/loginAndRegisterPageMahasiswa/createAccountsMahasiswa.vue'

import home from '../views/dashboardComponentMahasiswa/home.vue'
import historyMahasiswa from '../views/dashboardComponentMahasiswa/historyMahasiswa.vue'
import edit from '../views/dashboardComponentMahasiswa/edit.vue'
import viewpagePremits from '../views/dashboardComponentMahasiswa/viewpagePremits.vue'
import unggah from '../views/dashboardComponentMahasiswa/unggah.vue'
import profile from '../views/dashboardComponentMahasiswa/profile.vue'


// admin routers
import loginAdmin from '../views/loginAndRegisterPageAdmin/loginPageAdmin.vue'
import dashboardAdmin  from '../views/dashboardAdmin.vue'
import createAccountsAdmin from '../views/loginAndRegisterPageAdmin/createAccountsAdmin.vue'

import preview from '../views/dashboardComponentAdmin/preview.vue'
import historyAdmin from '../views/dashboardComponentAdmin/historyadmin.vue'
import DashboardViewAdmin from '../views/dashboardComponentAdmin/dashboardViewAdmin.vue'
import notFoundPage from '../views/404page.vue'

const routes=[
    {
        path:'/',
        name:'landingpage',
        component:landingpage
    },
{
    path:'/loginMahasiswa',
    name:'login',
    component:login
},
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: notFoundPage
  },
// {
//     path:'/loginAdmin',
//     name:'loginAdmin',
//     component:loginAdmin
// },
{
    path:'/dashboardMahasiswa',
    name:'dashboardMahasiswa',
    component:dashboard,
    children:[
        {name:'home',path:'home',component:home},
        {name:'historyMahasiswa',path:'historyMahasiswa',component:historyMahasiswa},
        {name:'unggah',path:'unggah', component:unggah},
        {name:'edit',path:'edit/:id',component:edit},
        {name:'viewMahasiswa',path:'viewMahasiswa/:id',component:viewpagePremits},
        {name:'profile',path:'profile', component:profile}
    ],
    meta: { requiresAuthMahasiswa: true } 
},
// {
//     path:'/createAccountsMahasiswa',
//     name:'createAccountsMahasiswa',
//     component:createAccountsMahasiswa
// },
// {
//     path:'/createAccountsAdmin',
//     name:'createAccountsAdmin',
//     component:createAccountsAdmin
// },
// {
//     path:'/dashboardAdmin',
//     name:'dashboardAdmin',
//     children:[
//         {name:'preview',path:'preview',component:preview},
//         {name:'history',path:'historyAdmin',component:historyAdmin},
//         {name:'view',path:'view/:id',component:DashboardViewAdmin},
//     ],
//     meta: { requiresAuthAdmin: true },
//     component:dashboardAdmin
// }
]

const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to,from,next)=>{
    const dataAuthLoginToken = localStorage.getItem('idMhs')
    if(to.meta.requiresAuthMahasiswa && !dataAuthLoginToken){
        next('/loginMahasiswa')
    }
    else{
        next()
    }
})
// router.beforeEach((to,from,next)=>{
//     const dataAuthLoginToken = localStorage.getItem('idAdm')
//     if(to.meta.requiresAuthAdmin && !dataAuthLoginToken){
//         next('/loginAdmin')
//     }
//     else{
//         next()
//     }
// })
export default router