<template>
  <div v-if="!isAuthenticated"><p>Bạn phải đăng nhập để sử dụng</p></div>
  <div v-else> </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const isAuthenticated = computed(()=> store.getters['auth/isAuthenticated']);
const userinfo = computed (() =>  store.getters['auth/userinfo']);

</script>

<style>

</style>