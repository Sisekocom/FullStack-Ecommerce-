import { createStore } from "vuex";
import axios from "axios";
import Swal from "sweetalert2";
import AuthenticateUser from "@/store/services/AuthenticateUser";
import router from "@/router";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
const Server = "https://fullstack-ecommerce-do0c.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    orders: null,
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
    setOrders(state, value) {
      state.orders = value;
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
    async login(context, payload) {
      try {
        const response = await axios.post(`${Server}users/login`, payload);
        const { msg, token, result } = response.data;
        if (result) {
          context.commit("setUser", { msg, result });
          cookies.set("LoggedUser", { token, msg, result });

          AuthenticateUser.applyToken(token);
          Swal.fire({
            title: msg,
            text: `Welcome back, ${result.firstName} ${result.lastName}`,
            icon: "success",
            timer: 2000,
          });
          router.push({ name: "home" });
        } else {
          Swal.fire({
            title: "Login Info",
            text: msg,
            icon: "info",
            timer: 2000,
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Login Error",
          text: error.response?.data?.msg || "Failed to login.",
          icon: "error",
          timer: 2000,
        });
      }
    },

    async fetchAllOrders(context) {
      try {
        const { results } = (await axios.get(`${Server}orders`)).data;
        console.log(results);
        context.commit("setOrders", results);
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
          timer: 2000,
        });
      }
    },

    async fetchProducts(context) {
      try {
        const { results } = (await axios.get(`${Server}products`)).data;
        console.log(results);
        context.commit("setProducts", results);
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchProduct({ commit }, payload) {
      try {
        const { result } = (await axios.get(`${Server}products/${payload.id}`))
          .data;
        // console.log(results);
        commit("setProduct", result);
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "A product was not found.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async delete(context, payload) {
      try {
        console.log();
        const { result } = (
          await axios.delete(`${Server}products/delete/${payload}`)
        ).data;
        console.log(result);
        context.commit("setProduct", result);
      } catch (error) {
        Swal.fire({
          title: "msg",
          text: "A Product was deleted !.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchUser({ commit }, payload) {
      try {
        console.log("payload ->", payload);
        const response = await axios.get(`${Server}users/${payload}`);
        console.log(response.data.result);
        commit("setUser", response.data.result);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        Swal.fire({
          title: "Fetch Error",
          text: "Failed to load users.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchUsers({ commit }) {
      try {
        const response = await axios.get(`${Server}users`);
        commit("setUsers", response.data.results);
      } catch (error) {
        Swal.fire({
          title: "Fetch Error",
          text: "Failed to load users.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async updateUser(context, payload) {
      try {
        let { msg } = await (
          await axios.patch(`${Server}/users/${payload.userID}`, payload)
        ).data;
        context.dispatch("fetchUsers");
        Swal.fire({
          title: "update User",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        Swal.fire({
          title: "Error",
          text: e.message,
          icon: "error",
          timer: 2000,
        });
      }
    },
    async register(context, payload) {
      try {
        // const response = await axios.post(`${Server}users/register`, payload);
        // const { msg, token } = await response.data;
        const { msg, token } = await (
          await axios.post(`${Server}users/register`, payload)
        ).data;

        if (token) {
          // context.commit("setUser", payload);
          Swal.fire({
            title: "Registration Successful",
            text: msg,
            icon: "success",
            timer: 2000,
          });
          router.push({ name: "login" });
        }
      } catch (error) {
        Swal.fire({
          title: "Registration Error",
          text: error.message || "An error occurred during registration.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async addCart(context, payload) {
      try {
        const currentUser = cookies.get("LoggedUser")?.result;
        const updatedData = Object.assign(
          {},
          { userID: currentUser.userID, prodID: payload.prodID }
        );
        console.log(updatedData);
        const { msg } = (
          await axios.post(`${Server}orders/addOrder`, updatedData)
        ).data;
        // if (response.status !== 200) {
        //   throw new Error(`Failed to update Product. Status: ${response.status}`);
        // }
        Swal.fire({
          title: "Add to cart",
          text: msg,
          icon: "success",
          timer: 2000,
        });
        context.commit("setOrders", updatedData);
      } catch (error) {
        Swal.fire({
          title: "Add to cart",
          text: error.message,
          icon: "error",
          timer: 2000,
        });
      }
    },
  },
  modules: {},
});
