<template>
  <a-space style="width: 100%">
    <Button type="primary" loading>Loading</Button>
    <Button type="primary" size="small" loading>Loading</Button>
  </a-space>
  <a-space style="width: 100%">
    <Button type="primary" :loading="loading" @mouseenter="loading = true">
      mouseenter me!
    </Button>
    <Button type="primary" :loading="iconLoading" @click="enterIconLoading">
      <template #icon><PoweroffOutlined /></template>
      延迟1s
    </Button>
  </a-space>
  <a-space style="width: 100%">
    <Button type="primary" loading />
    <Button type="primary" shape="circle" loading />
    <Button danger shape="round" loading />
  </a-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { PoweroffOutlined } from '@ant-design/icons-vue';
import { Button , s} from "ant-design-vue"

interface DelayLoading {
  delay: number;
}
export default defineComponent({
  components: { PoweroffOutlined, Button },
  setup() {
    const iconLoading = ref<boolean | DelayLoading>(false);
    const enterIconLoading = () => {
      iconLoading.value = { delay: 1000 };

      setTimeout(() => {
        iconLoading.value = false;
      }, 6000);
    };
    return {
      loading: ref(false),
      iconLoading,
      enterIconLoading,
    };
  },
});
</script>

