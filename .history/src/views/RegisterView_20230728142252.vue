<template>
    <div>
      <h2>Đăng ký</h2>
      <form @submit.prevent="registerUser">
        <input type="email" v-model="email" placeholder="Email" required>
        <input type="password" v-model="password" placeholder="Mật khẩu" required>
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  </template>
  
  <script>
  import { registerUser } from 'firebase';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async registerUser() {
        try {
          await registerUser(this.email, this.password);
          // Đăng ký thành công, điều hướng đến trang Home
          this.$router.push('/home');
        } catch (error) {
          console.error('Lỗi khi đăng ký:', error.message);
        }
      },
    },
  };
  </script>
  