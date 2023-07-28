<template>
    <div>
      <h2>Đăng nhập</h2>
      <form @submit.prevent="loginUser">
        <input type="email" v-model="email" placeholder="Email" required>
        <input type="password" v-model="password" placeholder="Mật khẩu" required>
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  </template>
  
  <script>
  import { loginUser } from '../services/firebase';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async loginUser() {
        try {
          await loginUser(this.email, this.password);
          // Đăng nhập thành công, điều hướng đến trang Home
          this.$router.push('/home');
        } catch (error) {
          console.error('Lỗi khi đăng nhập:', error.message);
        }
      },
    },
  };
  </script>
  