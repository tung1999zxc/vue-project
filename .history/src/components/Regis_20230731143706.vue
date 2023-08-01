<template>
  <div id="app" class="container mt-5 ">
   <!-- <div  class="row justify-content-center  ">
    <div class="col"> -->
       <h1>Trang đăng kí</h1>
       <div class="input-group">
           <label for="username">Email</label>
           <input v-model="email" type="text" id="username" placeholder="Tên đăng nhập">
       </div> 
       <div class="input-group">
           <label for="username">Tên đăng nhập</label>
           <input v-model="username" type="text" id="username" placeholder="Tên đăng nhập">
       </div> 
       <div class="input-group ">
         <label for="password">Mật khẩu</label>
         <input v-model="password" type="password" id="password" placeholder="Mật khẩu">
        </div>
        <div class="input-group">
            <label for="username">Nhập lại mật khẩu</label>
            <input v-model="rePassword" type="text" id="username" placeholder="Tên đăng nhập">
        </div> 
       <button class="login-btn mb-2" @click="login">Đăng nhập</button> 
       
    </div>
    <!-- </div>
   </div> -->
</template>

  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: "",
        password: "",
        email:"",
        rePassword:"",

      };
    },
    methods: {
      login() {
        // Lấy thông tin đăng nhập từ data
        const username = this.username;
        const password = this.password;
        const email = this.email;
        const rePassword = this.rePassword;
  
        // Gửi yêu cầu đăng nhập đến server
        axios.post('https://api.tranhai.net/api/auth/login', {
          username: username,
          password: password,
          email: email,
          rePassword: rePassword
        })
        .then(response => {
          const data = response.data;
          alert('Đăng kí thành công');
          // console.log(data)  
          // this.token = data.access_token; 
        })
        .catch(error => {
          // Xử lý lỗi đăng nhập
          console.error(error);
          alert('Đăng kí thất bại!');
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
  
  