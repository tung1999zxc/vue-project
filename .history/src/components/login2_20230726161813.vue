<template>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username:</label>
          <input class="form-control" type="text" id="username" v-model="username" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input class="form-control" type="password" id="password" v-model="password" />
        </div>
        <div>
          <button class="btn btn-" type="submit">Login</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
import axios from 'axios';
  export default {
    data() {
      return {
        username: "haitv",
        password: "123456",
      };
    },
    methods: {
      
        login() {
                    // Lấy thông tin đăng nhập từ data
                    const username = this.username;
                    const password = this.password;

                    // Gửi yêu cầu đăng nhập đến server
                    axios.post('https://api.tranhai.net/api/auth/login', {
                        username: username,
                        password: password
                    })
                    .then(response => {
                        const data = response.data;
                        localStorage.setItem('token', data.access_token);
                        alert('Đăng nhập thành công');
                        // console.log(data)  
                        // this.token = data.access_token; 
                    })
                    .catch(error => {
                        // Xử lý lỗi đăng nhập
                        console.error(error);
                        alert('Đăng nhập thất bại!');
                    });
                }
      },
    };
  
  </script>
  
  <style scoped>
  input:focus {
    outline: none;
  } 
  h1 {
    
  }

  </style>
  