import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home'
const authority = () => import('../components/authority/authorityMain')
const user = () => import('../components/authority/someAuthority/user')
const admin = () => import('../components/authority/someAuthority/admin')
const publicPwoer = () => import('../components/authority/someAuthority/publicPwoer')

Vue.use(VueRouter)

const routes = [
  {
    name:'authority',
    path:'/authority',
    component:authority,
    redirect:to => {
      console.log(to)
      let key = sessionStorage.getItem('key')
      let user = JSON.parse(key)    
      switch(user.code){
        case '000001':{
          return {
            name:'admin',
            path:'/admin',
            component:admin,
            meta:{
              title:'admin',
            }
          }
          //break
        }
        case '000002':{
          return  {
            name:'user',
            path:'/user',
            component:user,
            meta:{
              title:'user',
            },
          }
        }
      }
      //console.log(key)
    },
    meta:{
      title:'authority'
    },
    children:[
      {
        name:'admin',
        path:'/admin',
        component:admin,
        meta:{
          title:'admin',
        },
      },
      {
        name:'user',
        path:'/user',
        component:user,
        meta:{
          title:'user',
        },
      },
      {
        name:'publicPwoer',
        path:'/publicPwoer',
        component:publicPwoer,
        meta:{
          title:'publicPwoer',
        },
      }
    ]
  },
  {
    name:'home',
    path:'/',
    component:home,
    meta:{
      title:'home'
    }
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  try {
    if(to.path === from.path){
      next(false)
    }
    document.title = to.meta.title
    next()
  } catch (error) {
    new Error(error)
  }
})

//解决重复点击出现的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}



export default router
