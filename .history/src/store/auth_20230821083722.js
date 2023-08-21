
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

  
  // Các thông tin người dùng khác nếu cần
};

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
  import axios from 'axios';
  import router from '../router/index'; 
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
        
      })
      .catch(error =>{
        alert('lấy thông tin thất bại');
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