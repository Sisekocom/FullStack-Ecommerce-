import router from "@/router";
import axios from "axios";
import sweet from 'sweet-alert'; 
const actions = {
  async login({ commit }, payload) {
    try {
      const response = await axios.post(`${mbcURL}user/login`, payload);
      const { msg, token, result } = response.data;

      if (token) {
        commit('setUser', { msg, token, result });
       
        cookieParser.set('setUser', { token, msg, result });
        AuthenticateUser.js.applyToken(token);
        sweet({
          title: msg,
          text: `Welcome back, ${result?.firstName} ${result?.lastName}`,
          icon: "success",
          timer: 2000
        });
        router.push({ name: 'home' });
      } else {

      }
    } catch (e) {
      sweet({
        title: 'Error',
        text: e.response?.data?.msg,
        icon: "error",
        timer: 2000
      });
    }
  },

  async register({ dispatch }, payload) {
    try {
      const response = await axios.post(`${mbcURL}user/register`, payload);
      const { msg, token } = response.data;

      if (token) {
        dispatch('fetchUsers'); 
        sweet({
          title: 'Registration Successful',
          text: msg,
          icon: "success",
          timer: 2000
        });
        router.push({ name: 'login' });
      }
    } catch (e) {
      sweet({
        title: 'Error',
        text: e.response?.data?.msg,
        icon: "error",
        timer: 2000
      });
  
    }
  }
};

export default actions;
