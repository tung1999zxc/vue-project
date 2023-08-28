<template>
  <div>
    <a-button type="">Primary Button</a-button>
    <a-button type="dashed" shape="round">Dashed Round Button</a-button>
    <a-button type="text" size="small" :loading="isLoading" @click="simulateLoading">
      {{ isLoading ? 'Loading...' : 'Text Small Button' }}
    </a-button>
    <a-button type="link" disabled>Disabled Link Button</a-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Button } from 'ant-design-vue';


    const isLoading = ref(false);

    const simulateLoading = () => {
      isLoading.value = true;
      setTimeout(() => {
        isLoading.value = false;
      }, 2000);
    };



</script>
