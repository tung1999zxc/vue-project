<template>
  <Menu/>
  <router-view></router-view>
 
 
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
