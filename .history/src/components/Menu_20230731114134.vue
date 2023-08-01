<template>
    <div class="menu mt-3">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">Liên hệ</a>
        </li>
        <li class="" style="margin-left : 800px;">
          <router-link to="/login">Đăng nhập</router-link>
        </li>
        <li>
          <a href="/contact">Đăng kí</a>
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
  