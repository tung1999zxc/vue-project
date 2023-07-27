<script setup>
import { ref } from 'vue';
import axios from 'axios';

// Sử dụng ref để tạo các biến reactivity
const username = ref('haitv');
const password = ref('123456');

// Hàm xử lý đăng nhập
const login = () => {
  // Lấy thông tin đăng nhập từ data
  const user = username.value;
  const pass = password.value;

  // Gửi yêu cầu đăng nhập đến server
  axios.post('https://api.tranhai.net/api/auth/login', {
    username: user,
    password: pass
  })
  .then(response => {
    const data = response.data;
    localStorage.setItem('token', data.access_token);
    alert('Đăng nhập thành công');
  })
  .catch(error => {
    // Xử lý lỗi đăng nhập
    console.error(error);
    alert('Đăng nhập thất bại!');
  });
};
</script>

<template>
   <div id="app" class="container">
        <h1>Trang đăng nhập</h1>
        <div class="input-group">
            <label for="username">Tên đăng nhập</label>
            <input v-model="username" type="text" id="username" placeholder="Tên đăng nhập">
        </div>
        <div class="input-group">
            <label for="password">Mật khẩu</label>
            <input v-model="password" type="password" id="password" placeholder="Mật khẩu">
        </div>
        <button class="login-btn" @click="login">Đăng nhập</button>
    </div>
</template>



    
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

