<template>
  <div  id="app" class="container mt-5 ">
    
    
      <!-- <div  class="row justify-content-center  ">
       <div class="col"> -->
          <h1>Trang đăng nhập</h1>
          <div class="input-group">
              <label for="username">Tên đăng nhập</label>
              <input v-model="username" type="text" id="username" placeholder="Tên đăng nhập">
          </div> 
          <div class="input-group ">
              <label for="password">Mật khẩu</label>
              <input v-model="password" type="password" id="password" placeholder="Mật khẩu">
          </div>
          <button class="login-btn mb-2" @click="handleLogin">Đăng nhập</button> 
          <div class="mx-auto"><router-link to="/Regis"><span class="text-primary">Đăng kí tài khoản</span></router-link></div>
       </div>
 
    <!-- </div>
   </div> -->
</template>

  
  <script>
import axios from 'axios';
import { mapActions, mapGetters , mapMutations} from 'vuex';
  
  export default {
    
    data() {
      return {
        username: "haitv",
        password: "123456",
        
      };
    },
 
    methods: {
      ...mapMutations('auth', ['SET_AUTHENTICATED']),
      ...mapActions('auth', ['login', 'logout']), // Map the actions to the component's methods
    handleLogin() {
      // Call the mapped action and pass the email and password variables as parameters
      this.login({ email: this.email, password: this.password });
    },
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
  
  