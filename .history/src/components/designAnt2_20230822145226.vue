<template>
  <a-button class="custom-button">
    <a-icon type="fire-outlined" /> Nút Tùy Chỉnh
  </a-button>
</template>

<script>
import { Button, Icon as AIcon } from 'ant-design-vue';

export default {
  components: {
    'a-button': Button,
    'a-icon': AIcon,
  },
};
</script>

<style>
.custom-button {
  background-color: red;
  border-color: red;
  color: white;
}
</style>
