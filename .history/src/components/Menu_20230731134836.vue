<template>
    <div class="menu bg-success">
      <ul class="d-flex">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">Liên hệ</a>
        </li>
        <li class="ml-auto " style="margin-left : 700px;">
          <router-link to="/Login">Đăng nhập</router-link>
        </li>
        <li>
          <router-link to="/Regis">Đăng Kí</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import 'bootstrap/dist/css/bootstrap.css';
  export default {
    name:'menu'
   
  };
  </script>
  
  <style>
  .menu {
    background-color: #f0f0f0;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  
  li {
    padding: 10px 20px;
  }
  
  a {
    text-decoration: none;
    color: #333;
  }
  </style>
  