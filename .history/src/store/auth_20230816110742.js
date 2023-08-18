import { defineStore } from 'pinia';
export const useAuthStore = defineStore('auth', {
state: {
  isAuthenticated: localStorage.getItem('token'),
  // userinfo: JSON.parse(localStorage.getItem('userinfo')),
  userinfo: null,
  
  // Các thông tin người dùng khác nếu cần
};

getters = {
  isAuthenticated: state => state.isAuthenticated,
  userinfo: state => state.userinfo,
  
  // Các getters khác nếu cần
};
mutations = {
    SET_AUTHENTICATED(state, value) {
      state.isAuthenticated = value;
    },
    SET_USERINFO(state, value) {
      state.userinfo = value;
      
    },
    // Các mutations khác nếu cần
  };
  import axios from 'axios';

actions: {
    login({ commit }, { username, password }) {
    
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
      //   headers: {
      //     Authorization: 'Bearer ' + localStorage.getItem('token'), 
      //   }}
        )
      .then(response=>{
        // localStorage.setItem('userinfo', JSON.stringify(response.data));
        commit('SET_USERINFO',response.data)

        
      })
      .catch(error =>{
        alert('lấy thông tin thất bại',error);
      })

      // console.log(data)  
      // this.token = data.access_token; 
    })
    .catch(error => {
      // Xử lý lỗi đăng nhập
      console.error(error);
      
      alert('Đăng nhập thất bại!');
      
    });

    // 
    //   

        },

       
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
    mutations,
    actions,
    getters,
  };