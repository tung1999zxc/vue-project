<template>
    <div class="menu bg-success">
      <ul class="">
        <li><router-link to="/">Home</router-link></li>
        
        <li v-if="!isAuthenticated" class="ml-auto btn border-primary bg-primary" style="margin-left : 700px;">
         <router-link to="/Login">Đăng nhập</router-link>
         </li>
   
        <li v-else class="ml-auto btn border-primary bg-primary" style="margin-left : 700px;">
         <a @click="handleLogout">Đăng xuất</a>
         </li>
        
        <li><router-link to="/Regis">Đăng Kí</router-link></li>
      </ul>
    </div>
  </template>
  
  <script>
  import 'bootstrap/dist/css/bootstrap.css';
  import { mapState, mapGetters , mapMutations ,mapActions} from 'vuex';
  export default {
    computed: {
    ...mapGetters('auth', ['isAuthenticated']),
  },
    data() {
        return {
        //    token: localStorage.getItem('token'),
          //  isAuthenticated: null,
        }
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
  .menu {
    background-color: #f0f0f0;
  }
  
  ul {
    list-style: none;
    padding: 10px;
    margin: 0;
    margin-left: 60px;
    display: flex;
  }
  
  li {
    padding: 10px 20px;
  }
  
  a {
    text-decoration: none;
    color: white;
    font-weight: 500;
  }
  </style>
  