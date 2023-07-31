<template>
    <div class="menu">
      <ul>
        <li v-for="(item, index) in menuItems" :key="index">
          <a :href="item.link">{{ item.title }}</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        
      };
    },
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
  