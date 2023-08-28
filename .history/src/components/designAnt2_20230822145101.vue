<template>
  <a-button class="custom-button">
    <a-icon type="fire" /> Nút Tùy Chỉnh
  </a-button>
</template>

<script>
import { Button, Icon } from 'ant-design-vue';

export default {
  components: {
    'a-button': Button,
    'a-icon': Icon,
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
