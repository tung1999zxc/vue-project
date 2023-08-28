<template>
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item label="Name" required>
      <a-input v-model:value="name" />
    </a-form-item>
    <a-button type="primary" html-type="submit">Add</a-button>
  </a-form>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { Form, Input, Button, message } from 'ant-design-vue';

export default defineComponent({
  components: {
    'a-form': Form,
    'a-form-item': Form.Item,
    'a-input': Input,
    'a-button': Button,
  },
  setup() {
    const form = Form.useForm();
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

    return { form, name, handleSubmit };
  },
});
</script>
