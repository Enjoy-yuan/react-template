import login from '../pages/login'
import notFount from '../pages/notFound'
import dashboard from '../pages/admin/dashboard'
import list from '../pages/admin/list'
import edit from '../pages/admin/edit'

export const mainRoutes = [
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
    component: dashboard
  },
  {
    path: '/admin/products',
    component: list,
    exact: true
  },
  {
    path: '/admin/products/:id',
    component: edit
  }
]
