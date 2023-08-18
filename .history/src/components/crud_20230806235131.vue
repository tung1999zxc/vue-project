<template>
    <div  id="app" class="container mt-5 bg-light">
      
      
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
       
      },
    };
    </script>
    
    <style scoped>
    
    </style>
    
    