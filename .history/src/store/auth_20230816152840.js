import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: localStorage.getItem('token'),
    userinfo: null,
  }),


  actions: {

    onIsAuthenticated (data){
      this.isAuthenticated = data;
      },
      onUserinfo (data){
        this.userinfo =data;
  
      },

    async login({username,password }) {
      try {
        const response = await axios.post(`https://api.tranhai.net/api/auth/login`, {
          username: username,
          password: password,
        });
        console.log(username,password);
        const data = response.data;
        localStorage.setItem('token', data.access_token);
        this.isAuthenticated = localStorage.getItem('token');
        // const userInfoResponse = await axios.get('https://api.tranhai.net/api/userinfo/me')
        // try {
        //   this.userinfo= userInfoResponse.data;
          
        // } catch (error) {
        //   alert('Lấy thông tin thất bại', error);  
        // }
        
      }
     catch (error) {
        console.error(error);
        alert('Đăng nhập thất bại!');
      }
    },

    async logout() {
      localStorage.removeItem('token');
      this.isAuthenticated= null;
      this.userinfo =  null;
      alert('Đăng xuất thành công');
    },
  },
});
