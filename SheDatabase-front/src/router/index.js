import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import AdminView from "../views/AdminView.vue";
import Login from '../views/Login.vue'
import UserLogin from '../views/Login/components/UserLogin.vue'
import User from '../views/UserView.vue'
import Map from '../views/Map.vue'
import Index from '../views/IndexView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/index',
      name: 'first',
      component: Index,
    },
    {
      path: '/',
      name: 'index',
      component: LoginView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
    },
    {
      path: '/l',
      name: 'l',
      component: Login,
      children: [
        {
          path: 'user_login',
          name: 'user_login',
          component: UserLogin,
        },
      ],
    },
    {
      path: '/user',
      name: 'user',
      component: User,
    },
    {
      path: '/map',
      name: 'map',
      component: Map,
    },
  ],
})

// 添加全局路由守卫
router.beforeEach((to, from, next) => {
    return next();
    const token = window.sessionStorage.getItem("token")
    if (to.path === '/l' || to.path === '/l/user_login' || to.path === '/user' || to.path === '/map' || to.path === '/index')
        return next()

    // 如果是登录页面或者初始页面, 直接放行
    if (to.path === '/login' || to.path === '/')
    {
        // 如果已经登录成功
        if (token) {
            if (type === 1) {
                // 是管理员
                return next("/admin");
            } else {
                // 是普通用户
                return next("/user");
            }
        } else {
            // 没有登录, 直接放行
            return next();
        }
    }
    // 如果是其他页面
    if (token)
        // 已登录
        return next();
    else
        // 未登录
        return next('/login')
});

// 暴露路由对象
export default router;
