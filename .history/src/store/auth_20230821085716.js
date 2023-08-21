
import { defineStore } from 'pinia';


import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: localStorage.getItem('token'),
    userinfo: JSON.parse(localStorage.getItem('userinfo')),
  }),


  actions: {

    onIsAuthenticated (data){
      this.isAuthenticated = data;
      },
    onUserinfo (data){
        this.userinfo = data;


const state = {
  isAuthenticated: localStorage.getItem('token'),
  userinfo: JSON.parse(localStorage.getItem('userinfo')),


  
      },

const getters = {
  isAuthenticated: state => state.isAuthenticated,
  userinfo: state => state.userinfo,
  
  // Các getters khác nếu cần
};
  const mutations = {
    SET_AUTHENTICATED(state, value) {
      state.isAuthenticated = value;
    },
    SET_USERINFO(state, value) {
      state.userinfo = value;
      
    },
    // Các mutations khác nếu cần
  };
  // import axios from 'axios';
  
  const actions = {
    login( { username, password }) {
    
      axios.post('https://api.tranhai.net/api/auth/login', {
      username: username,
      password: password
    })
    .then(response => {
      const data = response.data;
      localStorage.setItem('token', data.access_token);
      commit('SET_AUTHENTICATED', localStorage.getItem('token'));

      axios.get('https://api.tranhai.net/api/userinfo/me'
      // {
      //    : {
      //     Authorization: 'Bearer ' + localStorage.getItem('token'), 
      //   }}
        )
      .then(response=>{
        localStorage.setItem('userinfo', JSON.stringify(response.data));

    async login({username,password }) {
      try {
        const response = await axios.post(`https://api.tranhai.net/api/auth/login`, {
          username: username,
          password: password,
        });

        
        const data = response.data;
        localStorage.setItem('token', data.access_token);
        this.onIsAuthenticated(localStorage.getItem('token')) ;
       


        // try {
        //     const userInfoResponse = await axios.get('https://api.tranhai.net/api/userinfo/me');
        //     localStorage.setItem('userinfo', JSON.stringify(userInfoResponse.data));
        //     this.onUserinfo(JSON.parse(localStorage.getItem('userinfo')) );
        //     console.log(this.userinfo);
        //   } catch (error) {
        //     alert('Lấy thông tin thất bại', error);
        //   }

        }
 
     catch (error) {
      console.log(username,password);
        console.error(error);
        alert('Đăng nhập thất bại!');
      }
    },

    async logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('userinfo');
      this.onIsAuthenticated(null);
      this.onUserinfo(null);
      alert('Đăng xuất thành công');
    },
  },
});


      logout({ commit }) {
        localStorage.removeItem('token');
        localStorage.removeItem('userinfo');
          commit('SET_AUTHENTICATED', localStorage.getItem('token'));
          commit('SET_USERINFO', {});
          alert('đăng xuất thành  công');
        },


  };
  
  
  export default {
    namespaced: true,
    state,
  
    actions,
    getters,
  };

