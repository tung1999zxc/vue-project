<template>
    <div class="menu">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <router-link to="/login">Đăng nhậP</router-link>
        </li>
        <li>
          <a href="/contact">Đăng kí</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name:'menu'
    // mounted: () => {
        // var a = 1;
        // console.log(a);
        // debugger
    }
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
  