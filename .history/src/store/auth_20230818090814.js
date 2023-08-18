import { defineStore } from 'pinia';


import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: localStorage.getItem('token'),
    userinfo: JSON.parse(localStorage.getItem('userinfo')),
  }),
getters:{
  getIsAuthenticated : (state) => state.isAuthenticated,
  getUserinfo : (state) => state.userinfo,
},

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
       
    
        }
 
     catch (error) {
      console.log(username,password);
        console.error(error);
        alert('Đăng nhập thất bại!');
      }
      if (localStorage.getItem('token')){
        axios.get('https://api.tranhai.net/api/userinfo/me')
        .then((Response) => {
        localStorage.setItem('userinfo', JSON.stringify(Response.data));
        this.onUserinfo(JSON.parse(localStorage.getItem('userinfo')) ); 
        console.log(this.userinfo);
        }).catch((error) => {
          alert('Lấy thông tin thất bại', error);
        });
        
      }
    },

    async logout() {
      this.onUserinfo(null);
      this.onIsAuthenticated(null);
      localStorage.removeItem('userinfo');
      localStorage.removeItem('token');
      alert('Đăng xuất thành công');
    },
  },
});

