<template>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="formData.username" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="formData.password" required />
      </div>
      <button type="submit">Register</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          username: '',
          email: '',
          password: '',
        },
      };
    },
    methods: {
      handleSubmit() {
        // Xử lý thông tin đăng kí, gửi đến máy chủ hoặc lưu vào cơ sở dữ liệu
        console.log('Form data:', this.formData);
        // Reset form sau khi submit thành công (tùy chọn)
        this.formData = {
          username: '',
          email: '',
          password: '',
        };
      },
    },
  };
  </script>
  
  <style>
  form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
  }
  
  div {
    margin-bottom: 10px;
  }
  
  label {
    font-weight: bold;
  }
  
  input {
    padding: 5px;
  }
  </style>
  