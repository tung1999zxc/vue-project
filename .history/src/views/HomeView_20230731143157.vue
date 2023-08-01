<template>
  <div>
    <h2>Trang chủ</h2>
    <p v-if="currentUser">Xin chào, {{ currentUser.email }}!</p>
    <button v-if="currentUser" @click="logoutUser">Đăng xuất</button>
    <p v-else>Vui lòng đăng nhập hoặc đăng ký để truy cập vào trang chủ.</p>
  </div>
</template>

<script>


export default {
  data() {
    return {
      currentUser: null,
    };
  },
  mounted() {
    this.getCurrentUser();
  },
  methods: {
    async getCurrentUser() {
      this.currentUser = await getCurrentUser();
    },
    async logoutUser() {
      try {
        await logoutUser();
        this.currentUser = null;
        // Đăng xuất thành công, điều hướng đến trang đăng nhập
        this.$router.push('/login');
      } catch (error) {
        console.error('Lỗi khi đăng xuất:', error.message);
      }
    },
  },
};
</script>
