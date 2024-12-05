import { createStore } from "vuex";
import axios from "axios";
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  plugins: [createPersistedState()],
  state: {
    // 初始状态
    user: {
      userId: '',
      username: '',
      password: '',
      type: '',
      phone: '',
      permission: '',
      enterTime: '',
      email: '',
      // 默认头像
      avatar: '/img/avatar/customize_boy.png',
    },
    // 后端地址
    url: 'http://localhost:8080',
  },
  actions: {
    // 异步操作或提交多个 mutation
    // 封装的发送Ajax请求
    async Ajax(context, value) {
      try {
        // get请求
        if (value.method.toLowerCase() == 'get') {
          let url = this.state.url + value.url
          if (!value.hasOwnProperty('data')) return await axios.get(url)
          return await axios.get(url, { params: value.data })
        } else {
          // post请求
        }
      } catch (error) {
        // 发生错误
        console.log(error)
      }
    },
  },
  mutations: {
    // 修改状态的方法
    // 修改用户信息
    CHANGE_USER(state, user) {
      this.state.user = user
    },
    // 只修改头像路径
    CHANGE_AVATAR(state, src) {
      this.state.user.avatar = src
    },
  },

  getters: {
    // 获取状态的计算属性, computed
    // 返回头像地址
    avatar_src(state) {
      return state.url + state.user.avatar
    },
  },
})
