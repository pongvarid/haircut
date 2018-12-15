import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function loadView(view) {
    return () => import(`../views/${view}.vue`)
}


export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: loadView('home')
        },
        {
            path: '/barregis',
            name: 'barregis',
            component: loadView('barregis')
        },
        {
            path: '/barlogin',
            name: 'barlogin',
            component: loadView('barlogin')
        },
        {
            path: '/listbar',
            name: 'listbar',
            component: loadView('listbar')
        },
        {
            path: '/bardetail',
            name: 'bardetail',
            component: loadView('bardetail')
        },
        {
            path: '/queue',
            name: 'queue',
            component: loadView('queue')
        },
        {
            path: '/Datamanagement',
            name: 'Datamanagement',
            component: loadView('Datamanagement')
        },
        {
            path: '/DataBarbershop',
            name: 'DataBarbershop',
            component: loadView('DataBarbershop')
        },
        {
            path: '/account',
            name: 'account',
            component: loadView('account')
        },
        {
            path: '/customerQueue',
            name: 'customerQueue',
            component: loadView('customerQueue')
        },
        
      
    ]
    
})
