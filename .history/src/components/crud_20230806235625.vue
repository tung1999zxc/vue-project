<template>
  <div>
    <button @click="handleSearch">tìm kiếm</button>
  </div>
  </template>
  
    
    <script>
  import axios from 'axios';
  
    
    export default {
      
      data() {
        return {
       
          
        };
      },
   
      methods: {
        handleSearch(){
            axios.post(https://api.tranhai.net/api/manufacturer/_search?id=1)
        }
       
      },
    };
    </script>
    
    <style scoped>
    
    </style>
    
    