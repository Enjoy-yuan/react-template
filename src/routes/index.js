import login from '../pages/login'
import notFount from '../pages/notFound'
import dashboard from '../pages/admin/dashboard'
import list from '../pages/admin/list'
import edit from '../pages/admin/edit'
import mobx from '../pages/admin/mobx'
import hooks from '../pages/admin/hooks'
import redux from '../pages/admin/redux'
import typescript from '../pages/admin/typescript'


export const mainRoutes = [
  {
    path: '/',
    component: login,
  
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/notFount',
    component: notFount
  }
]

export const adminRoutes = [
  {
    path: '/admin/dashboard',
    component: dashboard,
    isShow: true,
    title: '首页'
  },
  {
    path: '/admin/mobx',
    component: mobx,
    isShow: true,
    title: 'mobx使用'
  },
  {
    path: '/admin/hooks',
    component: hooks,
    isShow: true,
    title: 'hooks使用'
  },
  {
    path: '/admin/redux',
    component: redux,
    isShow: true,
    title: 'redux使用'
  },
  {
    path: '/admin/typescript',
    component: typescript,
    isShow: true,
    title: 'typescript使用'
  },
  {
    path: '/admin/list',
    component: list,
    exact: true,
    isShow: true,
    title: '列表',
    icon: 'shop'
  },
  {
    path: '/admin/edit/:id',
    component: edit,
    isShow: false
  }
]
