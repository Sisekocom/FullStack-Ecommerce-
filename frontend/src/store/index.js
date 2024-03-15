import { createStore } from 'vuex';
import axios from 'axios';
import sweet from 'sweetalert';
import { useCookies } from 'vue3-cookies';
import AuthenticateUser from '@/store/services/AuthenticateUser';
import router from '@/router';
const {cookies} = useCookies()
const Server = 'https://fullstack-ecommerce-do0c.onrender.com/';

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, value) {
      console.log(value);
      state.products = value;
    },
    setProduct(state, product) {
      state.product = product;
    },
  },
  actions: {
    async login(context, payload) {
      try {
        const response = await axios.post(`${Server}users/login`, payload);
        const { msg, token, result } = response.data;
        if (result) {
          context.commit('setUser', { msg, result });
          cookies.set('LegitUser', { msg, token, result });
          console.log('Store - Login: ', token);
          AuthenticateUser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome back, ${result?.firstName} ${result?.lastName}`,
            icon: "success",
            timer: 2000
          });
          router.push({ name: 'home' });
        } else {
          sweet({
            title: 'info',
            text: msg,
            icon: "info",
            timer: 2000
          });
        }
      } catch (error) {
        sweet({
          title: 'Error',
          text: error.response?.data?.msg || 'Failed to login.',
          icon: "error",
          timer: 2000
        });
        throw error;
      }
    },
    async register(context, payload) {
      try {
        const response = await axios.post(`${Server}users/register`, payload);
        const { msg, token } = response.data;
    
        if (token) {
          sweet({
            title: 'Registration Successful',
            text: msg,
            icon: "success",
            timer: 2000
          });
          router.push({ name: 'login' });
        }
      } catch (e) {
        // Check if the error message is an object, and stringify if necessary
        let errorMessage = e.response?.data?.msg;
        if (typeof errorMessage === 'object') {
          errorMessage = JSON.stringify(errorMessage, null, 2);
        } else if (!errorMessage) {
          errorMessage = 'An error occurred during registration.';
        }
    
        sweet({
          title: 'Error',
          text: errorMessage,
          icon: "error",
          timer: 2000
        });
      }
    },
    
    
    async fetchUsers({ commit }) {
      try {
        const { results } = (await axios.get(`${Server}users`)).data;
        commit('setUsers', results);
      } catch (error) {
        sweet({
          title: 'Error',
          text: error.message,
          icon: "error",
          timer: 2000
        });
      }
    },
    async fetchUser({ commit }, payload) {
      try {
        const { result } = (await axios.get(`${Server}users/${payload.id}`)).data;
        if (result) {
          commit('setUser', result);
        } else {
          sweet({
            title: 'Retrieving a single user',
            text: 'User was not found',
            icon: "info",
            timer: 2000
          });
        }
      } catch (error) {
        sweet({
          title: 'Error',
          text: error.message,
          icon: "error",
          timer: 2000
        });
      }
    },
    async fetchProducts( context ) {
      try {
        const { results } = (await axios.get(`${Server}products`)).data;
        console.log(results);
        context.commit('setProducts', results);
      } catch (error) {
        sweet({
          title: 'Error',
          text: error.message,
          icon: "error",
          timer: 2000
        });
      }
    },
    async fetchProduct({ commit }, payload) {
      try {
        const { result } = await axios.get(`${Server}products/${payload.id}`);
        commit('setProduct', result);
      } catch (error) {
        sweet({
          title: 'Error',
          text: 'A product was not found.',
          icon: "error",
          timer: 2000
        });
      }
    }
  },
  
  modules: {}
});
