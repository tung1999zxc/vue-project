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
            axios.post('https://api.tranhai.net/api/manufacturer/_search?id=1')
            .then((result) => {
                console.log(result.data);
                alert('tìm kiếm thành công')
                
            }).catch((err) => {
                console.error(err);
                alert('tìm kiếm thất bại')

        })
            
        }
       
      },
    };
    </script>
    
    <style scoped>
    
    </style>
    
    