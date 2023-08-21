<template>
  <div>
    <div v-if="store.isAuthenticated"><test/><br><footer1/></div> 
    <div class="text-center mt-5 h5" v-else>Vui lòng đăng nhập hoặc đăng ký để truy cập vào trang chủ.
      
    </div>
  </div>
</template>

<script setup>
import test from '../components/test.vue'
import footer1  from '../components/footer1.vue'
import { useAuthStore } from '../store/auth';

const store = useAuthStore();
</script>
