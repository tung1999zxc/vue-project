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
  
      },

    async login({username,password }) {
      try {
        const response = await axios.post(`https://api.tranhai.net/api/auth/login`, {
          username: username,
          password: password,
        });
        
        const data = response.data;
        localStorage.setItem('token', data.access_token);
        this.onIsAuthenticated(localStorage.getItem('token')) ;
        const updateUser = async () => {
          try {
            const userInfoResponse = await axios.get('https://api.tranhai.net/api/userinfo/me');
            localStorage.setItem('userinfo', JSON.stringify(userInfoResponse.data));
            this.onUserinfo(JSON.parse(localStorage.getItem('userinfo')) );
            console.log(this.userinfo);
          } catch (error) {
            alert('Lấy thông tin thất bại', error);
          }
        }}
 
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

