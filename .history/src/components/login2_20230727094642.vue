<template>
  <div id="app" class="container ">
   <!-- <div  class="row justify-content-center  ">
    <div class="col"> -->
       <h1>Trang đăng nhập</h1>
       <div class="input-group">
           <label for="username">Tên đăng nhập</label><br>
           <input v-model="username" type="text" id="username" placeholder="Tên đăng nhập">
       </div> <br>
       <div class="input-group ">
           <label for="password">Mật khẩu</label> <br>
           <input v-model="password" type="password" id="password" placeholder="Mật khẩu">
       </div><br>
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
        username: "haitv",
        password: "123456",
      };
    },
    methods: {
      login() {
        // Lấy thông tin đăng nhập từ data
        const username = this.username;
        const password = this.password;
  
        // Gửi yêu cầu đăng nhập đến server
        axios.post('https://api.tranhai.net/api/auth/login', {
          username: username,
          password: password
        })
        .then(response => {
          const data = response.data;
          localStorage.setItem('token', data.access_token);
          alert('Đăng nhập thành công');
          // console.log(data)  
          // this.token = data.access_token; 
        })
        .catch(error => {
          // Xử lý lỗi đăng nhập
          console.error(error);
          alert('Đăng nhập thất bại!');
        });
      }
    },
  };
  </script>
  
  <style scoped>
 
  </style>
  
  