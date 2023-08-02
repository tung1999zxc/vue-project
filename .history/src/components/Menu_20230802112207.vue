<template>
    <div>
      <div class="justify-content-between d-flex">
      
        <button><router-link to="/">Home</router-link></button>
        <div v-if="!isAuthenticated" class="" >
         <router-link to="/Login">Đăng nhập</router-link>
         </div>
        <div v-else class="btn btn-danger" >
         <a @click="handleLogout">Đăng xuất</a>
         </div>
        <div v-show="!isAuthenticated"><router-link to="/Regis">Đăng Kí</router-link></div>
     
    </div>
    </div>
  </template>
  
  <script>
  import 'bootstrap/dist/css/bootstrap.css';
  import { mapState, mapGetters , mapMutations ,mapActions} from 'vuex';
  export default {
    computed: {
    ...mapGetters('auth', ['isAuthenticated']),
  },
    methods: {
      ...mapMutations('auth', ['SET_AUTHENTICATED']),
      ...mapActions('auth', ['login', 'logout']),
    // handleLogin() {
    //   this.login(); // Call the login action to set isAuthenticated to true
    // },
    handleLogout() {
      this.logout(); // Call the logout action to set isAuthenticated to false
    },

    //     checkAuthentication() {
    //   // Kiểm tra xem mã thông báo JWT đã tồn tại trong localStorage hay không
    //   const SET_AUTHENTICATED = localStorage.getItem('token');
    //   // Hoặc bạn có thể sử dụng Vuex nếu bạn đang lưu trữ mã thông báo JWT trong Vuex
    //   // const token = this.$store.state.token;

    //   // Nếu tồn tại mã thông báo JWT và không hết hạn, xác định rằng người dùng đã đăng nhập
    //   if (SET_AUTHENTICATED) {
    //     // Phân tích mã thông báo JWT để xem liệu nó còn hợp lệ hay đã hết hạn
    //     // Nếu mã thông báo hợp lệ, người dùng đã đăng nhập
    //     return true;
    //   } else {
    //     // Nếu không tồn tại mã thông báo JWT hoặc mã thông báo đã hết hạn, người dùng chưa đăng nhập
    //     return false;
    //   }
    // },
        logoutUser(){
      // Xóa mã thông báo JWT khỏi localStorage khi đăng xuất
      localStorage.removeItem('token');
      // Hoặc đặt lại giá trị isAuthenticated về false khi đăng xuất
      this.SET_AUTHENTICATED = null;
      alert('đăng xuất thành  công');
     
      

    },
    },
   
  };
  </script>
  
  <style scoped>
 
  </style>
  