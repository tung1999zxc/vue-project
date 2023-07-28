<template>
  <div>
    <router-link to="/home">Trang chủ</router-link>
    <router-link to="/login">Đăng nhập</router-link>
    <router-link to="/register">Đăng ký</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
