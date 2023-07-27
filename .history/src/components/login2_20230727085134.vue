<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <div class="login">
                    <h2>Login</h2>
                    <form @submit.prevent="login">
                      <div>
                        <label for="username">Username:</label>
                        <input  type="text" id="username" v-model="username" />
                      </div>
                      <div>
                        <label for="password">Password:</label>
                        <input  type="password" id="password" v-model="password" />
                      </div>
                      <div>
                        <button  type="submit">Login</button>
                      </div>
                    </form>
                  </div>
            </div>
        </div>
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
  body {
    font-family: Arial, sans-serif;
  }
  
  .container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .input-group {
    margin-right: 20px;
    margin-bottom: 10px;
  }
  
  .input-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .input-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  .login-btn {
    background-color: #4CAF50;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  </style>
  
  