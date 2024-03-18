import { createStore } from 'vuex';
import axios from 'axios';
import sweet from 'sweetalert';
// Removed useCookies import because it's typically used within Vue components, not Vuex.
import AuthenticateUser from '@/store/services/AuthenticateUser';
import router from '@/router';

// Assuming `Server` is a constant URL for your API.
const Server = 'https://fullstack-ecommerce-do0c.onrender.com/';

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    orders : null,
    isLoggedIn: false,
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setOrders(state, value){
      state.orders = value
    },
    setProduct(state, product) {
      state.product = product;
    },
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    async login({ commit }, payload) {
      try {
        const response = await axios.post(`${Server}users/login`, payload);
        const { msg, token, result } = response.data;
        if (result) {
          commit('setUser', result);
          // You'll need to adjust how cookies are set. This line is conceptual.
          // cookies.set('LegitUser', token, { expires: '1d' });
          AuthenticateUser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome back, ${result.firstName} ${result.lastName}`,
            icon: "success",
            timer: 2000,
          });
          router.push({ name: 'home' });
        } else {
          sweet({
            title: 'Login Info',
            text: msg,
            icon: "info",
            timer: 2000,
          });
        }
      } catch (error) {
        sweet({
          title: 'Login Error',
          text: error.response?.data?.msg || 'Failed to login.',
          icon: "error",
          timer: 2000,
        });
      }
    },
    
    async fetchAllOrders( context ) {
      try {
        const { results } = (await axios.get(`${Server}orders`)).data;
        console.log(results);
        context.commit('setOrders', results);
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
        const { result } =( await axios.get(`${Server}products/${payload.id}`)).data;
        // console.log(results);
        commit('setProduct', result);
      } catch (error) {
        sweet({
          title: 'Error',
          text: 'A product was not found.',
          icon: "error",
          timer: 2000
        });
      }
    },
    async delete(context, payload) {
      try {
        console.log();
        const { result } =( await axios.delete(`${Server}products/delete/${payload}`)).data;
        console.log(result);
        context.commit('setProduct', result);
      } catch (error) {
        sweet({
          title: 'Error',
          text: 'A Product was not deleted!.',
          icon: "error",
          timer: 2000
        });
      }
    },
    
    async fetchUsers({ commit }) {
      try {
        const response = await axios.get(`${Server}users`);
        commit('setUsers', response.data.results);
      } catch (error) {
        sweet({
          title: 'Fetch Error',
          text: 'Failed to load users.',
          icon: "error",
          timer: 2000,
        });
      }},
      async register(context, payload) {
        try {
          console.log(payload);
          const response = await axios.post(`${Server}users/register`, payload);
          const { msg, token } = response.data;
          
          if (token) {
            context.commit("setUser", payload);
            sweet({
              title: 'Registration Successful',
              text: msg,
              icon: "success",
              timer: 2000,
            });
            router.push({ name: 'Login' });
          }
        } catch (error) {
          sweet({
            title: 'Registration Error',
            text: error.response?.data?.msg || 'An error occurred during registration.',
            icon: "error",
            timer: 2000,
          });
        }
      }
      
      
  },
  modules: {},
});
