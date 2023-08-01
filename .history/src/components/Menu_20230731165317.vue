<template>
    <div class="menu bg-success">
      <ul class="">
        <li><router-link to="/">Home</router-link></li>
        
        <li class="ml-auto btn border-primary bg-primary" style="margin-left : 700px;">
         <router-link v-if="!token" to="/Login">Đăng nhập</router-link>
         <router-link v-else to="/Login">Đăng xuất</router-link></li>
        <li><router-link to="/Regis">Đăng Kí</router-link></li>
      </ul>
    </div>
  </template>
  
  <script>
  import 'bootstrap/dist/css/bootstrap.css';
  export default {
    data() {
        return {
           token: localStorage.getItem('token'),
        }
    },
    methods: {
        logoutUser(){
      // Xóa mã thông báo JWT khỏi localStorage khi đăng xuất
      localStorage.removeItem('token');
      // Hoặc đặt lại giá trị isAuthenticated về false khi đăng xuất
      this.isAuthenticated = false;
      alert('đăng xuất thành  công');

    },
    },
   
  };
  </script>
  
  <style scoped>
  .menu {
    background-color: #f0f0f0;
  }
  
  ul {
    list-style: none;
    padding: 10px;
    margin: 0;
    margin-left: 60px;
    display: flex;
  }
  
  li {
    padding: 10px 20px;
  }
  
  a {
    text-decoration: none;
    color: white;
    font-weight: 500;
  }
  </style>
  