<template>
    <div>
      <div class="justify-content-between d-flex px-5 py-3 " style="background: #aab3c4; ">
      
        <div class="h3"><router-link class="text-white text-decoration-none" to="/">Home</router-link></div>
        <div v-show="isAuthenticated"><h3>Xin chào {{userinfor.first_name}}</h3></div>
        <div class=""><div v-if="!isAuthenticated" class="btn btn-primary mr-2 " >
          <router-link class="text-dark h5 text-decoration-none " to="/Login">Đăng nhập</router-link></div>
         <div v-else class="btn btn-danger " >
          <div @click="handleLogout">Đăng xuất</div></div>
         <div class="btn btn-primary mx-2"  v-show="!isAuthenticated"><router-link class=" h5 px-3 text-dark text-decoration-none" to="/Regis">Đăng Kí</router-link></div></div>
     
    </div>
   
    </div>
  </template>
  
  <script>
  import 'bootstrap/dist/css/bootstrap.css';
  import { mapState, mapGetters , mapMutations ,mapActions} from 'vuex';
  export default {
    computed: {
    ...mapGetters('auth', ['isAuthenticated','userinfo']),
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
  