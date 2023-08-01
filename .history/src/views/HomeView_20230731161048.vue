<template>
  <div>
    <h2>Trang chủ</h2>
    <p v-if="isAuthenticated">Xin chào,</p>
    <button v-if="isAuthenticated" @click="logoutUser">Đăng xuất</button>
    <p v-else>Vui lòng đăng nhập hoặc đăng ký để truy cập vào trang chủ.<br><router-link to="/login" >Đăng nhập</router-link></p>
    
  </div>
</template>

<script>


export default {
  data() {
    return {
      isAuthenticated: false,
    };
  },
  created() {
    this.isAuthenticated = this.checkAuthentication();
  },
  methods: {
    checkAuthentication() {
      // Kiểm tra xem mã thông báo JWT đã tồn tại trong localStorage hay không
      const token = localStorage.getItem('token');
      // Hoặc bạn có thể sử dụng Vuex nếu bạn đang lưu trữ mã thông báo JWT trong Vuex
      // const token = this.$store.state.token;

      // Nếu tồn tại mã thông báo JWT và không hết hạn, xác định rằng người dùng đã đăng nhập
      if (token) {
        // Phân tích mã thông báo JWT để xem liệu nó còn hợp lệ hay đã hết hạn
        // Nếu mã thông báo hợp lệ, người dùng đã đăng nhập
        return true;
      } else {
        // Nếu không tồn tại mã thông báo JWT hoặc mã thông báo đã hết hạn, người dùng chưa đăng nhập
        return false;
      }
    },
    logoutUser(){
      // Xóa mã thông báo JWT khỏi localStorage khi đăng xuất
      localStorage.removeItem('token');
      // Hoặc đặt lại giá trị isAuthenticated về false khi đăng xuất
      this.isAuthenticated = false;
      this.$router.push(/login);

    },
  },
};
</script>
