<template>
    <div>
      <div class="justify-content-between d-flex px-5 py-3 " style="background: #aab3c4; ">
      
        
        <div class="">
          <a-dropdown v-model:visible="visible">
            <a class="ant-dropdown-link h3 mt-2 " @click.prevent>
              <router-link class="text-decoration-none text-bg-success " to="/">Menu</router-link>
              <DownOutlined />
            </a>
            <template #overlay>
              <a-menu @click="handleMenuClick">
                <a-menu-item key="1"></a-menu-item>
                <a-menu-item key="2"><router-link class="text-decoration-none" to="/crud">CRUD</router-link></a-menu-item>
                <a-menu-item key="3"><router-link class="text-decoration-none" to="/todoList">TODOLIST</router-link></a-menu-item>
                <a-menu-item key="3"><router-link class="text-decoration-none" to="/dragdrop">DragDrop</router-link></a-menu-item>
                <a-menu-item key="3"><router-link class="text-decoration-none" to="/antDesign2">AntDesign2</router-link></a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>

        </div>
        <div class="h4 mt-1"></div>
        <div class="h4 mt-1"></div>
        <!-- <div class="h4 mt-1"><router-link class="text-white text-decoration-none" to="/upload">UPLOAD</router-link></div> -->
        
        
        <div class=""><div v-if="!store.isAuthenticated" class="btn btn-primary mr-2 " >
          <router-link class="text-dark h5 text-decoration-none " to="/Login">Đăng nhập</router-link></div>
         <div v-else class="btn btn-danger " >
          <div @click="handleLogout">Đăng xuất</div></div>
         <div class="btn btn-primary mx-2"  v-show="!store.isAuthenticated"><router-link class=" h5 px-3 text-dark text-decoration-none" to="/Regis">Đăng Kí</router-link></div></div>
     
    </div>
   
    </div>
  </template>
  
  <script setup lang="ts">

  import 'bootstrap/dist/css/bootstrap.css';
  import { useAuthStore } from '../store/auth';
  import { computed } from 'vue';
  import { useRouter } from 'vue-router';
  
  const store = useAuthStore();
  // const isAuthenticated = computed(() => store.isAuthenticated);
  // const { login, logout } = store.actions['auth'];
  // const SET_AUTHENTICATED = store.commit('auth/SET_AUTHENTICATED');
    // handleLogin() {
    //   this.login(); // Call the login action to set isAuthenticated to true
    // },
   const handleLogout = () => {
      store.logout(); // Call the logout action to set isAuthenticated to false
    };

    
    // const logoutUser = () =>{
    //   // Xóa mã thông báo JWT khỏi localStorage khi đăng xuất
    //   localStorage.removeItem('token');
    //   // Hoặc đặt lại giá trị isAuthenticated về false khi đăng xuất
    //   SET_AUTHENTICATED = null;
    //   alert('đăng xuất thành  công');
     
      

    // };
    
   
  
  </script>
  
  <style scoped>
  
 
  </style>
  