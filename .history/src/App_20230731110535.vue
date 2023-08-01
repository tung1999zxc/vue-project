<template>
  <Menu/>
  <router-link to="/login">Đăng nhập</router-link>
 
 
</template>
<script setup lang="ts">
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router'
import Menu from './components/Menu.vue'


//import login from './components/login.vue'

// export default {
//   components: {
//     Menu,login2
//   },
// };

</script>

<style scoped>

</style>
