import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: localStorage.getItem('token'),
    userinfo: null,
  }),

  getters: {
    onIsAuthenticated (data){

    }
    onUserinfo: state => state.userinfo,
  },

  actions: {

    async login({ commit }, { username, password }) {
      try {
        const response = await axios.post('https://api.tranhai.net/api/auth/login', {
          username: username,
          password: password,
        });

        const data = response.data;
        localStorage.setItem('token', data.access_token);
        commit('SET_AUTHENTICATED', localStorage.getItem('token'));

        try {
          const userInfoResponse = await axios.get('https://api.tranhai.net/api/userinfo/me');
          commit('SET_USERINFO', userInfoResponse.data);
        } catch (error) {
          alert('Lấy thông tin thất bại', error);
        }
      } catch (error) {
        console.error(error);
        alert('Đăng nhập thất bại!');
      }
    },

    async logout({ commit }) {
      localStorage.removeItem('token');
      commit('SET_AUTHENTICATED', null);
      commit('SET_USERINFO', null);
      alert('Đăng xuất thành công');
    },
  },
});
