<template>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: "",
        password: "",
      };
    },
    methods: {
      handleSubmit() {
        // Tại đây, bạn có thể thực hiện xác thực với cơ sở dữ liệu hoặc API.
        // Đây chỉ là một ví dụ đơn giản, không thực hiện xác thực thực tế.
        if (this.username === "user" && this.password === "password") {
          alert("Đăng nhập thành công!");
        } else {
          alert("Đăng nhập không thành công. Vui lòng kiểm tra tài khoản của bạn!");
        }
      },
    },
  };
  </script>
  
  <style>
  .login {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>
  