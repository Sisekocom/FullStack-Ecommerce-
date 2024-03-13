import { createStore } from 'vuex'
import axios from 'axios'
import sweet from 'sweetalert'
import { useCookies } from 'vue3-cookies'
// import router from '@/router'
import AuthenticateUser from '@/store/services/AuthenticateUser'

const Server = 'https://node-emop-2.onrender.com/'

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null
  },
  mutations: {
    setUsers(state, value) {
      state.users = value
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, value) {
      state.products = value
    },
    setProduct(state, value) {
      state.product = value
    },
  },
  actions: {
    async login(context, payload) {
      try {
        const { msg, result, token } = (await axios.post(`${Server}users/login`, payload)).data;
        if (result) {
          context.commit("setUser", result)
          useCookies().set("TokenUsers", token) 
          AuthenticateUser.TokenRegister(token)
          sweet({
            title: 'Login',
            text: 'You are logged in',
            icon: "success",
            timer: 2000
          })
        } else {
          sweet({
            title: 'Login',
            text: msg,
            icon: "error",
            timer: 2000
          })
        }
      } catch (error) {
        sweet({
          title: 'Login Error',
          text: error.message, 
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchUsers(context) {
      try {
        const { results } = (await axios.get(`${Server}users`)).data;
        if (results) {
          context.commit('setUsers', results)
        }
      } catch (error) {
        sweet({
          title: 'Error',
          text: error.message, 
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchUser(context, payload) {
      try {
        const { result } = (await axios.get(`${Server}users/${payload.id}`)).data;
        if (result) {
          context.commit('setUser', result)
        } else {
          sweet({
            title: 'Retrieving a single user',
            text: 'User was not found',
            icon: "info",
            timer: 2000
          })
        }
      } catch (error) {
        sweet({
          title: 'Error',
          text: error.message,
          icon: "error",
          timer: 2000
        })
      }
    },
  
  },
  modules: {}
})
