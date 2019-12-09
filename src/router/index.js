import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/Index'
import ObjectDetail from '@/components/ObjectDetail'
import FeedBack from '@/components/FeedBack'
import left from '@/components/left'
import updatePassword from '@/components/updatePassword'
import Administration from '@/components/Administration'
import addEmployee from '@/components/addEmployee'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      // children: [
      //   {
      //     // 当 /user/:id/profile 匹配成功，
      //     // UserProfile 会被渲染在 User 的 <router-view> 中
      //     path: 'Index',
      //     component: Index
      //   }
      // ]  
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/ObjectDetail/:num',
      name: 'ObjectDetail',
      component: ObjectDetail
    },
    {
      path: '/FeedBack',
      name: 'FeedBack',
      component: FeedBack
    },
    { //left界面映射的路由
      path: '/left/:num',
      name: 'left',
      component: left
    },
    { //修改密码页面
      path:'/updatePassword',
      name:'updatePassword',
      component:updatePassword
    },
    { //管理员操作界面
      path:'/Administration',
      name:'Administration',
      component:Administration,
      // children: [
      //     {
      //       path: 'addEmployee',
      //       component: addEmployee
      //     }
      //   ]  
    },
    { //管理员操作界面
      path:'/addEmployee',
      name:'addEmployee',
      component:addEmployee,
    }
  ]
})
