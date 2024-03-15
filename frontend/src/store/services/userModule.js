// import router from "@/router";
// import axios from "axios";
// import sweet from 'sweet-alert'; 
// const actions = {
//   async login({ commit }, payload) {
//     try {
//       const response = await axios.post(`${mbcURL}user/login`, payload);
//       const { msg, token, result } = response.data;

//       if (token) {
//         commit('setUser', { msg, token, result });
       
//         cookieParser.set('setUser', { token, msg, result });
//         AuthenticateUser.js.applyToken(token);
//         sweet({
//           title: msg,
//           text: `Welcome back, ${result?.firstName} ${result?.lastName}`,
//           icon: "success",
//           timer: 2000
//         });
//         router.push({ name: 'home' });
//       } else {

//       }
//     } catch (e) {
//       sweet({
//         title: 'Error',
//         text: e.response?.data?.msg,
//         icon: "error",
//         timer: 2000
//       });
//     }
//   },

// store/index.js
// import Vue from 'vue';
// import Vuex from 'vuex';
// import axios from 'axios';
// import router from '../router';
// import sweet from 'sweetalert';

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
    // Define your state properties if needed
//   },
//   mutations: {
    // Handle state mutations if needed
//   },
//   actions: {
    // async register(context, payload) {
//       try {
//         const response = await axios.post('YOUR_BACKEND_ENDPOINT/user/register', payload);
//         const { msg, token } = response.data;
        
//         if (token) {
//           sweet({
//             title: 'Registration Successful',
//             text: msg,
//             icon: "success",
//             timer: 2000
//           });
//           router.push({ name: 'login' });
//         }
//       } catch (e) {
//         sweet({
//           title: 'Error',
//           text: e.response?.data?.msg || 'An error occurred during registration.',
//           icon: "error",
//           timer: 2000
//         });
//       }
//     },
//   },
// });

// };

// export default actions;
