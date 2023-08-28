<template>
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item label="Name" required>
      <a-input v-model:value="name" />
    </a-form-item>
    <a-button type="primary" html-type="submit">Add</a-button>
  </a-form>
</template>

<script setup>
import { Form, Input, Button, message } from 'ant-design-vue';
import { useForm } from '@vue/form';
import { ref } from 'vue';

const form = useForm();
const name = ref('');

const handleSubmit = async () => {
  try {
    await form.validateFields();
    // Gửi dữ liệu lên API để thêm mới
    message.success('Added successfully');
    // Reset form
    form.resetFields();
  } catch (error) {
    console.error('Error:', error);
  }
};
</script>
