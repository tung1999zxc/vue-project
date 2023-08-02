<template>
    <div>
      <div class="container-flu justify-content-between d-flex mx-5 pt-1 bg-success">
      
        <div><router-link to="/">Home</router-link></div>
        <div class="ml-l3"><div v-if="!isAuthenticated" class="" >
          <router-link to="/Login">Đăng nhập</router-link>
          </div>
         <div v-else class="btn btn-danger" >
          <a @click="handleLogout">Đăng xuất</a>
          </div>
         <div v-show="!isAuthenticated"><router-link to="/Regis">Đăng Kí</router-link></div></div>
     
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
  router-link {
    text-decoration: none;
  }
 
  </style>
  