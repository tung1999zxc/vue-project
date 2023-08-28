<template>
  <div>
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item label="Tên" name="name" rules="required">
        <a-input v-model="formData.name" />
      </a-form-item>
      <a-form-item label="Tuổi" name="age" rules="required">
        <a-input-number v-model="formData.age" />
      </a-form-item>
      <a-button type="primary" html-type="submit">Thêm</a-button>
    </a-form>

    <a-table :columns="columns" :data-source="dataList" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Form, Input, InputNumber, Button, Table } from 'ant-design-vue';

const form = Form.useForm()[0];
const formData = ref({
  name: '',
  age: '',
});

const handleSubmit = () => {
  form.validateFields().then(() => {
    // Thêm dữ liệu mới vào bảng
    const newData = { key:dataList.value.length + 1 , ...formData };
    dataList.value.push(newData);

    // Đặt lại biểu mẫu
    form.resetFields();
  });
};

const columns = [
  {
    title: 'Tên',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Tuổi',
    dataIndex: 'age',
    key: 'age',
  },
];

const dataList = ref([
  { key: '1', name: 'John', age: 25 },
  { key: '2', name: 'Jane', age: 30 },
]);

</script>

<style>
/* Thêm phần tùy chỉnh cho giao diện người dùng tại đây */
</style>
